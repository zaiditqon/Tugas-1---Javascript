<?php

namespace App\Http\Controllers;

use App\Models\Author;

class AuthorController extends Controller
{
    public function index()
    {
        $authors = (new Author())->all();
        return view('authors.index', compact('authors'));
    }
}
