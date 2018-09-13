<?php

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

Route::get('/', 'AppController@app')->name('home');

Route::get('/{name}', 'AppController@app')->where('name', '[A-Za-z]+');

Route::get('/{name}/{child}', 'AppController@app')->where('name', '[A-Za-z]+');
