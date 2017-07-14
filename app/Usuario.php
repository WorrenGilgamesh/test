<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    public $table = "user";
    protected $primaryKey = "oid";
    public $timestamps = false;
    protected $fillable = ['nombre', 'descripcion','activo'];

    public function cartillaProfesionalEmpleado(){
        return $this->hasMany("App\CartillaProfesionalEmpleado","cartillaProfesionalSeccionId","oid");
    }
}
