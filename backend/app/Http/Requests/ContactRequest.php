<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class ContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'mobile' => 'required',
            'telephone' => 'required',
            'email' => 'required|email|unique:contacts,email',
        ];
    }

    // public function failedValidation(Validator $validator)
    // {
    //     throw new HttpResponseException(response()->json([
    //         'success' => false,
    //         'message' => 'Validation errors',
    //         'errors' => $validator->errors(),
    //     ]));
    // }

    public function messages()
    {
        return [
            'name.required' => 'Name Field is required',
            'mobile.required' => 'Mobile Field is required',
            'telephone.required' => 'Telephone Field is required',
            'email.required' => 'Email Field is required',
            'email.unique' => 'Email address already in use.',
        ];
    }
}


