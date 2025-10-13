<?php

namespace App\Models;

class Genre
{
    private array $items = [
        ['id' => 1, 'name' => 'Fantasy', 'desc' => 'Dunia magis & petualangan'],
        ['id' => 2, 'name' => 'Science Fiction', 'desc' => 'Teknologi & masa depan'],
        ['id' => 3, 'name' => 'Mystery', 'desc' => 'Misteri & investigasi'],
        ['id' => 4, 'name' => 'Romance', 'desc' => 'Kisah cinta'],
        ['id' => 5, 'name' => 'Horror', 'desc' => 'Suasana mencekam'],
    ];

    public function all(): array
    {
        return $this->items;
    }
}
