const checkSignUpForm = async () => {
   let firstname = $("#signup-firstname").val();
   let lastname = $("#signup-lastname").val();
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
      query({type:'insert_user',params:[firstname,lastname,username,email,password]})
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
   let image = $("#cat-upload-image").val();	

   query({type:'insert_animal',params:[sessionStorage.userId,name,gender,breed,color,coat,size,neutered,description,image]})
      .then(d=>{
         if(d.error) {
            throw d.error;
         }
         console.log(d.id)

         $("#add-cat-form")[0].reset();
         $("#cat-upload-form")[0].reset();
        

         sessionStorage.animalId =d.id;
         

         window.history.go(-2);


         // $.mobile.navigate("#list-page");

      })
}


const checkCatEditForm =()=>{

	let name = $("#edit-cat-name").val();
   let gender = $("#edit-cat-gender").val();
   let breed = $("#edit-cat-breed").val();
   let color = $("#edit-cat-color").val();
   let coat = $("#edit-cat-coat").val();	
   let size = $("#edit-cat-size").val();  
   let img = $("#animal-edit-image").val();	
   let neutered = $("#edit-cat-neutered").val();	
   let description = $("#edit-cat-description").val();	

    query({type:'update_cat',params:[name,gender,breed,color,coat,size,neutered,description,img,sessionStorage.animalId]})
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
	let img =$("#user-edit-image").val();

	query({type:'update_user',params:[firstname,lastname,username,email,gender,location,bio,img,sessionStorage.userId]})
	.then(d=>{
		if(d.error){
			throw d.error;
		}
         window.history.go(-2);
		
	})
}




const SignupAddUserInfoForm= ()=>{


	let gender =$("#signup-gender").val();
	let location =$("#signup-location").val();
	let bio =$("#signup-bio").val();
	

	query({type:'signup_add_user_info',params:[gender,location,bio,sessionStorage.userId]})
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
		console.log(id);
		window.history.back();
      UserProfilePage();

	});
}


const checkListSearchForm= async()=>{
   let s = $("#list-search-input").val();
   console.log(s)

   let r = await query({type:"search_animals",params:[s,sessionStorage.userId]});

   drawAnimalList(r.result,`<div class="col-sm-12 no-result-search"><img src="images/cat-sad.png" alt=""></div>`);

   console.log(r);
}



const checkFilterList= async(d)=>{
	let r = d.value=="all"?

   await query({
      type:'animals_by_user_id',
      params:[sessionStorage.userId]}):
   await query({
      type:'animal_filter',
      params:[d.field,d.value,sessionStorage.userId]});

	console.log(r);
   drawAnimalList(r.result,`<div class="col-sm-12 no-result-search"><img src="images/cat-sad.png" alt=""></div>`);
	
}



const checkSortList= async(d) =>{

	
		console.log(d);
	
		// query({type:'animal_sort',params:[]})

	let r = await query({type:'animal_sort',params:[d.field,d.value,sessionStorage.userId]});


	// console.log(r);
   drawAnimalList(r.result,`<div class="col-sm-12 no-result-search"><img src="images/cat-sad.png" alt=""></div>`);
	
}







const checkLocationAddForm=()=>{

	let lat =$("#location-add-lat").val();
	let lng =$("#location-add-lng").val();
	let status =$("#add-cat-status").val();
   let photo = $("#animal-note-image").val();
	let description =$("#update-cat-description").val();


	query({type:"insert_location",params:[sessionStorage.animalId,lat,lng,status,description,photo]})
	.then(d=>{
		if(d.error){
			throw d.error;
		}
	
         $("#add-note-form")[0].reset();

         $.mobile.navigate("#list-page");
  

	})



}











const checkUpload=file=>{

   let fd= new FormData();
   fd.append("image",file);

   return fetch('data/api.php',{
      method:'POST',
      body:fd
   }).then(d=>d.json())
}






const checkCatUpload=()=>{
   let upload = $("#cat-upload-image").val();

   if(upload=="")return;

   query({type:'update_user_image',
      params:[upload,sessionStorage.userId]
   }).then(d=>{
      if(d.error){
         throw d.error;
      }
      console.log("done")
      window.history.back();


   })
}















const checkChangePasswordForm = async () => {

   let oldpassword = $("#old-password").val();
   let newpassword = $("#new-password").val();
   let newpasswordconfirm = $("#confirm-new-password").val();


   let found_password = await query({
      type:'check_password',
      params:[sessionStorage.userId,oldpassword]
   });


   if(!found_password.result.length){
         console.log(found_password)
         makeWarning(".login-error","Incorrect old password");

   }else if(newpassword!=newpasswordconfirm) {
      makeWarning(".login-error","New Passwords don't match");
   }else {
      query({type:'insert_user',params:[password]})
      .then(d=>{
         if(d.error) {
            throw d.error;
         }
         console.log(d.id)
         $("#edit-password-form")[0].reset();


      })
   }

}
