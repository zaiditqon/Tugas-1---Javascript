// main.mjs

// ===== DATA (array of object 10 data) =====
let users = [
  { nama: "Ani",  umur: 20, alamat: "Jl. Melati 1",  email: "ani@example.com" },
  { nama: "Budi", umur: 21, alamat: "Jl. Kenanga 2", email: "budi@example.com" },
  { nama: "Cici", umur: 22, alamat: "Jl. Mawar 3",   email: "cici@example.com" },
  { nama: "Dedi", umur: 23, alamat: "Jl. Anggrek 4", email: "dedi@example.com" },
  { nama: "Eka",  umur: 24, alamat: "Jl. Flamboyan", email: "eka@example.com" },
  { nama: "Fani", umur: 20, alamat: "Jl. Dahlia 6",  email: "fani@example.com" },
  { nama: "Gita", umur: 21, alamat: "Jl. Sakura 7",  email: "gita@example.com" },
  { nama: "Hari", umur: 22, alamat: "Jl. Kamboja 8", email: "hari@example.com" },
  { nama: "Inda", umur: 23, alamat: "Jl. Nusa 9",    email: "inda@example.com" },
  { nama: "Joko", umur: 24, alamat: "Jl. Merdeka 10",email: "joko@example.com" },
];

// ===== CONTROLLER =====
function index() {
  console.log("=== DAFTAR USERS ===");
  users.map((u, i) => {
    console.log(`${i + 1}. ${u.nama} (${u.umur}) - ${u.alamat} - ${u.email}`);
  });
  console.log(`Total: ${users.length} user\n`);
}

function store(...newUsers) {
  if (newUsers.length === 0) {
    console.log("Tidak ada data yang ditambahkan.\n");
    return;
  }
  users.push(...newUsers); // proses push
  console.log(`Berhasil menambah ${newUsers.length} user.\n`);
}

function destroy(identifier) {
  if (typeof identifier === "number") {
    if (identifier < 0 || identifier >= users.length) {
      console.log("Index tidak valid.\n");
      return;
    }
    const [removed] = users.splice(identifier, 1);
    console.log(`Berhasil menghapus: ${removed.nama}\n`);
    return;
  }

  const idx = users.findIndex((u) => u.email === identifier);
  if (idx === -1) {
    console.log("User dengan email tsb tidak ditemukan.\n");
    return;
  }
  const [removed] = users.splice(idx, 1);
  console.log(`Berhasil menghapus: ${removed.nama}\n`);
}

// ===== MAIN =====
function main() {
  // 1) Lihat data awal
  index();

  // 2) Tambahkan minimal 2 data
  store(
    { nama: "Kina", umur: 20, alamat: "Jl. Pelita 11", email: "kina@example.com" },
    { nama: "Lulu", umur: 22, alamat: "Jl. Cendana 12", email: "lulu@example.com" }
  );

  // 3) Lihat setelah penambahan
  index();

  // 4) Hapus satu data (contoh: berdasarkan email)
  destroy("budi@example.com");

  // 5) Lihat setelah penghapusan
  index();
}

main();
