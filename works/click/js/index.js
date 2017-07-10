 		var flag=true;
 	document.onclick=function(ev){
		var ev=ev||event;
		var evpo={//创建一个新对象
			x:ev.clientX,//x为鼠标left值
			y:ev.clientY,//y为鼠标top值
		}
		if(flag){
			flag=false;
		var yanhua=new Click(evpo);//每次点击创建一个Click的实例化对象
		setTimeout(function(){
			flag=true;
		},evpo.y*2)
		}
	}
	function Click(evpo){//传入对象参数，此对象有鼠标x和鼠标y值
		if(this instanceof Click){//判断新对象是否是Click的实例
			var body=document.querySelector("body");//获取body
				this.dom=document.createElement("div");//创建原点
			this.creat=function(){//给原点加样式
			body.appendChild(this.dom)//添加到body中
				this.dom.className="box";//加类名吗，此类名中有固定样式
			this.dom.style.top=body.offsetHeight+"px";//初始从最底部开始
			this.dom.style.left=evpo.x-this.dom.offsetWidth/2+"px";//left为鼠标位置的left
			}
			this.move=function(){//原点移动
				this.creat()//执行创建函数
				this.dom.style.top=evpo.y+"px"//让原点到达鼠标位置
				this.dom.style.height=this.dom.offsetWidth+"px";//高度慢慢变短
				this.dom.style.opacity="0"//慢慢变透明
				var dom=this.dom;//定义一个变量指向原点
				var boo=this.boom;//定义一个变量指向boom函数
				setTimeout(function(){//当原点到达鼠标位置时间后的超市函数
					body.removeChild(dom)//删除原点
					for(var i=0;i<Math.random()*50+50;i++){//创建100个碎片
					boo();
					}
				},300)//时间为原点的transition时间
			}
			this.boom=function(){//爆炸动画函数
					var sui=document.createElement("div");//创建一个div
					body.appendChild(sui)//插入到body里
					sui.className="suipian";//加类名,此类名里有固定样式
			        sui.style.top=evpo.y+"px";//top值为原点消失时的位置
			        sui.style.left=evpo.x-sui.offsetWidth/2+"px";//left值为原点消失时的位置
				    sui.style.background="rgb("+parseInt(255*Math.random())+","+parseInt(255*Math.random())+","+parseInt(255*Math.random())+")";//rgb颜色随机
//				    sui.style.backgroundColor="#"+Math.floor(Math.random()*0xffffff.toString(16))
				    var hl=Math.floor(Math.random()*20)*(Math.random() >= 0.5 ? 1 : -1);//随机正负值left速度
				    var wl= Math.floor(Math.random()*20)*(Math.random() >= 0.5 ? 1 : -1);//随机正负值top速度
				    var shi=setInterval(function(){//掉落动画的建个函数
				    	sui.style.left=hl+sui.offsetLeft+"px";//left值每次增加随机的left速度值
				    	sui.style.top=wl++ +sui.offsetTop+"px";//top值每次增加随机的top速度值，速度值自增，小于0则向顶端运动，当自增到大于0时则向底部运动
				    	if(sui.offsetLeft>body.offsetWidth||sui.offsetLeft<0){//当left值超出屏幕时，则删除此碎片
				    			body.removeChild(sui)
				    	}
				    	if(sui.offsetTop>body.offsetHeight){//当top值超出屏幕时，则删除此碎片
				    			body.removeChild(sui)
				    		}
				    },20)
			}
			this.move();//创建此对象时运行此函数
		}else{
			return new Click();//不是则返回Click的实例。此为安全创建实例化对象
		}
	}