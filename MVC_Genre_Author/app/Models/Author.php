<?php

namespace App\Models;

class Author
{
    private array $items = [
        ['id' => 1, 'name' => 'J. K. Rowling', 'country' => 'UK'],
        ['id' => 2, 'name' => 'Isaac Asimov', 'country' => 'USA'],
        ['id' => 3, 'name' => 'Agatha Christie', 'country' => 'UK'],
        ['id' => 4, 'name' => 'Jane Austen', 'country' => 'UK'],
        ['id' => 5, 'name' => 'Stephen King', 'country' => 'USA'],
    ];

    public function all(): array
    {
        return $this->items;
    }
}
