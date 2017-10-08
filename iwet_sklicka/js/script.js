document.getElementById("menu-button").addEventListener("click", function(){
	var logo = document.getElementById('main-logo');

	if(logo.style.visibility == "visible" || logo.style.visibility == ""){
		logo.style.visibility = "hidden";
	}
	else{
		logo.style.visibility = "visible";
	}
});

$(function(){
	$("#menu-button").blur(function(event){
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#bs-example-navbar-collapse-1").collapse('hide');
			$("#main-logo").css("visibility","visible");
		}
	});
});