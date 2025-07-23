 
 
 const button = document.getElementById("tikla");
    const input = document.getElementById("sifreKutusu");
    const mesaj = document.getElementById("mesaj");

    button.addEventListener("click", (e) => {
      e.preventDefault(); // sayfa yenilenmesin

      const sifre = input.value;

      // Şartlar
      const kucuk = /[a-z]/.test(sifre);
      const buyuk = /[A-Z]/.test(sifre);
      const rakam = /[0-9]/.test(sifre);
      const sembol = /[^A-Za-z0-9]/.test(sifre);
      const uzun = sifre.length >= 8;

      if (kucuk && buyuk && rakam && sembol && uzun) {
        mesaj.textContent = "✅ Şifre geçerli. Kayıt başarılı!";
        mesaj.className = "text-green-600 text-center mt-4 text-sm font-semibold";
      } else {
        mesaj.textContent = "❌ Şifre uygun değil. En az 8 karakter, büyük harf, küçük harf, rakam ve sembol içermelidir.";
        mesaj.className = "text-red-500 text-center mt-4 text-sm font-semibold";
      }
    });

    