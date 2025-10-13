@extends('layouts.app')

@section('content')
<h1>Daftar Genre</h1>
<table>
  <thead>
    <tr>
      <th>ID</th><th>Nama</th><th>Deskripsi</th>
    </tr>
  </thead>
  <tbody>
  @foreach ($genres as $g)
    <tr>
      <td>{{ $g['id'] }}</td>
      <td>{{ $g['name'] }}</td>
      <td>{{ $g['desc'] }}</td>
    </tr>
  @endforeach
  </tbody>
</table>
@endsection
