window.onload = function() {
	var box = document.querySelector(".box") //获取盒子
	var red = document.querySelector(".red") //获取红球

	for (var i = 0; i < 20; i++) { //循环创建10个蓝球
//		Blue();
		 var xiao=new Blue();
				xiao.append()
	}

	var blue = document.querySelectorAll(".blue") //获取所有的篮球

	document.onmousemove = function(ev) { //鼠标移动事件
		var ev = ev || event; //兼容
		var x = ev.clientX; //鼠标横坐标
		var y = ev.clientY; //鼠标纵坐标
		var le = x - box.offsetLeft - (red.offsetWidth / 2)
		var to = y - box.offsetTop - (red.offsetHeight / 2)
		if (le < 0) {
			le = 0
		} //判断不让其出框
		if (to < 0) {
			to = 0
		}
		if (le > box.offsetWidth - red.offsetWidth) {
			le = box.offsetWidth - red.offsetWidth
		}
		if (to > box.offsetHeight - red.offsetHeight) {
			to = box.offsetHeight - red.offsetHeight
		}
		red.style.left = le + "px"; //红球left值
		red.style.top = to + "px" //红球top值
		panduan() //判断蓝球的移动函数

	}

	function panduan(dan) { //蓝球的移动函数
		if(dan){
			var a = (red.offsetTop + red.offsetHeight / 2) - (dan.offsetTop + dan.offsetHeight / 2)//获取y轴差值
			var b = (red.offsetLeft + red.offsetHeight / 2) - (dan.offsetLeft + dan.offsetHeight / 2)//获取x轴差值
			var pai = Math.sqrt(Math.pow(b, 2) + Math.pow(a, 2));//用勾股定理求得当前循环的蓝球圆心和红球圆心之间的直线距离
			if (pai < (red.offsetHeight / 2 + dan.offsetHeight / 2)) {//若蓝球的圆心和红球的圆心之间的直线距离小于碰撞时的圆心距离，则
				dan.num2 = a/10//y轴速度为y轴差值
				dan.num3 = b/10//x轴速度为x轴差值
			    dan.num = 500;//每碰撞一次，x轴速度初始化
			    dan.num1 = 500;//每碰撞一次，y轴速度初始化
				if (dan.flag1) {//判断x轴移动定时器是否启动
					dan.flag1 = false;//启动后则关闭开关
					dan.zuo(dan);//执行x轴移动函数
				}
				if (dan.flag) {//判断y轴移动定时器是否启动
					dan.flag = false;//启动后则关闭开关
					dan.shang(dan);//执行y轴移动函数
				}

			}
		}else{
		for (var k = 0; k < blue.length; k++) {//循环蓝球判断

			var a = (red.offsetTop + red.offsetHeight / 2) - (blue[k].offsetTop + blue[k].offsetHeight / 2)//获取y轴差值
			var b = (red.offsetLeft + red.offsetHeight / 2) - (blue[k].offsetLeft + blue[k].offsetHeight / 2)//获取x轴差值
			var pai = Math.sqrt(Math.pow(b, 2) + Math.pow(a, 2));//用勾股定理求得当前循环的蓝球圆心和红球圆心之间的直线距离
			if (pai < (red.offsetHeight / 2 + blue[k].offsetHeight / 2)) {//若蓝球的圆心和红球的圆心之间的直线距离小于碰撞时的圆心距离，则
				blue[k].num2 = a/10//y轴速度为y轴差值
				blue[k].num3 = b/10//x轴速度为x轴差值
			    blue[k].num = 500;//每碰撞一次，x轴速度初始化
			    blue[k].num1 = 500;//每碰撞一次，y轴速度初始化
				if (blue[k].flag1) {//判断x轴移动定时器是否启动
					blue[k].flag1 = false;//启动后则关闭开关
					blue[k].zuo(blue[k]);//执行x轴移动函数
				}
				if (blue[k].flag) {//判断y轴移动定时器是否启动
					blue[k].flag = false;//启动后则关闭开关
					blue[k].shang(blue[k]);//执行y轴移动函数
				}

			}
		}	
		}
		
	}

	function Blue() {//蓝球的函数
		this.dom = document.createElement("div")//创建一个div
		this.append = function() {//插入函数
			this.dom.className = "blue"//给当前创建的div一个已经写好样式的类名
			this.dom.innerHTML="<div class='bul'></div>"
			box.appendChild(this.dom)//将当前div插入到盒子中
			var suiji = parseInt(Math.random() * 30) + 120//随机大小
			this.dom.style.height = suiji + "px"//高赋值
			this.dom.style.width = suiji + "px"//宽赋值
			this.dom.style.background="rgba("+parseInt(Math.random()*255+1)+","+parseInt(Math.random()*255+1)+","+parseInt(Math.random()*255+1)+",0.3)"
			this.dom.style.left = parseInt(Math.random() * (box.offsetWidth + this.dom.offsetWidth)+1) - this.dom.offsetWidth-1 + "px";//left赋值
			this.dom.style.top = parseInt(Math.random() * (box.offsetHeight + this.dom.offsetHeight)+1) - this.dom.offsetHeight-1 + "px";//top赋值
			this.dom.shang = this.shang();//当前创建的div的y轴自定义函数
			this.dom.zuo = this.zuo()//当前创建的div的x轴自定义函数
			this.dom.flag = true;//y轴移动定时器开关
			this.dom.flag1 = true;//x轴移动定时器开关
			this.dom.num = 500;//用来记录和判断y轴移动定时器的执行次数
			this.dom.num1 = 500;//用来记录和判断x轴移动定时器的执行次数
			this.dom.num2;//用来接收y轴的移动速度
			this.dom.num3;//用来接收x轴的移动速度
		}
		this.shang = function() {//y轴执行函数
			return (function(dom) {
				var doms = dom//接收div
				var tops = doms.offsetTop;//获取当前div top值
				var shang = setInterval(function() {//y轴移动计时器,每10毫秒执行一次移动函数
					panduan(doms)//执行判断函数
					doms.num--;//执行次数增加
					if (tops < -doms.offsetHeight) { tops = box.offsetHeight-1 } //超出屏幕范围则从另一边出现
					if (tops > box.offsetHeight) { tops = -doms.offsetHeight+1 }
					doms.num2*=0.985
					doms.style.top = (tops -= doms.num2) + "px"//每次根据速度移动相应的距离
					if (doms.num < 0) {//当执行次数超过三百，则
						doms.num = 500//执行次数初始化
						doms.flag = true//开关打开
						clearInterval(shang)//关闭y轴移动计时器
					}
				}, 5)
			})
		}

		this.zuo = function() {//x轴执行函数
			return (function(dom) {
				var doms = dom//接收dom
				var lefts = doms.offsetLeft//获取当前div left值
				var zuo = setInterval(function() {//x轴移动计时器,每10毫秒执行一次移动函数
					panduan(doms)//执行判断函数
					doms.num1--;//执行次数增加
					if (lefts < -doms.offsetWidth) { lefts = box.offsetWidth-1 }//超出屏幕范围则从另一边出现
					if (lefts > box.offsetWidth) { lefts = -doms.offsetWidth+1 }
					doms.num3*=0.985
					doms.style.left = (lefts -= doms.num3) + "px"//每次根据速度移动相应的距离
					if (doms.num1 < 0) {//当执行次数超过300，则
						doms.num1 = 500//执行次数初始化
						doms.flag1 = true//开关打开
						clearInterval(zuo)//关闭x轴移动计时器
					}
				}, 5)
			})
		}
//		this.append();//创建则执行
	}

}