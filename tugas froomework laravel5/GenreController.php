<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Genre;

class GenreController extends Controller
{
    public function index()
    {
        $genres = (new Genre())->all();
        return response()->json([
            'success' => true,
            'message' => 'Get All Resource',
            'data'    => $genres,
        ], 200);
    }

    public function store(Request $request)
    {
        $name = trim((string) $request->input('name', ''));
        $desc = $request->input('desc');

        if ($name === '') {
            return response()->json([
                'success' => false,
                'message' => 'Validation error',
                'errors'  => ['name' => ['The name field is required.']]
            ], 422);
        }

        $created = (new Genre())->create(['name' => $name, 'desc' => $desc]);

        return response()->json($created, 201, [
            'Location' => url('/api/genres/'.$created['id'])
        ]);
    }
}
