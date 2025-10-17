<?php

namespace App\Http\Controllers;

use App\Models\Author;

class AuthorController extends Controller
{
    public function index()
    {
        $authors = (new Author())->all();

        return response()->json([
            'success' => true,
            'message' => 'Get All Resource',
            'data'    => $authors,
        ], 200);
    }
}
