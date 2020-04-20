//	js document

function baslikEkle(baslikBuyuklugu) {
	var nesne = document.createElement(String(baslikBuyuklugu));
	nesne.appendChild(document.createTextNode(document.getElementById("baslikMetni").value));
	document.getElementById("bolme2").appendChild(nesne);
}

function baslikSil(silinecekBaslikBuyuklugu) {
	var ilkKisim = document.getElementsByTagName(String(silinecekBaslikBuyuklugu));
	if (ilkKisim.length > 0 && silinecekBaslikBuyuklugu != "h1")
		ilkKisim[ilkKisim.length - 1].parentNode.removeChild(ilkKisim[ilkKisim.length - 1]);
	else if (ilkKisim.length > 1 && silinecekBaslikBuyuklugu == "h1")	// kendi ekledigim basligi silmemek icin
		ilkKisim[ilkKisim.length - 1].parentNode.removeChild(ilkKisim[ilkKisim.length - 1]);
}

function paragrafEkle() {
	var paragrafElementi = document.createElement("p");
	paragrafElementi.appendChild(document.createTextNode(document.getElementById("paragrafMetni").value));
	document.getElementById("bolme2").appendChild(paragrafElementi);
}

function paragrafSil() {
	pIlkKisim = document.getElementsByTagName("p");
	if (pIlkKisim.length > 0)
		pIlkKisim[pIlkKisim.length - 1].parentNode.removeChild(pIlkKisim[pIlkKisim.length - 1]);
}

function egikEkle() {
	var egikYaziElementi = document.createElement("i");
	egikYaziElementi.appendChild(document.createTextNode(document.getElementById("yaziMetni").value));
	document.getElementById("bolme2").appendChild(egikYaziElementi);
}

function egikSil() {
	iIlkKisim = document.getElementsByTagName("i");
	if (iIlkKisim.length > 0)
		iIlkKisim[iIlkKisim.length - 1].parentNode.removeChild(iIlkKisim[iIlkKisim.length - 1]);
}

function kalinEkle() {
	var kalinYaziElementi = document.createElement("b");
	kalinYaziElementi.appendChild(document.createTextNode(document.getElementById("yaziMetni").value));
	document.getElementById("bolme2").appendChild(kalinYaziElementi);
}

function kalinSil() {
	kIlkKisim = document.getElementsByTagName("b");
	if (kIlkKisim.length > 0)
		kIlkKisim[kIlkKisim.length - 1].parentNode.removeChild(kIlkKisim[kIlkKisim.length - 1]);
}

function markEkle() {
	var markYaziElementi = document.createElement("mark");
	markYaziElementi.appendChild(document.createTextNode(document.getElementById("yaziMetni").value));
	document.getElementById("bolme2").appendChild(markYaziElementi);
}

function markSil() {
	markIlkKisim = document.getElementsByTagName("mark");
	if (markIlkKisim.length > 0)
		markIlkKisim[markIlkKisim.length - 1].parentNode.removeChild(markIlkKisim[markIlkKisim.length - 1]);
}

function subEkle() {
	var subYaziElementi = document.createElement("sub");
	subYaziElementi.appendChild(document.createTextNode(document.getElementById("yaziMetni").value));
	document.getElementById("bolme2").appendChild(subYaziElementi);
}

function subSil() {
	subIlkKisim = document.getElementsByTagName("sub");
	if (subIlkKisim.length > 0)
		subIlkKisim[subIlkKisim.length - 1].parentNode.removeChild(subIlkKisim[subIlkKisim.length - 1]);
}

function supEkle() {
	var supYaziElementi = document.createElement("sup");
	supYaziElementi.appendChild(document.createTextNode(document.getElementById("yaziMetni").value));
	document.getElementById("bolme2").appendChild(supYaziElementi);
}

function supSil() {
	supIlkKisim = document.getElementsByTagName("sup");
	if (supIlkKisim.length > 0)
		supIlkKisim[supIlkKisim.length - 1].parentNode.removeChild(supIlkKisim[supIlkKisim.length - 1]);
}

function dugmeEkle() {
	var buttonElementi = document.createElement("button");
	buttonElementi.appendChild(document.createTextNode(document.getElementById("dugmeMetni").value));
	document.getElementById("bolme2").appendChild(buttonElementi);
}

function dugmeSil() {
	dugmeIlkKisim = document.getElementsByTagName("button");
	if (dugmeIlkKisim.length > 0)
		dugmeIlkKisim[dugmeIlkKisim.length - 1].parentNode.removeChild(dugmeIlkKisim[dugmeIlkKisim.length - 1]);
}

function linkEkle() {
	var linkElementi = document.createElement("a");
	linkElementi.appendChild(document.createTextNode(document.getElementById("linkMetni").value));
	linkElementi.href = document.getElementById("linkAdresi").value;
	linkElementi.target = "_blank";
	document.getElementById("bolme2").appendChild(linkElementi);
}

function linkSil() {
	linkIlkKisim = document.getElementsByTagName("a");
	if (linkIlkKisim.length > 0)
		linkIlkKisim[linkIlkKisim.length - 1].parentNode.removeChild(linkIlkKisim[linkIlkKisim.length - 1]);
}

function resimEkle() {
	document.getElementById("resimIcin").innerHTML = "<img src = \"../../assets/kedicik.png\">";
}

function resimSil() {
	resimIlkKisim = document.getElementsByTagName("img");
	if (resimIlkKisim.length > 0)
		resimIlkKisim[resimIlkKisim.length - 1].parentNode.removeChild(resimIlkKisim[resimIlkKisim.length - 1]);
}