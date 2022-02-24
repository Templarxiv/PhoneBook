<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Phone;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::resource('contacts', 'App\Http\Controllers\ContactController')->only([
//     'index', 'show', 'store', 'update', 'destroy'
// ]);
Route::resource('contacts', 'App\Http\Controllers\ContactController');
Route::resource('contacts.phones', 'App\Http\Controllers\PhoneController');

// Route::bind('phones', function ($phone, $route) {
//     return Phone::where('contact_id', $route->parameter('contact'))->findOrFail($phone);
// });
// Route::get('contacts', 'App\Http\Controllers\ContactController@index');
// Route::get('contacts/create', 'App\Http\Controllers\ContactController@store');
// Route::get('contacts/{id}', 'App\Http\Controllers\ContactController@show');
// Route::get('contacts/{id}/update', 'App\Http\Controllers\ContactController@update');
// Route::get('contacts/{id}/delete', 'App\Http\Controllers\ContactController@destroy');
