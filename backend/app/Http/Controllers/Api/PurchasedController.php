<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePurchasedRequest;
use App\Http\Requests\UpdatePurchasedRequest;
use App\Models\Purchased;
use App\Models\Inventory;

class PurchasedController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePurchasedRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePurchasedRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Purchased  $purchased
     * @return \Illuminate\Http\Response
     */
    public function show(Purchased $purchased)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Purchased  $purchased
     * @return \Illuminate\Http\Response
     */
    public function edit(Purchased $purchased)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePurchasedRequest  $request
     * @param  \App\Models\Purchased  $purchased
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePurchasedRequest $request, Purchased $purchased)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Purchased  $purchased
     * @return \Illuminate\Http\Response
     */
    public function destroy(Purchased $purchased)
    {
        //
    }

    public function processPurchasedItems($user, $inventoryId, $quantityPurchased, $total)
    {
        $inventory = Inventory::find($inventoryId);

        if (!$inventory) {
            return false;
        }

        if ($inventory->quantity < $quantityPurchased) {
            return false;
        }

        $purchased = new Purchased();
        $purchased->user_id = $user->id;
        $purchased->inventory_id = $inventoryId;
        $purchased->quantity = $quantityPurchased;
        $purchased->total = $total;
        $purchased->save();

        return [
            'inventory_id' => $inventoryId,
            'total' => $total,
        ];
    }
}
