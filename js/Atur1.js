function showTime() {
  const now = new Date();
  // Mengambil waktu lokal (contoh: 17:21:54)
  const time = now.toLocaleTimeString(); 
  
  // Memasukkan waktu ke elemen dengan id="clock"
  // Catatan: Teks yang diminta adalah " | [waktu]"
  document.getElementById("clock").textContent = " | " + time; // [cite: 187, 188, 189, 190]
}

// Memanggil fungsi showTime setiap 1000 milidetik (1 detik) [cite: 192]
setInterval(showTime, 1000);

// Memanggil fungsi showTime sekali segera setelah dimuat [cite: 193]
showTime();