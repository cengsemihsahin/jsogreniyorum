var silButonu;
var button = document.getElementById("enter");
var input = document.getElementById("girdi");
var ul = document.querySelector("ul");
var maddeler = document.querySelectorAll("li");

function yeniButonEkle(parent) {
    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Sil"));
    button.className = "delete";
    parent.appendChild(button);
}

function sinifGecisiniTamamla() {
    this.classList.toggle("done");
}

function elementYarat() {
	if (input.value.length < 2) {
		alert("Iki harften az madde eklenemez!");
	}
	else {
		var li = document.createElement("li");
		var span = document.createElement("span");
		li.appendChild(span);
		span.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		yeniButonEkle(li);
		silButonu = document.querySelectorAll(".delete")
		tiklananiSil()
		li.addEventListener('click', sinifGecisiniTamamla)
		input.value = "";
	}
    
}

function fareyleTiklanildi() {
    if (input.value.length >= 1)	elementYarat();
}

function enterTusunaBasildi(event) {
    if (input.value.length >= 1 && event.keyCode === 13)	elementYarat();
}

function tiklananiSil() {
    for (var i = 0; i < silButonu.length; i++)
		silButonu[i].addEventListener("click", function() {
            this.parentNode.remove()
        })
}

function hepsiniTemizle() {
	for (var i = 0; i < silButonu.length; i++)	silButonu[i].parentNode.remove();
}

for (var i = 0; i < maddeler.length; i++) {
    maddeler[i].addEventListener('click', sinifGecisiniTamamla);
    yeniButonEkle(maddeler[i])
}

button.addEventListener("click", fareyleTiklanildi);
girdi.addEventListener("keypress", enterTusunaBasildi);

silButonu = document.querySelectorAll(".delete")
tiklananiSil()