<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\JournalistController;
use App\Http\Controllers\MailController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/adminlogin', [AdminController::class,'adminlogin'])->name('adminlogin');
Route::post('/adminlogin', [AdminController::class,'adminlogininput'])->name('adminlogin');
Route::get('/dashboard', [AdminController::class,'dashboard'])->name('dashboard')->middleware('validAdmin');
Route::get('/logout', [AdminController::class,'logout'])->name('logout');

Route::get('/addJournalist', [JournalistController::class,'addJournalist'])->name('addJournalist')->middleware('validAdmin');
Route::post('/addJournalist', [JournalistController::class,'addJournalistinput'])->name('addJournalist');
Route::get('/journalistList', [JournalistController::class,'JournalistList'])->name('journalistList')->middleware('validAdmin');
Route::get('/journalistEdit/{id}', [JournalistController::class,'JournalistEdit'])->middleware('validAdmin');
Route::post('/journalistEdit', [JournalistController::class,'JournalistEditSubmitted'])->middleware('validAdmin');
Route::get('/journalistDelete/{id}', [JournalistController::class,'journalistDelete'])->name('journalistDelete')->middleware('validAdmin');

Route::get('/send-email', [MailController::class,'sendEmail']);