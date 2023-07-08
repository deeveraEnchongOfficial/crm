<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Inventory;
use App\Http\Requests\CreateInventoryRequest;
use App\Models\Purchased;

class InventoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $inventories = Inventory::all();

        return response()->json([
            'inventories' => $inventories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateInventoryRequest $request)
    {
        $validatedData = $request->validated();

        $inventory = Inventory::create($validatedData);

        return response()->json([
            'inventory' => $inventory,
            'message' => 'Inventory created successfully.',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CreateInventoryRequest $request, $id)
    {
        $inventory = Inventory::findOrFail($id);

        $validatedData = $request->validated();

        $inventory->inventory::update($validatedData);

        return response()->json([
            'inventory' => $inventory,
            'message' => 'Inventory updated successfully.',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $inventory = Inventory::findOrFail($id);

        $inventory->delete();

        return response()->json([
            'message' => 'Inventory deleted successfully.',
        ]);
    }

    public function purchase(Request $request, PurchasedController $purchasedController)
    {

        // sample payload
        // {
        //     "purchases": [
        //         {
        //             "inventory_id": 1,
        //             "quantity": 2
        //         },
        //         {
        //             "inventory_id": 2,
        //             "quantity": 3
        //         }
        //     ]
        // }

        $user = Auth::user();
        $purchases = $request->input('purchases');
        $purchaseTotals = [];

        foreach ($purchases as $purchase) {
            $inventoryId = $purchase['inventory_id'];
            $quantityPurchased = $purchase['quantity'];

            $inventory = Inventory::find($inventoryId);

            if (!$inventory) {
                return response()->json(['error' => 'Inventory not found'], 404);
            }

            if ($inventory->quantity < $quantityPurchased) {
                return response()->json(['error' => 'Insufficient quantity for inventory ID: ' . $inventoryId], 400);
            }

            $inventory->quantity -= $quantityPurchased;
            $inventory->price -= ($quantityPurchased * $inventory->unit_price);
            $inventory->save();

            $total = $quantityPurchased * $inventory->price;

            $result = $purchasedController->processPurchasedItems($user, $inventoryId, $quantityPurchased, $total);

            if (!$result) {
                return response()->json(['error' => 'Failed to process purchased item'], 400);
            }

            $purchaseTotals[] = $result;
        }

        return response()->json([
            'message' => 'Inventory quantities and prices deducted successfully',
            'purchase_totals' => $purchaseTotals,
        ]);
    }
}
