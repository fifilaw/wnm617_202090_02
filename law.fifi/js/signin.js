
const makeWarning = (target,message) => {
   $(target).addClass("active").html(message);
   setTimeout(()=>{
      $(target).removeClass("active")
   },2000);
}

const checkSigninForm = async () => {
   let user = $("#signin-username").val();
   let pass = $("#signin-password").val();

   console.log(user,pass)

   if(user=="" || pass=="") {
      makeWarning(".login-error","Type a Username and Password");
      return;
   }

   let found_user = await query({
      type:'check_signin',
      params:[user,pass]
   });

   if(found_user.result.length) {
      // logged in
      console.log('success');
      sessionStorage.userId = found_user.result[0].id;
      $("#signin-form")[0].reset();
   } else{
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
		if(p.some(o=>window.location.hash===o)){

         query({type:'animals_by_user_id', params:[sessionStorage.userId]}).then(d=>{
            if(d.result.length)$.mobile.navigate("#list-page");
			   else $.mobile.navigate("#onboarding1-page");
         })
      }
	}
}