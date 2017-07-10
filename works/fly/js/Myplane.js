var Myplane={
	dom:document.querySelector(".myplane"),
	offset:function(){
		return {
              x:this.dom.offsetLeft,
              y:this.dom.offsetTop,
		}
	},
	width : function(){
		return this.dom.offsetWidth;
	},
	height : function(){
		return this.dom.offsetHeight;	
	},
	status:function(data){
				
		if(data==1){
				console.log(this.dom)

			var img=["url(img/me.png)","url(img/me_die1.png)","url(img/me_die2.png)","url(img/me_die3.png)"]
			var ad=0;
			var bo=this.dom;
			var sets=setInterval(function(){
				console.log(ad)
				bo.style.background=img[ad];
				ad+=10;
				if(ad==4){
					bo.style.display="none";
					clearInterval(sets)
				}
			},100)
		}
	}
}
