var box =document.querySelector("#box");
var Btn =document.querySelector(".btn-box");
var Spans =Btn.querySelectorAll("span");
var Iul =box.getElementsByTagName("ul")[0];
var Lis =Iul.getElementsByTagName("li");
var Next =document.getElementById("Next");
var Nbtn =Next.getElementsByTagName("input")[0];
	Iul.style.width = box.offsetWidth*Lis.length + "px";
	Nbtn.onmouseenter = function(){
		Nbtn.style.opacity = "1";
	}
	Nbtn.onmouseleave = function(){
		Nbtn.style.opacity = "0.5";
	}
	var index = 0;
	function move() {
		for (var i = 0; i < Spans.length; i++){
			Spans[i].style.backgroundColor = "#cdcbcb";
		}
		Spans[index].style.backgroundColor = "#534c4c";
		Iul.style.left = -box.offsetWidth*index + "px";
		index++;
		if(index >= Spans.length){
			index = 0;
		}
	}
	move();
	Nbtn.onclick = function(){
		move();
	}
	for (var i = 0;i < Lis.length;i++){
		var Imgs = Lis[i].getElementsByTagName("img");
		for (var j = 0; j < Imgs.length; j++){
			Imgs[j].onclick = function(){
				this.src = this.getAttribute("resrc");
			}
		}
	}

 