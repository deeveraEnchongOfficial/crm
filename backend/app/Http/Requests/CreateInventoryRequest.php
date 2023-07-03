<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateInventoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'item_name' => 'required|string',
            'price' => 'required|numeric',
            'currency' => 'required|string',
            'quantity' => 'required|integer',
            'unit' => 'required|string',
            'vendor_supplier' => 'required|string',
            'type' => 'required|string',
            'code' => 'required|string',
            'category' => 'required|string',
            'location' => 'required|string',
            'description' => 'nullable|string',
        ];
    }
}
