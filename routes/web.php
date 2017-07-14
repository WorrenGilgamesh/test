<?php


	Route::get('/', function () {
	    return view('welcome');
	});

	Route::get('/Usuario',['uses'=>'UsuarioController@index']); 
    Route::post('/buscarUsuario',['uses'=>'UsuarioController@search']);
    Route::put('/Usuario',['uses'=>'UsuarioController@update']);
    Route::delete('/Usuario/{id}',['uses'=>'UsuarioController@destroy']);
