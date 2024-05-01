<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Borrowers;
use App\Models\Student;
use App\Models\Book;

class BorrowerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $borrower = Borrowers::all();
    
        return response()->json([
            $borrower,
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
        $student = Student::where('studentID', $request->input('studentID'))->first();
        $book = Book::where('bookID', $request->input('bookID'))->first();
        
 
        if ($student && $book) {

            $studentName = $student->firstname . ' ' . $student->lastname;

            $borrower = new Borrowers();
            $borrower->bookname = $book->bookname;
            $borrower->studentname = $studentName;
            $borrower->date = now();
            $borrower->status = 'borrowed'; 
            $borrower->save();
    

            return response()->json(['message' => 'Book borrowed successfully']);
        } else {

            return response()->json(['error' => 'Student or book not found'], 404);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //

    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, int $id)
    {
        $borrowers = Borrowers::find($id);
        $borrowers->update(
            [
                'status' => $request->status
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
        //
    }
}
