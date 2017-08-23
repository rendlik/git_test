function hideLogo(){
	logo = document.getElementById('logo');
		//debugger;
	if(logo.style.display == "" || logo.style.display == "block" ){
		logo.style.display = "none";
	}
	else{
		logo.style.display = "block";
	}
	

}

