<?php

namespace App\Http\Controllers;

use App\Models\Genre;

class GenreController extends Controller
{
    public function index()
    {
        $genres = (new Genre())->all();
        return view('genres.index', compact('genres'));
    }
}
