$("#menu-button").click(function(){
	const logo = $('#main-logo');
	if(logo.css('visibility') == "" || logo.css('visibility') == "visible"){
		logo.css('visibility','hidden');
	}
	else{
		logo.css('visibility','visible');
	}
});

$(function(){
	$("#menu-button").blur(function(event){
		const screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#bs-example-navbar-collapse-1").collapse('hide');
			$("#main-logo").css("visibility","visible");
		}
	});
});