
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

			case 'animal-map-page':
			AnimalMapPage();
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


	// Anchor clicks
	.on("click", ".js-logout", function(e){
		sessionStorage.removeItem('userId');
		$(".login-error").removeClass("active");
		
		checkUserId();
	})


	// .on("click", ".map-bac", function(e){
	// 	sessionStorage.removeItem('userId');
	// 	$(".login-error").removeClass("active");
		
	// 	checkUserId();
	// })





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
		console.log("click")
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