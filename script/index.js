// Mendapatkan elemen-elemen HTML yang dibutuhkan
let navbar = document.getElementById('navbar'); // Navigasi desktop
let mobMenu = document.getElementById('mob-menu'); // Menu mobile
let mobBtn = document.getElementById('mob-btn'); // Tombol menu mobile
let isMobMenuOpen = false; // Status menu mobile (terbuka/tutup)

// Menambahkan event listener pada tombol menu mobile ('mobBtn')
mobBtn.addEventListener('click', () => {
    if (!isMobMenuOpen) { // Jika menu mobile sedang tertutup
        mobMenu.style.display = 'block'; // Tampilkan menu mobile
        isMobMenuOpen = true; // Set status menu mobile menjadi terbuka
    } else {
        mobMenu.style.display = 'none'; // Sembunyikan menu mobile jika sudah terbuka
        isMobMenuOpen = false; // Set status menu mobile menjadi tertutup
    }
});

// Fungsi untuk mengatur tampilan berdasarkan lebar layar
const screenWidth = () => {
    if (window.innerWidth <= 1000) { // Jika lebar layar <= 1000px
        mobBtn.style.display = 'block'; // Tampilkan tombol menu mobile
        navbar.style.display = 'none'; // Sembunyikan navigasi desktop
    } else { // Jika lebar layar > 1000px
        mobBtn.style.display = 'none'; // Sembunyikan tombol menu mobile
        navbar.style.display = 'block'; // Tampilkan navigasi desktop
        mobMenu.style.display = 'none'; // Sembunyikan menu mobile
    }
}

// Menjalankan fungsi screenWidth saat halaman dimuat
window.addEventListener('load', screenWidth);

// Menjalankan fungsi screenWidth saat ukuran layar berubah
window.addEventListener('resize', screenWidth);
