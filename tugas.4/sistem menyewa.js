// === Kelas Kendaraan (superclass) ===
class Kendaraan {
  constructor(merk, model) {
    this.merk = merk;
    this.model = model;
  }
  deskripsi() {
    return `${this.merk} ${this.model}`;
  }
}

class Mobil extends Kendaraan {
  bergerak() {
    return "Mobil melaju di jalan raya";
  }
}

class Motor extends Kendaraan {
  bergerak() {
    return "Motor melaju di jalur motor";
  }
}

// === Kelas Pelanggan ===
class Pelanggan {
  constructor(nama, nomorTelepon) {
    if (!nama || !nomorTelepon) throw new Error("Nama dan nomor telepon wajib diisi!");
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null;
  }

  sewaKendaraan(kendaraan) {
    this.kendaraanDisewa = kendaraan;
  }

  kembalikanKendaraan() {
    this.kendaraanDisewa = null;
  }

  info() {
    return `${this.nama} | ${this.nomorTelepon} | ${this.kendaraanDisewa ? this.kendaraanDisewa.deskripsi() : '-'}`;
  }
}

// === Sistem Rental ===
class SistemRental {
  constructor() {
    this.pelangganList = [];
  }

  tambahPelanggan(pelanggan) {
    this.pelangganList.push(pelanggan);
  }

  tampilkanDaftarPenyewa() {
    console.log("=== Daftar Pelanggan yang Sedang Menyewa ===");
    this.pelangganList
      .filter(p => p.kendaraanDisewa)
      .forEach(p => console.log(p.info()));
  }
}

// === Contoh Penggunaan ===
const rental = new SistemRental();

// Buat kendaraan
const avanza = new Mobil("Toyota", "Avanza");
const cbr = new Motor("Honda", "CBR");

// Buat pelanggan
const budi = new Pelanggan("Budi", "08123456789");
const siti = new Pelanggan("Siti", "08234567890");

// Tambahkan pelanggan ke sistem
rental.tambahPelanggan(budi);
rental.tambahPelanggan(siti);

// Catat transaksi sewa
budi.sewaKendaraan(avanza);
siti.sewaKendaraan(cbr);

// Tampilkan daftar penyewa aktif
rental.tampilkanDaftarPenyewa();
