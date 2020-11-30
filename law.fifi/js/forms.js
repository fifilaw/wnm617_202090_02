const checkSignUpForm = () => {
   let username = $("#signup-username").val();
   let email = $("#signup-email").val();
   let password = $("#signup-password").val();
   let passwordconfirm = $("#signup-confirm-password").val();


   if(username=="") {
      makeWarning(".login-error","Please enter a username");
      return;
   }else if (email==""){
      makeWarning(".login-error","Please enter an email address");

   }else if(password!=passwordconfirm) {
      makeWarning(".login-error","Passwords don't match");

      throw "Passwords don't match";
   } else {
      query({type:'insert_user',params:[username,email,password]})
      .then(d=>{
         if(d.error) {
            throw d.error;
         }
         console.log(d.id)
         $.mobile.navigate("#signin-page");
      })
   }
}