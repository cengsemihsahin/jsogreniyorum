//	form ekrani js dosyasi
var input = document.getElementById("textElemani3");
var formGecerliligi = new Array(false, false, false, false, false, false, false, false);
var gecersizMesajlar = new Array("TC_KIMLIK_NUMARASI", "ISIM", "SOY_ISIM", "DOGUM_TARIHI", "KULLANICI_TIPI", "E-POSTA", "PAROLA", "GUVENLIK_KODU");
var mesaj = "";

function formBilgileri() {
	mesaj = "";
	var bayrak = false;
	var sart = false;
	var tcNoBilgisi = document.getElementById("textElemani1").value;
	var isimBilgisi = document.getElementById("textElemani2").value;
	var soyisimBilgisi = document.getElementById("textElemani4").value;
	var dogumTarihiGunBilgisi = document.getElementById("gun").value;
	var dogumTarihiAyBilgisi = document.getElementById("ay").value;
	var dogumTarihiYilBilgisi = document.getElementById("yil").value;
	var kullaniciTipiBilgisi = document.getElementById("kullaniciTipi").value;
	var ePostaBilgisi = document.getElementById("e_posta").value;
	var parolaBilgisi = document.getElementById("parola").value;
	var parolaTestBilgisi = document.getElementById("parola2").value;
	var guvenlikKoduBilgisi = document.getElementById("textElemani3").value;
	formGecerliligi[0] = tcNoKontrol(tcNoBilgisi);
	for (var j = 0; j < 8; j++) {
		if (j == 0)			formGecerliligi[j] = tcNoKontrol(tcNoBilgisi);
		else if (j == 1)	formGecerliligi[j] = isimKontrol(isimBilgisi);
		else if (j == 2)	formGecerliligi[j] = isimKontrol(soyisimBilgisi);
		else if (j == 3)	formGecerliligi[j] = dogumTarihiKontrol(dogumTarihiGunBilgisi, dogumTarihiAyBilgisi, dogumTarihiYilBilgisi);
		else if (j == 4)	formGecerliligi[j] = kullaniciTipiBilgisiKontrol(kullaniciTipiBilgisi);
		else if (j == 5)	formGecerliligi[j] = ePostaBilgisiKontrol(ePostaBilgisi);
		else if (j == 6)	formGecerliligi[j] = sifreGecerliMi(parolaBilgisi) && sifreEslesiyorMu(parolaBilgisi, parolaTestBilgisi);
		else if (j == 7)	formGecerliligi[j] = guvenlikKoduTest(guvenlikKoduBilgisi);
		else	break;
		if (testEt(j, gecersizMesajlar[j]))	bayrak = true;
		else	continue;
	}
	if (bayrak) {
		// kayit basarisiz
		var x = document.getElementsByClassName("bolme22_2");
		x[0].innerHTML = "<div class = \"bolme22_2\" style = \"color: white; font-weight: bold; float: left; width: 220px; height: 485px; margin: 0px; padding: 100px 0 0 0;\">" + mesaj + "</div>";
		x = document.getElementsByClassName("sonuc");
		x[0].innerHTML = "<div class = \"sonuc\" style = \"color: red; text-shadow: 1px 1px white; width: 148px; height: 25px; padding: 5px 0 0 0; margin: 0; font-family: verdana; font-size: 16px; font-weight: bold; text-align: center;\">kayit basarisiz.</div>";
	}
	else {
		// kayit basarili
		var x = document.getElementsByClassName("sonuc");
		x[0].innerHTML = "<div class = \"sonuc\" style = \"color: green; text-shadow: 1px 1px white; width: 148px; height: 25px; padding: 5px 0 0 0; margin: 0; font-family: verdana; font-size: 16px; font-weight: bold; text-align: center;\">kayit basarili!</div>";
		x = document.getElementsByClassName("bolme22_2");
		x[0].innerHTML = "<div class = \"bolme22_2\" style = \"color: white; font-weight: bold; float: left; width: 220px; height: 485px; margin: 0px; padding: 100px 0 0 0;\"></div>";
	}
}

function testEt(num, metin) {
	if (!formGecerliligi[num]) {
		mesaj += "UYGUN OLMAYAN BOLUM: " + metin + "<br><br>";
		return true;
	}
	else	return false;
}

function sifreEslesiyorMu(p1, p2) {
	if (String(arguments[0]) == String(arguments[1]))	return true;
	else	return false;
}

function sifreGecerliMi(sif) {
	if (sif != null && sif != "" && sifreKarakterTesti(sif) && sifreUzunlukTesti(sif))	return true;
	else	return false;
}

function sifreKarakterTesti(karakterTest) {
	for (var i = 0; i < karakterTest.length; i++)
		if (karakterTest.charCodeAt(i) >= 48 && karakterTest.charCodeAt(i) <= 57 || karakterTest.charCodeAt(i) >= 65 && karakterTest.charCodeAt(i) <= 90 || karakterTest.charCodeAt(i) >= 97 && karakterTest.charCodeAt(i) <= 122 || karakterTest.charCodeAt(i) == 42 || karakterTest.charCodeAt(i) == 95)
			continue;
		else	return false;
	return true;
}

function sifreUzunlukTesti(uzunlukTest) {
	if (uzunlukTest.length < 6 || uzunlukTest > 35)	return false;
	else	return true;
}

function ePostaBilgisiKontrol(arg) {
	if (arg != null && arg != "" && ePostaKarakterBilgisiKontrol(arg))	return true;
	else	return false;
}

function ePostaKarakterBilgisiKontrol(karakterler) {
	var i = 0;
	do {
		if (karakterler.charCodeAt(i) == 64)	return true;
		i++;
	} while (i < karakterler.length);
	return	false;
}

function kullaniciTipiBilgisiKontrol(tipBilgisi) {
	if (tipBilgisi != "seciniz")	return true;
	else	return false;
}

function dogumTarihiKontrol(arg1, arg2, arg3) {
	if (!isNaN(Number(arg1) + Number(arg2) + Number(arg3)))	return true;
	else	return false;
}

function isimKontrol(isimDegeri) {
	if (isimDegeri != null && isimDegeri != "" && isimKarakterKontrol(isimDegeri))	return true;
	else	return false;
}

function isimKarakterKontrol(adDegeri) {
	var i = 0;
	do {
		if (adDegeri.charCodeAt(i) >= 65 && adDegeri.charCodeAt(i) <= 90 && adDegeri.length >= 3 || adDegeri.charCodeAt(i) >= 97 && adDegeri.charCodeAt(i) <= 122 && adDegeri.length >= 3) {
			i++;
			continue;
		}
		else	return false;
	} while (i < adDegeri.length);
	return true;
}

function tcNoKontrol(x) {
	if (x != null && x != "" && x.length == 11 && tcKarakterKontrol(x))	return true;
	else	return false;
}

function tcKarakterKontrol(t) {
	var i = 0;
	do {
		if (t.charCodeAt(i) <= 57 && t.charCodeAt(i) >= 48) {
			i++;
			continue;
		}
		else	return false;
	} while (i < 11);
	return true;
}

function guvenlikKoduTest(arguman) {
	if (String(arguman) == "5ecuRe")	return true;
	else	return false;
}

function enterTusunaBasildi(event) {
	if (input.value.length >= 1 && event.keyCode === 13)	formBilgileri();
}

input.addEventListener("keypress", enterTusunaBasildi);