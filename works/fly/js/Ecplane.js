var box = document.querySelector(".background");

function Ecplane() {
	this.dom = null,
		this.speed = 0.5 * 1000,
		this.type = function() {
			box.appendChild(this.dom)
			this.dom.className = "ecplane diren";
			this.dom.style.left = Math.random() * (box.offsetWidth - this.dom.offsetWidth) + "px";
			this.dom.id=0;
		},
		this.pengzhuang=0;
		this.move = function() {
			this.dom = document.createElement("div");
			this.type();
			var num = 0;
			var pengzhuang = 0;
			var top = this.dom.offsetTop;
			var doms = this.dom;
			var shi = setInterval(function() {
				var zidan = document.querySelectorAll(".ziddie")
				num += 3;
				doms.style.top = top + num + "px";
				if (num > box.offsetHeight+doms.offsetHeight) {
					box.removeChild(doms)
					clearInterval(shi)
				}else{
					if(doms.id==1){
						clearInterval(shi);
							var die = 1;
							var boom = setInterval(function() {
								if (die == 5) {
									box.removeChild(doms)
									clearInterval(boom);
								}
								doms.style.background = "url(img/plane2_die" + die + ".png)";
								die++;
							}, 80)
					}else{
				for (var i = 0; i < zidan.length; i++) {
					if ((zidan[i].offsetTop > doms.offsetTop && zidan[i].offsetTop < doms.offsetTop + doms.offsetHeight) && (zidan[i].offsetLeft + 6 > doms.offsetLeft && zidan[i].offsetLeft < doms.offsetLeft + doms.offsetWidth)) {
						pengzhuang++;
						if (pengzhuang > 15) {
							var a=parseInt(scor_num.innerText)
							scor_num.innerText=a+15;
							clearInterval(shi);
							var die = 1;
							var boom = setInterval(function() {
								if (die == 5) {
									box.removeChild(doms)
									clearInterval(boom);
								}
								doms.style.background = "url(img/plane2_die" + die + ".png)";
								die++;
							}, 80)
						}
					}
				}}
					}
			}, 20)
		},
		this.begin = function() {
			this.move();
		}

}

function crecplan() {
	var ecplan = new Ecplane();
	ecplan.begin();
}