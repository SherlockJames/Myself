var box = document.querySelector(".background")
var num = 0;
var zidanjiange = 0.2 * 1000;
var zidanjiange1 = 0.1 * 1000;
var smpalanjiange = 0.6 * 1000;
var ecpalanjiange = 2.5 * 1000;
var bgpalanjiange = 5.5 * 1000;
var flag = true;

var begin = document.querySelector(".begin")
var title = document.querySelector(".title")
var plan = document.querySelector(".myplane")
var scor = document.querySelector(".scor")
var booms = document.querySelector(".booms")
var scor_num = document.querySelector(".scor>span")
var cheats = document.querySelector(".cheats")
var background = document.querySelector(".background")
var cheatsoff = true;
begin.onclick = function() {
	background.style.cursor = "none"
	title.style.display = "none";
	begin.style.display = "none";
	plan.style.display = "inline-block";
	scor.style.display = "inline-block";
	booms.style.display = "inline-block";
	scor_num.innerHTML = 0;
	document.onmousemove = function(ev) {
		var ev = ev || event;
		var x = ev.pageX;
		var y = ev.pageY;
		var le = x - box.offsetLeft - plan.offsetWidth / 2;
		var to = y - box.offsetTop - plan.offsetHeight / 2;
		if (le < 0) {
			le = 0;
		}
		if (to < 0) {
			to = 0;
		}
		if (le > box.offsetWidth - plan.offsetWidth) {
			le = box.offsetWidth - plan.offsetWidth
		}
		if (to > box.offsetHeight - plan.offsetHeight) {
			to = box.offsetHeight - plan.offsetHeight
		}
		plan.style.left = le + "px";
		plan.style.top = to + "px";
	}
	var zidancr = setInterval(crzidan, zidanjiange)
	cheats.onclick = function() {
		if (flag) {
			flag = false;
			cheatsoff = false
			clearInterval(zidancr)
			zidanjiange = 0.01 * 1000;
			zidancr = setInterval(crzidan1, zidanjiange1)
		} else {
			flag = true;
			cheatsoff = true
			clearInterval(zidancr)
			zidanjiange = 0.2 * 1000;
			zidancr = setInterval(crzidan, zidanjiange)
		}
	}

	setInterval(crsmplan, smpalanjiange)

	setInterval(crecplan, ecpalanjiange)

	setInterval(crbgplan, bgpalanjiange)

}

document.onkeydown = function(ev) {
	var ev = ev || event;
	if (ev.keyCode == 32) {
		var sid = document.querySelectorAll(".diren");
		var booms = document.querySelector(".booms>span")
		if (cheatsoff) {
			if (parseInt(booms.innerHTML) > 0) {
				for (var i = 0; i < sid.length; i++) {
					sid[i].id = 1;
				}
				booms.innerHTML = parseInt(booms.innerHTML) - 1
			}
		} else {
			for (var i = 0; i < sid.length; i++) {
				sid[i].id = 1;
			}
		}

	}
}