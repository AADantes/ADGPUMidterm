<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        $book = Book::all();
    
        return response()->json([
            $book,
        ],200);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $book = Book::create(
            [
                'bookname' => $request->bookname,
                'description' => $request->description,
                'state' => $request->state

            ]
        );
        
        if ($book)
        {
            echo "book Added";
        }
        else
        {
            echo "error";
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, int $id)
    {
        $books = Book::find($id);
        $books->update(
            [
                'bookname' => $request->bookname,
                'description' => $request->description,
                'state' => $request->state
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $books = Book::find( $id );
        $books->delete();
    }
}
