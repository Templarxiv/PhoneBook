<?php

namespace App\Http\Controllers;

use App\Models\Phone;
use App\Models\Contact;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PhoneController extends Controller
{
    public function index($contactId)
    {
        $phones = Phone::where('contact_id', $contactId)->get();
        return response()->json($phones, 200);
    }

    public function show($contactId, $id)
    {
        $phone = Phone::where('contact_id', $contactId)->where('id', $id)->get();
        if ($phone == null)
            return response()->json(['error' => 'Phone not found.'], 401);
        return  response()->json($phone, 200);
    }

    public function store(Request $request)
    {
        return Phone::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $phone = Phone::findOrFail($id);
        $phone->update($request->all());

        return  response()->json($phone, 200);
    }

    public function destroy($id)
    {
        $Phone = Phone::find($id);
        if ($Phone == null)
            return response()->json(['error' => 'Phone not found.'], 401);
        $Phone->delete();
        return response()->json(['success' => $Phone], 200);
    }
}
