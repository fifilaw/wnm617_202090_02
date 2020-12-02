const checkSignUpForm = async () => {
   let username = $("#signup-username").val();
   let email = $("#signup-email").val();
   let password = $("#signup-password").val();
   let passwordconfirm = $("#signup-confirm-password").val();


   let found_signup_user = await query({
      type:'check_signup',
      params:[username]
   });

   let found_signup_user_email = await query({
      type:'check_signup_email',
      params:[email]
   });


   if(found_signup_user.result.length){
   		
   		makeWarning(".login-error","Username already exists");

   }else if(found_signup_user_email.result.length){
   		
   		makeWarning(".login-error","Email already exists");
   }

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
         $("#signup-form")[0].reset();
         $.mobile.navigate("#signup-success-page");
      	sessionStorage.userId = d.id;

      })
   }
}


const CheckCatAddForm=()=>{
   let name = $("#add-cat-name").val();
   let gender = $("#add-cat-gender").val();
   let breed = $("#add-cat-breed").val();
   let color = $("#add-cat-color").val();
   let coat = $("#add-cat-coat").val();	
   let size = $("#add-cat-size").val();	
   let neutered = $("#add-cat-neutered").val();	
   let description = $("#add-cat-description").val();	

   query({type:'insert_animal',params:[sessionStorage.userId,name,gender,breed,color,coat,size,neutered,description]})
      .then(d=>{
         if(d.error) {
            throw d.error;
         }
         console.log(d.id)

         $("#add-cat-form")[0].reset();

         sessionStorage.animalId =d.id;
         $.mobile.navigate($("#animal-add-destination").val());

      })
}


const checkCatEditForm =()=>{

	let name = $("#edit-cat-name").val();
   let gender = $("#edit-cat-gender").val();
   let breed = $("#edit-cat-breed").val();
   let color = $("#edit-cat-color").val();
   let coat = $("#edit-cat-coat").val();	
   let size = $("#edit-cat-size").val();	
   let neutered = $("#edit-cat-neutered").val();	
   let description = $("#edit-cat-description").val();	

    query({type:'update_cat',params:[name,gender,breed,color,coat,size,neutered,description,sessionStorage.animalId]})
      .then(d=>{
         if(d.error) {
            throw d.error;
         }

         window.history.go(-2);

      })

}

const checkUserEditForm=()=>{
	let firstname =$("#edit-user-firstname").val();
	let lastname =$("#edit-user-lastname").val();
	let username =$("#edit-user-username").val();
	let email =$("#edit-user-email").val();
	let gender =$("#edit-user-gender").val();
	let location =$("#edit-user-location").val();
	let bio =$("#edit-user-bio").val();

	query({type:'update_user',params:[firstname,lastname,username,email,gender,location,bio,sessionStorage.userId]})
	.then(d=>{
		if(d.error){
			throw d.error;
		}
         window.history.go(-2);
		
	})
}




const SignupAddUserInfoForm= ()=>{

	let firstname =$("#signup-firstname").val();
	let lastname =$("#signup-lastname").val();
	let gender =$("#signup-gender").val();
	let location =$("#signup-location").val();
	let bio =$("#signup-bio").val();
	

	query({type:'signup_add_user_info',params:[firstname,lastname,gender,location,bio,sessionStorage.userId]})
	.then(d=>{
		if(d.error){
			throw d.error;
		}
		console.log("success");
         $("#signup-success-form")[0].reset();

    	$.mobile.navigate("#onboarding1-page");
	})


}


const checkCatDelete= id => {
	query({type:"delete_cat",params:[id]}).then(d=>{

		if(d.error){
			throw d.error;
		}

		window.history.back();

	});
}


const checkListSearchForm= async()=>{
   let s = $("#list-search-input").val();
   console.log(s)

   let r = await query({type:"search_animals",params:[s,sessionStorage.userId]});

   drawAnimalList(r.result,"No Result Found");

   console.log(r);
}



const checkFilterList= async(d)=>{
	let r = await query({type:'animal_filter',params:[d.field,d.value,sessionStorage.userId]});

	console.log(r);
   drawAnimalList(r.result,"No Result Found");
	
}




