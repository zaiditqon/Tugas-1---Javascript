<?php
// Tampilkan semua error untuk mempermudah debugging saat belajar
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tugas PHP 1 — Form Nilai Ujian</title>
  <style>
    :root{--bg:#0f172a;--card:#111827;--ink:#e5e7eb;--muted:#94a3b8;--accent:#22c55e;--warn:#ef4444;}
    *{box-sizing:border-box;}
    body{margin:0;padding:32px;background:var(--bg);font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,'Helvetica Neue',Arial,'Noto Sans',sans-serif;color:var(--ink);}
    .container{max-width:640px;margin:auto;background:var(--card);padding:28px;border-radius:16px;box-shadow:0 20px 40px rgba(0,0,0,.25);}
    h1{margin:0 0 8px;font-size:24px}
    p.lead{margin:0 0 24px;color:var(--muted);}
    .row{display:flex;gap:16px;flex-wrap:wrap;}
    label{display:block;margin:12px 0 6px;color:var(--muted);}
    input[type=text],input[type=email],input[type=number]{width:100%;padding:12px 14px;border-radius:10px;border:1px solid #334155;background:#0b1220;color:var(--ink)}
    input[type=submit]{margin-top:16px;padding:12px 16px;border:0;border-radius:10px;background:linear-gradient(90deg,#22c55e,#16a34a);color:white;font-weight:600;cursor:pointer}
    .result{margin-top:20px;padding:14px 16px;border-radius:12px;background:#0b1220;border:1px solid #1f2937}
    .badge{display:inline-block;padding:6px 10px;border-radius:999px;font-weight:700;font-size:12px}
    .pass{background:#052e1b;color:#86efac;border:1px solid #14532d}
    .remed{background:#3f0a0a;color:#fecaca;border:1px solid #7f1d1d}
    code{background:#0b1220;border:1px solid #1f2937;border-radius:6px;padding:2px 6px}
    footer{margin-top:20px;color:var(--muted);font-size:12px}
  </style>
</head>
<body>
  <div class="container">
    <h1>Tugas — Struktur Kendali & Form Processing</h1>
    <p class="lead">Masukkan data berikut, lalu sistem akan menentukan status kelulusan berdasarkan nilai ujian.</p>

    <form method="POST" action="">
      <div class="row">
        <div style="flex:1 1 100%">
          <label for="nama">Nama</label>
          <input type="text" id="nama" name="nama" placeholder="Nama lengkap" required>
        </div>
        <div style="flex:1 1 100%">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="nama@email.com" required>
        </div>
        <div style="flex:1 1 180px">
          <label for="nilai">Nilai Ujian (0–100)</label>
          <input type="number" id="nilai" name="nilai" min="0" max="100" step="1" required>
        </div>
      </div>
      <input type="submit" value="Kirim">
    </form>

    <?php if ($_SERVER['REQUEST_METHOD'] === 'POST'): 
      // Ambil & sanitasi sederhana
      $nama  = htmlspecialchars(trim($_POST['nama'] ?? ''), ENT_QUOTES, 'UTF-8');
      $email = htmlspecialchars(trim($_POST['email'] ?? ''), ENT_QUOTES, 'UTF-8');
      $nilai = is_numeric($_POST['nilai'] ?? null) ? (int)$_POST['nilai'] : null;

      // Validasi dasar server-side
      $errors = [];
      if ($nama === '')  $errors[] = 'Nama wajib diisi.';
      if ($email === '') $errors[] = 'Email wajib diisi.';
      if ($nilai === null || $nilai < 0 || $nilai > 100) $errors[] = 'Nilai harus angka 0–100.';
    ?>
      <div class="result">
        <h3>Hasil</h3>
        <?php if ($errors): ?>
          <ul>
            <?php foreach ($errors as $e): ?>
              <li><?= $e ?></li>
            <?php endforeach; ?>
          </ul>
        <?php else: ?>
          <p><strong>Nama:</strong> <?= $nama ?></p>
          <p><strong>Email:</strong> <?= $email ?></p>
          <p><strong>Nilai:</strong> <?= $nilai ?></p>
          <?php if ($nilai > 70): ?>
            <p><span class="badge pass">Lulus ✅</span></p>
          <?php else: ?>
            <p><span class="badge remed">Remedial ❌</span></p>
          <?php endif; ?>
        <?php endif; ?>
      </div>
    <?php endif; ?>

    <footer>
      <p>Hint: File ini self-contained. Kamu bisa menaruhnya di <code>htdocs/tugas-php-1/index.php</code> lalu buka <code>http://localhost/tugas-php-1/</code>.</p>
    </footer>
  </div>
</body>
</html>
