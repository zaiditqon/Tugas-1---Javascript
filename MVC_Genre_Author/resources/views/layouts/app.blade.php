<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>MVC Sederhana</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 2rem; }
    a { margin-right: 1rem; }
    table { border-collapse: collapse; width: 100%; margin-top: 1rem; }
    th, td { border: 1px solid #ddd; padding: 8px; }
    th { background: #f3f3f3; }
  </style>
</head>
<body>
  <nav>
    <a href="{{ route('genres.index') }}">Genres</a>
    <a href="{{ route('authors.index') }}">Authors</a>
  </nav>
  <hr>
  @yield('content')
</body>
</html>
