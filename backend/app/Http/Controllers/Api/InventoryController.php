<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Inventory;
use App\Http\Requests\CreateInventoryRequest;

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

    public function purchase(Request $request)
    {

        $user = Auth::user();

        // sample payload
        // {
        //     "purchases": [
        //       {
        //         "product_id": 1,
        //         "quantity": 2
        //       },
        //       {
        //         "product_id": 2,
        //         "quantity": 3
        //       }
        //     ]
        // }

        $purchases = $request->input('purchases');

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

            // // Call the function on the PurchasedController
            // $purchasedController = new PurchasedController();
            // dd($purchasedController);
            // $purchasedController->processPurchasedItems();
            // Save the purchased item to the "Purchased" table
            // $total = $quantityPurchased * $inventory->unit_price;

            // $purchased = new Purchased();
            // $purchased->user_id = $user->id;
            // $purchased->inventory_id = $inventoryId;
            // $purchased->quantity = $quantityPurchased;
            // $purchased->total = $total;
            // $purchased->save();

        }

        return response()->json(['message' => 'Inventory quantities and prices deducted successfully']);
    }
}
