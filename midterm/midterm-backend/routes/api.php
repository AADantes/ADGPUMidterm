<?php

use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BorrowerController;
use App\Http\Controllers\BookController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('borrowers', [BorrowerController::class, 'index']);
Route::post('borrowers/add', [BorrowerController::class, 'store']);
Route::put('borrowers/{id}/edit', [BorrowerController::class, 'edit']);

Route::get('students', [StudentController::class,'index']);
Route::post('students/add', [StudentController::class, 'store']);
Route::put('students/{id}/edit', [StudentController::class, 'edit']);
Route::delete('students/{id}/delete', [StudentController::class, 'destroy']);

Route::get('books', [BookController::class,'index']);
Route::post('books/add', [BookController::class, 'store']);
Route::put('books/{id}/edit', [BookController::class, 'edit']);
Route::delete('books/{id}/delete', [BookController::class, 'destroy']);