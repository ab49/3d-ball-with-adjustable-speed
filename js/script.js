var speed = document.getElementById("slider1");
var ball = document.getElementById("ball");

setInterval(function(){animation()},100);
function animation(){
	value = "bounce "+speed.value+"s ease-in infinite alternate";
	ball.style.animation = value;
	//alert(value);	
}
