
var kalanHak = 10;
var x;
var resimSayisi = 2;
var bilmeDurumu = new Array(false, false, false, false, false, false);
var d = true;

function harfKontrol(basilanHarf) {
	if (kalanHak > 0 && d) {
		switch (basilanHarf) {
			case 'A':
				x = document.getElementsByClassName("cls2");
				x[0].innerHTML = "A";
				bilmeDurumu[1] = true;
				break;
			case 'E':
				x = document.getElementsByClassName("cls5");
				x[0].innerHTML = "E";
				bilmeDurumu[4] = true;
				break;
			case 'H':
				x = document.getElementsByClassName("cls1");
				x[0].innerHTML = "H";
				bilmeDurumu[0] = true;
				break;
			case 'R':
				x = document.getElementsByClassName("cls4");
				x[0].innerHTML = "R";
				bilmeDurumu[3] = true;
				break;
			case 'S':
				x = document.getElementsByClassName("cls3");
				x[0].innerHTML = "S";
				bilmeDurumu[2] = true;
				break;
			case 'T':
				x = document.getElementsByClassName("cls6");
				x[0].innerHTML = "T";
				bilmeDurumu[5] = true;
				break;
			default:
				kalanHak--;
				x = document.getElementsByClassName("asilanAdamParcasi");
				x[0].innerHTML = "<img src = \"../../assets/" + resimSayisi + ".jpg\"></img>";
				x = document.getElementsByClassName("asilacakAdamKutusununBasi");
				x[0].innerHTML = "KALAN HAKKINIZ : <br> " + kalanHak;
				resimSayisi++;
		}
		if (durum(0)) {
			d = false;
			alert("TEBRIKLER, BILDIN!");
		}
		document.querySelector("#harfler").removeChild(document.querySelector("#" + basilanHarf)); 
	}
	else if (!d) {
		alert("KAZANDIN, OYUN BITTI !");
	}
	else {
		alert("KAYBETTIN !");
	}
}

//	Tum durumlarin dogru olup olmadigini test eden recursive fonk.
function durum(i) {
	do {
		if (bilmeDurumu[i])	durum(i + 1);
		else return false;
		i++;
	} while (i < 6);
	return true;
}