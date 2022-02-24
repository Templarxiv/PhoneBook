<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Phone;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ContactController extends Controller
{

    public function index()
    {
        $contacts = Contact::orderBy('created_at', 'desc')->get();

        return  response()->json($contacts, 200);
    }

    public function show($id)
    {
        $contact = Contact::find($id);
        if ($contact == null)
            return response()->json(['error' => 'Contact not found.'], 401);
        $contact['phones'] = Phone::where('contact_id', $id);
        return  response()->json($contact, 200);
    }

    public function store(Request $request)
    {
        $input = $request->json()->all();
        if (!isset($input['name']))
            return response()->json(['error' => 'Name not found.'], 401);
        $contact = new Contact;
        $contact->name = $input['name'];
        $contact->comment = isset($input['comment']) ? $input['comment'] : '';        
        $contact->save();
        
        return response()->json(['success' => $contact], 200);
    }

    public function update(Request $request, $id)
    {
        $input = $request->json()->all();
        $contact = Contact::find($id);
        if ($contact == null)
            return response()->json(['error' => 'Contact not found.'], 401);

        if (!isset($input['name']))
            return response()->json(['error' => 'Name not found.'], 401);


        $contact->name = $input['name'];
        $contact->comment = isset($input['comment']) ? $input['comment'] : '';
        $contact->save();
        return response()->json(['success' => $contact], 200);
    }

    public function destroy($id)
    {
        $contact = Contact::find($id);
        if ($contact == null)
            return response()->json(['error' => 'Contact not found.'], 401);

        Phone::where('contact_id', $id)->delete();
        $contact->delete();

        return response()->json(['success' => $contact], 200);
    }
}
