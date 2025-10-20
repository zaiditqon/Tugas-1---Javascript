<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    // Menampilkan semua author
    public function index()
    {
        return response()->json([
            'message' => 'Authors fetched successfully',
            'data' => Author::orderBy('id', 'desc')->get()
        ], 200);
    }

    // Menyimpan author baru
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:150'],
            'bio'  => ['nullable', 'string']
        ]);

        $author = Author::create($validated);

        return response()->json([
            'message' => 'Author created successfully',
            'data' => $author
        ], 201);
    }

    // Menampilkan author berdasarkan ID
    public function show(Author $author)
    {
        return response()->json([
            'message' => 'Author fetched successfully',
            'data' => $author
        ], 200);
    }

    // Mengupdate data author
    public function update(Request $request, Author $author)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:150'],
            'bio'  => ['nullable', 'string']
        ]);

        $author->update($validated);

        return response()->json([
            'message' => 'Author updated successfully',
            'data' => $author
        ], 200);
    }

    // Menghapus author
    public function destroy(Author $author)
    {
        $author->delete();
        return response()->json([
            'message' => 'Author deleted successfully'
        ], 204);
    }
}
