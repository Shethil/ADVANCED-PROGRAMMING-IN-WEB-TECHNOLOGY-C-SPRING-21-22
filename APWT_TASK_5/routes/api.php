<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\journalistController;

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


// Laravel API
Route::get("list/{id?}",[journalistController::class,'list']);
Route::post("add1",[journalistController::class,'add1']);
Route::put("update1",[journalistController::class,'update1']);
Route::get("search1/{name}",[journalistController::class,'search1']);
Route::delete("delete1/{id}",[journalistController::class,'delete1']);
