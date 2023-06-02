<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\InquiryRequest;
use App\Models\Inquiry;
use App\Notifications\InquiryCatch;
use App\Notifications\InquiryResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Notification;

class InquiriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = $request->input('search');
        $query = Inquiry::query();
    
        if (!empty($search)) {
            $query->where(function ($query) use ($search) {
                $query->where('name', 'LIKE', '%' . $search . '%')
                    ->orWhere('email', 'LIKE', '%' . $search . '%');
            });
        }

        $inquiries = $query->orderBy('created_at', 'DESC')->paginate($request->perPage);

        return response()->json($inquiries);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(InquiryRequest $request)
    {
        $inquiry = Inquiry::create($request->validated());
        $data = $request->validated();
 
        $email = $data['email'] ?? '';
        $name = $data['name'] ?? '';
        $subject = $data['subject'] ?? '';
        $description = $data['description'] ?? '';

        $message = <<<EOT
        Name: {$name}
        Email: {$email}
        Subject: {$subject}
        Body: {$description}
        EOT;

        Http::post('https://discord.com/api/webhooks/1006127872114700388/wnrJhPeQdBFWvH7umSYwxQjajppuWGi1213nEzh0cnVRCr0z1-4NEKVH63rGi5JpHLpJ', [
            'username' => 'cooper',
            'content' => $message,
        ]);
        // TODO: aws ses need to get production ready credentials
        Notification::route('mail', $data['email'])
            ->notify(new InquiryResponse($data));
        Notification::route('mail', 'sales@outsoar.ph')
            ->notify(new InquiryCatch($data));

        return response()->json($inquiry, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $inquiry = Inquiry::findOrFail($id);

        return response()->json($inquiry);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(InquiryRequest $request, Inquiry $inquiry)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'subject' => 'string|max:255',
            'description' => 'nullable',
            'company' => 'nullable',
            'mobile' => 'nullable',
            'telephone' => 'nullable',
        ]);

        $inquiry->update($request->validated());
        return response()->json(['message' => 'Inquiry updated successfully.']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Inquiry $inquiry)
    {
        $inquiry->delete();

        return response()->json(['message' => 'Inquiry deleted successfully.']);
    }
}
