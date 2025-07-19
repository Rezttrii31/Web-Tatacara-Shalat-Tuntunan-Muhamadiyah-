# Tatacara Sholat Muhammadiyah

Website panduan lengkap tatacara sholat sesuai Himpunan Putusan Tarjih Muhammadiyah. Website ini dibuat tanpa database, menggunakan hanya HTML, CSS, dan JavaScript.

## Struktur Halaman

Website ini terdiri dari 4 halaman utama:

1. **index.html** - Halaman Beranda
   - Selamat datang dan pengenalan website
   - Informasi tentang waktu sholat, bacaan sholat, dan sholat berjamaah
   - Syarat dan rukun sholat
   - Hal-hal yang membatalkan sholat

2. **tatacara-sholat.html** - Halaman Tatacara Sholat
   - Panduan lengkap gerakan sholat dari takbir hingga salam
   - Bacaan Arab, latin, dan terjemahan untuk setiap gerakan
   - Audio bacaan sholat
   - Penjelasan detail setiap gerakan

3. **tentang.html** - Halaman Tentang
   - Informasi lengkap tentang Himpunan Putusan Tarjih
   - Sejarah dan metodologi Majelis Tarjih
   - Prinsip-prinsip dasar dan publikasi

4. **dzikir-doa.html** - Halaman Dzikir & Doa
   - Dzikir setelah shalat (Istighfar, Subhanallah, Alhamdulillah, Allahu Akbar, dll)
   - Doa setelah shalat (Doa Kamilin, Doa Perlindungan, Doa Keselamatan, dll)
   - Wirid harian (Ayat Kursi, Al-Ikhlas, Al-Falaq, An-Nas, Shalawat)
   - Tips melakukan dzikir

## Fitur

- **Responsive Design**: Website dapat diakses dengan baik di desktop, tablet, dan mobile
- **Modern UI/UX**: Desain yang modern dan user-friendly dengan gradasi warna biru (#003092, #4682A9)
- **Gambar Ilustrasi**: Gambar ilustrasi untuk setiap gerakan sholat dengan fallback ikon
- **Bacaan Lengkap**: Bacaan Arab, latin, dan terjemahan sesuai Himpunan Putusan Tarjih Muhammadiyah
- **Audio Player**: Fitur audio untuk bacaan sholat
- **Smooth Navigation**: Navigasi yang lancar antar halaman
- **Interactive Elements**: Dzikir dan doa yang mudah dibaca dengan format yang jelas
- **SEO Optimized**: Meta tags dan struktur HTML yang SEO-friendly

## Cara Menjalankan

1. **Menggunakan Live Server (VS Code)**:
   - Install extension "Live Server" di VS Code
   - Klik kanan pada file `index.html`
   - Pilih "Open with Live Server"

2. **Menggunakan Python**:
   ```bash
   python -m http.server 8000
   ```
   Kemudian buka `http://localhost:8000` di browser

3. **Menggunakan Node.js**:
   ```bash
   npx http-server
   ```
   Kemudian buka URL yang ditampilkan di terminal

4. **Menggunakan PHP**:
   ```bash
   php -S localhost:8000
   ```
   Kemudian buka `http://localhost:8000` di browser

## File Struktur

```
websholat/
├── index.html              # Halaman Beranda
├── tatacara-sholat.html    # Halaman Tatacara Sholat
├── tentang.html            # Halaman Tentang
├── dzikir-doa.html         # Halaman Dzikir & Doa
├── styles.css              # File CSS utama
├── script.js               # File JavaScript utama
├── manifest.json           # PWA manifest
├── audio/                  # Folder audio bacaan sholat
│   └── README.txt
├── images/                 # Folder gambar ilustrasi sholat
│   └── README.txt
├── README.md               # Dokumentasi ini
├── robots.txt              # SEO robots file
└── sitemap.xml             # SEO sitemap
```

## Teknologi yang Digunakan

- **HTML5**: Struktur halaman web
- **CSS3**: Styling dan animasi
- **JavaScript (ES6+)**: Interaktivitas dan fungsi
- **Font Awesome**: Icon library
- **Google Fonts**: Typography (Poppins)

## Browser Support

Website ini kompatibel dengan browser modern:
- Chrome (versi terbaru)
- Firefox (versi terbaru)
- Safari (versi terbaru)
- Edge (versi terbaru)

## Kontribusi

Untuk berkontribusi pada project ini:
1. Fork repository
2. Buat branch baru untuk fitur
3. Commit perubahan
4. Push ke branch
5. Buat Pull Request

## Lisensi

Project ini dibuat untuk kepentingan edukasi dan dakwah Islam. Silakan digunakan dengan bijak dan sesuai dengan prinsip-prinsip Islam.

## Kontak

Untuk pertanyaan atau saran, silakan hubungi melalui halaman kontak di website ini. 