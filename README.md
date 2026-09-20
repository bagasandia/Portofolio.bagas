# Portofolio: React + Tailwind CSS

Website portofolio satu halaman yang sederhana dan modern, dengan tata letak satu kolom yang lega, tautan "chip" di dalam kalimat perkenalan, daftar pengalaman, proyek dengan popup detail dan galeri gambar, sertifikasi, tumpukan foto, dan mode terang/gelap.

## Menjalankan

Butuh Node.js 20.19 atau lebih baru.

```bash
npm install
npm run dev       # buka http://localhost:5173
```

Untuk versi produksi:

```bash
npm run build     # hasilnya di folder dist/
npm run preview   # coba hasil build secara lokal
```

## Mengubah isi

Semua teks, tautan, dan gambar ada di satu file: **`src/data.js`**.

| Bagian | Yang diubah |
| --- | --- |
| `profile` | Nama, lokasi, email, foto profil |
| `intro` | Kalimat perkenalan. Objek dengan `chip` tampil sebagai tautan berlogo |
| `experience` | Riwayat pekerjaan |
| `projects` | Judul, deskripsi, status, peran, tahun, teknologi, penjelasan (`details`), tautan, dan galeri `images` |
| `certifications` | Nama sertifikat, penerbit, tanggal, ID kredensial, dan tautan verifikasi |
| `photos` | Foto untuk tumpukan di bagian bawah |
| `socials` | Tautan media sosial |

### Mengganti gambar

Gambar bawaan hanya placeholder. Ganti dengan milikmu sendiri:

- **Foto profil**: timpa `public/avatar.svg` atau ganti `profile.avatar` (misalnya `/avatar.jpg`).
- **Gambar proyek**: taruh di `public/projects/<nama-proyek>/`, rasio 16:10 paling pas (misalnya 1600×1000 px). Gambar pertama di `images` menjadi sampul kartu, semuanya tampil di galeri popup. Jumlah gambar bebas; kalau hanya satu, tombol panah otomatis hilang.
- **Foto**: taruh di `public/photos/`, rasio 4:5 paling pas (misalnya 800×1000 px). Format JPG atau WebP lebih ringan dari SVG.

Lalu perbarui path-nya di `src/data.js`.

### Popup proyek

Klik kartu proyek untuk membuka popup berisi galeri, penjelasan, peran, tahun, dan teknologi. Popup bisa ditutup dengan tombol X, tombol Esc, atau klik di area gelap. Panah kiri/kanan di keyboard berpindah antar gambar. Tombol "Buka proyek" hanya muncul kalau proyek punya `href`.

### Warna dan font

- Warna ada di bagian atas `src/index.css` (`:root` untuk mode terang, `.dark` untuk mode gelap).
- Font memakai **Geist** dari Google Fonts (lihat `index.html`). Kalau ingin mengganti, ubah tautan font di sana dan `--font-sans` di `src/index.css`.

## Struktur

```
src/
├── data.js              ← semua konten
├── index.css            ← token warna dan pengaturan dasar Tailwind
├── useTheme.js          ← logika mode terang/gelap
├── App.jsx
└── components/
    ├── Header.jsx       nama + tombol tema
    ├── Intro.jsx        kalimat perkenalan
    ├── Chip.jsx         tautan kecil berlogo
    ├── Experience.jsx
    ├── Projects.jsx
    ├── ProjectModal.jsx  popup detail proyek + galeri
    ├── Certifications.jsx
    ├── PhotoStack.jsx   tumpukan foto yang mengipas
    └── Footer.jsx       kontak + penutup
```

## Deploy

Hasil `npm run build` adalah situs statis, jadi bisa diunggah ke Vercel, Netlify, Cloudflare Pages, atau GitHub Pages. Di Vercel dan Netlify cukup hubungkan repositori; build command `npm run build`, output directory `dist`.
