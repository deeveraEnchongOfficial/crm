<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use App\Notifications\ContactCatch;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class ContactsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $column = ['id' , 'name' , 'email' , 'mobile' , 'telephone' , 'created_at'];
        if($request->search){
            $contacts = Contact::select($column)
                        ->where('name','like','%'.$request->search.'%')
                        ->orWhere('name','like','%'.$request->search.'%')
                        ->orderBy('created_at', 'DESC')
                        ->paginate($request->perPage);
        }else{
            $contacts = Contact::select($column)  
                        ->orderBy('created_at', 'DESC')
                        ->paginate($request->perPage);
        }
        return response()->json($contacts);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ContactRequest $request)
    {
        $contact = Contact::create($request->validated());
        
        Notification::route('mail', 'sales@outsoar.ph')
            ->notify(new ContactCatch($contact));

        return response()->json(['message' => 'Contact created.'] , 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $contact = Contact::findOrFail($id);

        return response()->json($contact);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ContactRequest $request, Contact $contact)
    {
        $contact->update($request->validated());
        return response()->json(['message' => 'Contact Updated successfully.']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();

        return response()->json(['message' => 'Contact Deleted successfully.']);
    }
}
