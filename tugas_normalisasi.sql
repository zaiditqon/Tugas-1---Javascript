
-- =====================================================
-- TUGAS NORMALISASI (1NF -> 2NF -> 3NF) - SKEMA FINAL
-- Schema name : tugas_normalisasi
-- Tabel: Personel, Kota, Surat_Tugas
-- Relasi: Personel (1) - (M) Surat_Tugas; Kota (1) - (M) Surat_Tugas
-- =====================================================

DROP DATABASE IF EXISTS tugas_normalisasi;
CREATE DATABASE tugas_normalisasi
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;
USE tugas_normalisasi;

-- Tabel referensi: Personel
CREATE TABLE Personel (
  ID_Personel INT PRIMARY KEY,
  Nama        VARCHAR(100) NOT NULL,
  Alamat      VARCHAR(100) NOT NULL,
  Kesatuan    ENUM('AD','AL','AU') NOT NULL,
  Agama       ENUM('Islam','Katolik','Hindu','Budha') NOT NULL
) ENGINE=InnoDB;

-- Tabel referensi: Kota
CREATE TABLE Kota (
  ID_Kota   INT PRIMARY KEY,
  Nama_Kota VARCHAR(100) NOT NULL UNIQUE,
  Wilayah   ENUM('Wilayah I','Wilayah II','Wilayah III','Wilayah IV') NOT NULL
) ENGINE=InnoDB;

-- Tabel transaksi: Surat_Tugas
CREATE TABLE Surat_Tugas (
  No_Surat_Tugas VARCHAR(20) PRIMARY KEY,
  ID_Personel    INT NOT NULL,
  ID_Kota        INT NOT NULL,
  Mulai          DATE NOT NULL,
  Akhir          DATE NOT NULL,
  CONSTRAINT fk_surat_personel
    FOREIGN KEY (ID_Personel) REFERENCES Personel(ID_Personel)
    ON UPDATE CASCADE ON DELETE RESTRICT,
  CONSTRAINT fk_surat_kota
    FOREIGN KEY (ID_Kota) REFERENCES Kota(ID_Kota)
    ON UPDATE CASCADE ON DELETE RESTRICT,
  INDEX idx_surat_personel (ID_Personel),
  INDEX idx_surat_kota (ID_Kota),
  CONSTRAINT chk_tanggal CHECK (Akhir >= Mulai)
) ENGINE=InnoDB;

-- SAMPLE DATA sesuai tabel pada soal
INSERT INTO Personel (ID_Personel, Nama, Alamat, Kesatuan, Agama) VALUES
(1,'Faiz Fikri','Depok 1','AD','Islam'),
(2,'John Sadewa','Bekasi Timur','AD','Katolik'),
(3,'Dewi Sri','Bogor','AU','Hindu'),
(4,'Ahmad Bayu','Jakarta Timur','AL','Islam'),
(5,'Ike Rahayu','Tangerang','AL','Budha');

INSERT INTO Kota (ID_Kota, Nama_Kota, Wilayah) VALUES
(1,'Bandung','Wilayah II'),
(2,'Jakarta','Wilayah I'),
(3,'Denpasar','Wilayah IV'),
(4,'Yogyakarta','Wilayah IV'),
(5,'Balikpapan','Wilayah III');

INSERT INTO Surat_Tugas (No_Surat_Tugas, ID_Personel, ID_Kota, Mulai, Akhir) VALUES
('ST.001/2008', 1, 1, '2008-01-05', '2008-01-05'),
('ST.002/2010', 2, 2, '2010-02-01', '2010-12-31'),
('ST.003/2011', 3, 3, '2011-01-01', '2011-12-31'),
('ST.008/2011', 4, 4, '2011-03-01', '2011-12-31'),
('ST.010/2010', 5, 5, '2010-12-01', '2011-12-31');

-- Cek hasil: join 3 tabel
SELECT s.No_Surat_Tugas, p.Nama, p.Kesatuan, k.Nama_Kota, k.Wilayah, s.Mulai, s.Akhir
FROM Surat_Tugas s
JOIN Personel p ON s.ID_Personel = p.ID_Personel
JOIN Kota k     ON s.ID_Kota = k.ID_Kota
ORDER BY s.No_Surat_Tugas;

-- Statistik per wilayah
SELECT k.Wilayah, COUNT(*) AS jumlah_surat
FROM Surat_Tugas s
JOIN Kota k ON s.ID_Kota = k.ID_Kota
GROUP BY k.Wilayah
ORDER BY jumlah_surat DESC;
