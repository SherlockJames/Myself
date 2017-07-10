var box = document.querySelector(".background");

function Enemy(posi) {
	this.dom = null,
		this.speed = 0.02 * 1000,
		this.type = function() {
			box.appendChild(this.dom)
			this.dom.className = "zidan";
			this.dom.style.top = Myplane.offset().y - this.dom.offsetHeight + "px";
			if(posi==1){
			this.dom.style.left = Myplane.offset().x + (Myplane.width() / 2 - this.dom.offsetWidth / 2)-7 + "px";
			}else if(posi==2){
			this.dom.style.left = Myplane.offset().x + (Myplane.width() / 2 - this.dom.offsetWidth / 2)+7 + "px";
			}else if(posi==3){
			this.dom.style.left = Myplane.offset().x + (Myplane.width() / 2 - this.dom.offsetWidth / 2)-21 + "px";
			}else{
			this.dom.style.left = Myplane.offset().x + (Myplane.width() / 2 - this.dom.offsetWidth / 2)+21 + "px";
			}
		},
		this.move = function() {
			this.dom = document.createElement("div");
			this.type();
			var num = 0;
			var top = this.dom.offsetTop;
			var doms = this.dom;
			var shi = setInterval(function() {
				var dione = document.querySelectorAll(".diren")
				num += 15;
				doms.style.top = top - num + "px";
				if (doms.offsetTop < (-18)) {
					box.removeChild(doms)
					clearInterval(shi)
				}else{
				for (var i = 0; i < dione.length; i++) {
					if ((doms.offsetTop > dione[i].offsetTop && doms.offsetTop < dione[i].offsetTop + dione[i].offsetHeight) && (doms.offsetLeft + 6 > dione[i].offsetLeft && doms.offsetLeft < dione[i].offsetLeft + dione[i].offsetWidth)) {
						clearInterval(shi);
						doms.className += " ziddie"
						var die = 1;
						var doms1=doms;
						var boom = setInterval(function() {
							if (die == 3) {
								box.removeChild(doms1)
								clearInterval(boom);
							}
							doms1.className = "zidan_die" + die;
							die++;
						}, 50)
					}
				}}
			}, this.speed)
		},
		this.begin = function() {
			this.move();
		}
}
function crzidan() {
	var zidan = new Enemy(1);
	zidan.begin();
	var zidan2 = new Enemy(2);
	zidan2.begin();
}

function crzidan1() {
	for(var i=1;i<=4;i++){
	var zidan = new Enemy(i);
	zidan.speed = 0.005 * 1000,
	zidan.begin();
	}
}
