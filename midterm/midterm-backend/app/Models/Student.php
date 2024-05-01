<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $table = 'students';
    public $timestamps = false;
    protected $primaryKey = 'studentID';


    protected $fillable = [
        'studentID',
        'firstname',
        'lastname'

        ];

        public function borrowers()
        {
            return $this->belongsTo(Borrowers::class);
        }
}
