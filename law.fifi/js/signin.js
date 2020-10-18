
const makeWarning = (target,message) => {
   $(target).addClass("active").html(message);
   setTimeout(()=>{
      $(target).removeClass("active")
   },2000);
}

const checkSigninForm = () =>{

	let user = $("#signin-username").val();
	let pass = $("#signin-password").val();


	if(user=="" || pass==""){
		makeWarning(".login-error", "Please enter a username and password");
		return;
	}

	if(user=='user' && pass=='pass'){
		sessionStorage.userId=3;
		$("#signin-form")[0].reset();

	}else{
		sessionStorage.removeItem("userId");
		makeWarning(".login-error", "Incorrect Username/Password");
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
			$.mobile.navigate("#onboarding1-page");
	}
}