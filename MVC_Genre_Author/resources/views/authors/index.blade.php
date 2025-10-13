@extends('layouts.app')

@section('content')
<h1>Daftar Author</h1>
<table>
  <thead>
    <tr>
      <th>ID</th><th>Nama</th><th>Negara</th>
    </tr>
  </thead>
  <tbody>
  @foreach ($authors as $a)
    <tr>
      <td>{{ $a['id'] }}</td>
      <td>{{ $a['name'] }}</td>
      <td>{{ $a['country'] }}</td>
    </tr>
  @endforeach
  </tbody>
</table>
@endsection
