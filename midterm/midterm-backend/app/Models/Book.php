<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    
    protected $table = 'books';
    public $timestamps = false;
    protected $primaryKey = 'bookID';

    protected $fillable = [
        'bookID',
        'bookname',
        'description',
        'state',

        
        ];

        public function borrowers()
        {
            return $this->belongsTo(Borrowers::class);
        }
}
