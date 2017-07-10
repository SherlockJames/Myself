window.onload=function(){
	var navli = document.querySelectorAll('.nav>ul>li')
	var cent_div = document.querySelectorAll('.center>div')
		for (var i = 0; i < navli.length; i++) {
			(function(i) {
				navli[i].onmouseover = function() {
					navli[navli.length - 1].style.display = "block"
					navli[navli.length - 1].style.left = this.offsetLeft + "px";
				}
				navli[i].onmouseout = function() {
					navli[navli.length - 1].style.display = "none"
				}
				navli[i].onclick=function(){
					
		window.scrollTo(0,cent_div[i].offsetTop);
				}
			})(i)
		}
		var jianlitu = document.querySelector('.jianlitu')
		var jianlida = document.querySelector('.jianlida')
		var jianlidabox = document.querySelectorAll('.jianlida>div')
		var jianlidajing = document.querySelector('.jianlida>div>div')
		var jianlidajingimg = document.querySelector('.jianlida>div:nth-child(2)>img')
		var body = document.querySelector('body')
		var bil;
		jianlitu.onclick = function() {
			jianlida.style.display = "block"
			setTimeout(function() {
				jianlida.style.opacity = 1
				jianlidajing.style.width = "150px"
				jianlidajing.style.height = "150px"
			}, 0)
		}
		jianlida.onclick = function() {
			jianlida.style.opacity = 0
			setTimeout(function() {
				jianlida.style.display = "none"
			}, 500)
		}
		jianlidabox[0].onmouseover = function() {
			jianlidajing.style.display = "block"
			jianlidabox[1].style.display = "block";
			bil = jianlidabox[0].offsetHeight / jianlidajing.offsetHeight / (5 / 3)
			jianlidabox[1].style.width = jianlidabox[0].offsetHeight / (5 / 3) + "px"
			jianlidabox[1].style.height = jianlidabox[0].offsetHeight / (5 / 3) + "px"
			jianlidajingimg.style.width = jianlidabox[0].offsetWidth * bil + "px"
			jianlidabox[0].onmousemove = function(ev) {
				var ev = ev || event;
				var X = ev.clientX;
				var Y = ev.clientY;
				var x = X - jianlidabox[0].offsetLeft + jianlidabox[0].offsetWidth / 2 - jianlidajing.offsetWidth / 2;
				var y = Y - jianlidabox[0].offsetTop + jianlidabox[0].offsetHeight / 2 - jianlidajing.offsetHeight / 2;
				x = x < 0 ? 0 : x;
				y = y < 0 ? 0 : y;
				x = x > jianlidabox[0].offsetWidth - jianlidajing.offsetWidth ? jianlidabox[0].offsetWidth - jianlidajing.offsetWidth : x;
				y = y > jianlidabox[0].offsetHeight - jianlidajing.offsetHeight ? jianlidabox[0].offsetHeight - jianlidajing.offsetHeight : y;
				jianlidajing.style.left = x + "px"
				jianlidajing.style.top = y + "px"
				jianlidajingimg.style.left = -x * bil + "px";
				jianlidajingimg.style.top = -y * bil + "px"
			}
			jianlidabox[0].onmouseout = function() {
				jianlidajing.style.display = "none";
				jianlidabox[1].style.display = "none";
			}
		}

		jianlidajing.onmousewheel = function(ev) {
			var ev = ev || event
			ev.preventDefault();
			if (ev.wheelDelta > 0) {
				jianlidajing.style.width = jianlidajing.offsetWidth + 10 + "px"
				jianlidajing.style.height = jianlidajing.offsetHeight + 10 + "px"
				if (jianlidajing.offsetWidth > 450) {
					jianlidajing.style.width = "450px"
				}
				if (jianlidajing.offsetHeight > 450) {
					jianlidajing.style.height = "450px"
				}
			} else {
				jianlidajing.style.width = jianlidajing.offsetWidth - 10 + "px"
				jianlidajing.style.height = jianlidajing.offsetHeight - 10 + "px"
				if (jianlidajing.offsetWidth < 100) {
					jianlidajing.style.width = "100px"
				}
				if (jianlidajing.offsetHeight < 100) {
					jianlidajing.style.height = "100px"
				}
			}
			jianlidabox[0].onmouseover();
			jianlidabox[0].onmousemove();
		}
		
		var bun3_box_btn=document.querySelectorAll(".bun3_box>div")
		var bun3_box_ul=document.querySelector(".bun3_box>ul")
		var bun3_box_ul_li=document.querySelectorAll(".bun3_box>ul>li")[0]
		var bun3_box_num=0;
		bun3_box_btn[0].onclick=function(){
			bun3_box_num--;
			if(bun3_box_num<0){
				bun3_box_num=0;
			}
			bun3_box_ul.style.left=-bun3_box_ul_li.offsetWidth*bun3_box_num+"px"
			
		}
		bun3_box_btn[1].onclick=function(){
			bun3_box_num++;
			if(bun3_box_num>3){
				bun3_box_num=3;
			}
			bun3_box_ul.style.left=-bun3_box_ul_li.offsetWidth*bun3_box_num+"px"
		}
}
