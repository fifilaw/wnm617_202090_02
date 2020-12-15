
$(()=>{

	checkUserId();

	$(document)


	.on("pagecontainerbeforeshow",function(e,ui){

		console.log(ui.toPage[0].id)

		//Routing
		switch(ui.toPage[0].id){
			case 'list-page': 
			ListPage();
			break;

			case 'map-page':
			MapPage();
			break;

			case 'user-profile-page':
			UserProfilePage();
			break;

			case 'animal-profile-page':
			AnimalProfilePage();
			break;

			case 'edit-cat-page':
			EditAnimalProfilePage();
			break;

			case 'edit-user-page':
			EditUserProfilePage();
			break;

			case 'user-upload-page':
			UserUploadPage();
			break;

			case 'signup-success-page':
			SignupSucessPage();
			break;

			case 'animal-map-page':
			AnimalMapPage();
			break;

			case 'location-add-page':
			LocationAddPage();
			break;


			case 'add-note-page':
			AddNotePage();
			break;

		}
	})



	.on("submit","#signin-form", function(e){
		e.preventDefault();
		checkSigninForm();
	})


	.on("submit","#signup-form", function(e){
		e.preventDefault();
		checkSignUpForm();
	})

	.on("submit","#list-search-form", function(e){
		e.preventDefault();

		checkListSearchForm();
	})

	.on("submit","#map-search-form", function(e){
		e.preventDefault();

		checkMapSearchForm();
	})



	

	// Anchor clicks
	.on("click", ".js-logout", function(e){
		sessionStorage.removeItem('userId');
		$(".login-error").removeClass("active");
		
		checkUserId();
	})


	.on("click", ".js-user-edit", function(e){
		checkUserEditForm();
	})

	.on("click", ".js-cat-edit", function(e){
		checkCatEditForm();
	})

	.on("click",".js-cat-add", function(e){
		
		CheckCatAddForm();
	})

	.on("click",".js-cat-delete", function(e){
		
		checkCatDelete($(this).data("id"));
		
	})

	.on("click",".js-cat-note-delete", function(e){
		
		checkCatNoteDelete($(this).data("id"));
		
	})

	.on("click",".filter", function(e){
		
		checkFilterList($(this).data());
		
	})

	.on("click",".sort", function(e){
		
		checkSortList($(this).data());
		
	})

	.on("change",".image-uploader input", function(e){
		
		checkUpload(this.files[0])
		.then(d=>{
			console.log(d)
			makeUploaderImage(this,d.result,'uploads/')
		})
		
	})


	.on("click",".js-cat-upload", function(e){
		checkCatUpload();
	})

	.on("click",".js-change-password", function(e){
		e.preventDefault();
		
		checkChangePasswordForm();
	})





	.on("click",".signup-info-jump", function(e){
		e.preventDefault();
		SignupAddUserInfoForm();
	})


	.on("click",".js-location-add", function(e){
		// e.preventDefault();

		checkLocationAddForm();
	})





   .on("click",".js-animal-jump",function(e){
      sessionStorage.animalId = $(this).data("id");
      $.mobile.navigate("#animal-profile-page");
   })

      .on("click",".js-animal-map",function(e){
      sessionStorage.animalId = $(this).data("id");

      $.mobile.navigate("#animal-map-page");
   })

       .on("click",".view-location-btn",function(e){
      

      window.location.reload();
   })

       .on("click",".reload",function(e){
      

      window.location.reload();
   })







	.on("click","[data-activate]",function(){

		let target= $(this).data('activate');
		$(target).addClass("active");

	})
	.on("click","[data-deactivate]",function(){

		let target= $(this).data('deactivate');
		$(target).removeClass("active");

	})
	.on("click","[data-toggle]",function(){

		let target= $(this).data('toggle');
		$(target).toggleClass("active");

	})

	.on("click", ".footer-icon", function(e){
		
		$(this).addClass("active").siblings().removeClass("selected");
		$(this).closest(".footer-icon")
		.addClass("selected").siblings().removeClass("selected")
	})





	.on("click",".profile-tab-group .tab", function(){
		let id = $(this).index();

		$(this).addClass("active").siblings().removeClass("active");
		$(this).closest(".profile-tab-group").find(".content").eq(id).addClass("active").siblings().removeClass("active");
	})
	




})