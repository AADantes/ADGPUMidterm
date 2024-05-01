<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        $student = Student::all();
    
        return response()->json([
            $student,
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
        $student = Student::create(
            [
                'firstname' => $request->firstname,
                'lastname' => $request->lastname,

            ]
        );
        
        if ($student)
        {
            echo "student Added";
        }
        else
        {
            echo "error";
        }


    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {



    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, int $id)
    {
        $students = Student::find($id);
        $students->update(
            [
                'firstname' => $request->firstname,
                'lastname' => $request->lastname,
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
        $books = Student::find( $id );
        $books->delete();
    }
}
