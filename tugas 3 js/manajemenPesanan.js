// Daftar produk toko
let produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

// Fungsi untuk menambahkan produk baru
function tambahProduk(nama, harga, stok) {
    const id = produkToko.length + 1; // Menentukan ID berdasarkan panjang array
    let produkBaru = {id: id, nama: nama, harga: harga, stok: stok};
    produkToko.push(produkBaru);
    console.log(`${nama} telah ditambahkan ke produk toko.`);
}

// Fungsi untuk menghapus produk berdasarkan ID
function hapusProduk(id) {
    const index = produkToko.findIndex(produk => produk.id === id);
    if (index !== -1) {
        const produkHapus = produkToko.splice(index, 1);
        console.log(`${produkHapus[0].nama} telah dihapus dari produk toko.`);
    } else {
        console.log("Produk tidak ditemukan.");
    }
}

// Fungsi untuk menampilkan daftar produk
function tampilkanProduk() {
    console.log("Daftar Produk Toko:");
    produkToko.forEach(produk => {
        console.log(`ID: ${produk.id} | Nama: ${produk.nama} | Harga: ${produk.harga} | Stok: ${produk.stok}`);
    });
}

// Contoh penggunaan
tampilkanProduk(); // Menampilkan daftar produk awal

tambahProduk("Monitor", 2500000, 3); // Menambahkan produk baru

tampilkanProduk(); // Menampilkan daftar produk setelah penambahan produk baru

hapusProduk(2); // Menghapus produk berdasarkan ID

tampilkanProduk(); // Menampilkan daftar produk setelah penghapusan produk
