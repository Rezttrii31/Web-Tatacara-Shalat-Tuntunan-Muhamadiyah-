# 🧭 Panduan Navigasi Website Tatacara Sholat

## 📁 File yang Terhubung

Website ini terdiri dari 2 halaman utama yang saling terhubung:

1. **`index.html`** - Halaman Informasi Tambahan
2. **`tatacara-sholat.html`** - Halaman Panduan Tatacara Sholat

## 🔗 Cara Navigasi

### Dari Halaman Index (`index.html`):
- **Menu "Tatacara Sholat"** → Klik untuk pindah ke `tatacara-sholat.html`
- **Menu "Informasi Tambahan"** → Halaman aktif (saat ini)
- **Menu "Tentang"** → Scroll ke section tentang di halaman yang sama
- **Menu "Kontak"** → Scroll ke section kontak di halaman yang sama
- **Breadcrumb "Beranda"** → Klik untuk refresh halaman

### Dari Halaman Tatacara Sholat (`tatacara-sholat.html`):
- **Menu "Tatacara Sholat"** → Halaman aktif (saat ini)
- **Menu "Informasi Tambahan"** → Klik untuk pindah ke `index.html`
- **Menu "Tentang"** → Pindah ke `index.html` dan scroll ke section tentang
- **Menu "Kontak"** → Pindah ke `index.html` dan scroll ke section kontak
- **Breadcrumb "Beranda"** → Klik untuk pindah ke `index.html`

## 🚀 Cara Menjalankan

### Opsi 1: Buka Langsung di Browser
1. Buka file `index.html` di browser
2. Klik menu "Tatacara Sholat" untuk pindah halaman
3. Klik menu "Informasi Tambahan" untuk kembali

### Opsi 2: Menggunakan Web Server (Direkomendasikan)
1. Buka terminal/command prompt
2. Masuk ke folder website
3. Jalankan server sederhana:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js
   npx http-server
   ```
4. Buka browser dan akses `http://localhost:8000`

### Opsi 3: Live Server (VS Code)
1. Install extension "Live Server" di VS Code
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"

## 🔧 Troubleshooting

### Jika Navigasi Tidak Berfungsi:

1. **Periksa File Structure:**
   ```
   websholat/
   ├── index.html
   ├── tatacara-sholat.html
   ├── styles.css
   ├── script.js
   └── audio/
   ```

2. **Pastikan Semua File Ada:**
   - `index.html` ✅
   - `tatacara-sholat.html` ✅
   - `styles.css` ✅
   - `script.js` ✅

3. **Gunakan Web Server:**
   - Jangan buka file langsung dengan `file://`
   - Gunakan `http://localhost:8000` atau live server

4. **Periksa Console Browser:**
   - Tekan F12 untuk buka Developer Tools
   - Lihat tab Console untuk error

5. **Test dengan File Test:**
   - Buka `test-nav.html` untuk test navigasi sederhana

## 🎯 Fitur Navigasi

### ✅ Yang Sudah Berfungsi:
- **Cross-page Navigation** - Pindah antar halaman
- **Anchor Links** - Scroll ke section tertentu
- **Active States** - Menu aktif ditandai
- **Breadcrumb Navigation** - Navigasi hierarki
- **Responsive Design** - Bekerja di mobile

### 🎨 Styling:
- **Hover Effects** - Efek saat hover
- **Active States** - Menu aktif berwarna berbeda
- **Smooth Transitions** - Animasi halus
- **Mobile Responsive** - Tampilan mobile yang baik

## 📱 Responsive Design

Website sudah dioptimalkan untuk:
- 📱 **Mobile** (320px - 768px)
- 📱 **Tablet** (768px - 1024px)
- 💻 **Desktop** (1024px+)

## 🔍 SEO & Performance

- ✅ **Meta Tags** - Lengkap untuk SEO
- ✅ **Open Graph** - Untuk social media
- ✅ **Semantic HTML** - Struktur yang baik
- ✅ **Fast Loading** - Optimized performance
- ✅ **Accessibility** - Keyboard navigation

## 🛠️ Customization

### Mengubah Warna:
Edit file `styles.css`:
```css
.nav-link:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}
```

### Menambah Menu:
Edit HTML di kedua file:
```html
<li><a href="halaman-baru.html" class="nav-link">Menu Baru</a></li>
```

### Mengubah Link:
Ganti `href` dan `onclick` di menu:
```html
<a href="halaman-baru.html" onclick="window.location.href='halaman-baru.html'">Menu</a>
```

## 📞 Support

Jika masih ada masalah:
1. Periksa console browser (F12)
2. Pastikan menggunakan web server
3. Test dengan file `test-nav.html`
4. Periksa struktur file

---

**Navigasi sudah dioptimalkan untuk pengalaman pengguna yang terbaik! 🎉** 