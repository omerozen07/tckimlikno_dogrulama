
    // <!--
    // TC kimlik no 11 haneli rakamlardan oluşur.
    // İlk rakam sıfır (0) olamaz.
    // 1, 3, 5, 7 ve 9. hanelerin toplamının 7 katı ile 2, 4, 6 ve 8. hanelerin toplamı çıkartılır, sonucun 10’a bölümünden kalanı 10. haneyi verir.
    // İlk 10 hanenin toplamının 10’a bölümünden kalan, son haneyi verir.
    // Ayrıca çeşitli hatalı kabul edilen TC kimlik numaraları vardır. -->

        "use strict";
        function TCNOKontrol(TCNO) {
            var tek = 0,
                cift = 0,
                sonuc = 0,
                TCToplam = 0,
                i = 0,
            hatali = [11111111110, 22222222220, 33333333330, 44444444440, 55555555550, 66666666660, 7777777770, 88888888880, 99999999990];

            if (TCNO.length != 11) return false;
            if (isNaN(TCNO)) return false;
            if (TCNO[0] == 0) return false;

            tek = parseInt(TCNO[0]) + parseInt(TCNO[2]) + parseInt(TCNO[4]) + parseInt(TCNO[6]) + parseInt(TCNO[8]);
            cift = parseInt(TCNO[1]) + parseInt(TCNO[3]) + parseInt(TCNO[5]) + parseInt(TCNO[7]);

            tek = tek * 7;
            sonuc = Math.abs(tek - cift);
            if (sonuc % 10 != TCNO[9]) return false;

            for (var i = 0; i < 10; i++) {
                TCToplam += parseInt(TCNO[i]);
            }

            if (TCToplam % 10 != TCNO[10]) return false;

            if (hatali.toString().indexOf(TCNO) != -1) return false;

            return true;
        }
    

        if (TCNOKontrol("12345676802")) {
            alert("Dogru TC kimlik no")
        } else {
            alert("Yanlıs TC kimlik no")
        }
    
