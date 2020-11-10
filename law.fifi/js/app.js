
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

		}
	})



	.on("submit","#signin-form", function(e){
		e.preventDefault();
		checkSigninForm();
	})

	// Anchor clicks
	.on("click", ".js-logout", function(e){
		sessionStorage.removeItem('userId');
		$(".login-error").removeClass("active");
		
		checkUserId();
	})





   .on("click",".js-animal-jump",function(e){
      sessionStorage.animalId = $(this).data("id");
      $.mobile.navigate("#animal-profile-page");
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




})