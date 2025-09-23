// **Data Produk Awal (minimal 5 item)**
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Tablet", harga: 7000000 },
  { id: 4, nama: "Headphone", harga: 1500000 },
  { id: 5, nama: "Keyboard", harga: 800000 }
];

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
  produkList = [...produkList, { id, nama, harga }];
  console.log(`Produk "${nama}" berhasil ditambahkan!`);
}

// **Menghapus Produk dengan Rest Parameter**
function hapusProduk(...id) {
  produkList = produkList.filter(p => !id.includes(p.id));
  console.log(`Produk dengan ID ${id.join(", ")} berhasil dihapus!`);
}

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
  console.log("=== Daftar Produk ===");
  produkList.forEach(({ id, nama, harga }) => {
    console.log(`${id}. ${nama} - Rp ${harga.toLocaleString("id-ID")}`);
  });
}

// **Event Handler**
const eventHandler = {
  tambah: () => tambahProduk(6, "Monitor", 2500000),
  hapus: () => hapusProduk(2, 4),
  tampil: () => tampilkanProduk()
};

// --- Eksekusi ---
tampilkanProduk();      // tampilkan produk awal
eventHandler.tambah();  // tambah produk baru
tampilkanProduk();      // tampilkan setelah tambah
eventHandler.hapus();   // hapus produk id 2 dan 4
tampilkanProduk();      // tampilkan setelah hapus
