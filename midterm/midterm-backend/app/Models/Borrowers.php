<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Borrowers extends Model
{
    use HasFactory;

    
    protected $table = 'borrowers';
    public $timestamps = false;


    protected $fillable = [
        'id',
        'bookname',
        'studentname',
        'date',
        'status'
        
        ];

    public function student()
{
    return $this->hasMany(Student::class);
}

public function book()
{
    return $this->hasMany(Book::class);
}
}
