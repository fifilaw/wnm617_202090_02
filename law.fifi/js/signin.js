const checkSigninForm = () =>{

	let user = $("#signin-username").val();
	let pass = $("#signin-password").val();


	if(user=='user' && pass=='pass'){
		console.log("success")
		sessionStorage.userId=3;
		$("#signin-form")[0].reset();

	}else{
		console.log("fail")
		$(".login-error").addClass("active");
		sessionStorage.removeItem("userId");
	}

	checkUserId();
}




const checkUserId = () =>{

	let p=['#signup-page', '#signin-page',''];

	if(sessionStorage.userId === undefined){
		//not logged in
		if(!p.some(o=>window.location.hash===o))
			$.mobile.navigate("#signin-page");
	}else{
		if(p.some(o=>window.location.hash===o))
			$.mobile.navigate("#list-page");
	}
}