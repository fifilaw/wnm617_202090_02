
$(()=>{

	checkUserId();

	$(document).on("submit","#signin-form", function(e){
		e.preventDefault();
		checkSigninForm();
	})

	// Anchor clicks
	.on("click", ".js-logout", function(e){
		sessionStorage.removeItem('userId');
		$(".login-error").removeClass("active");
		
		checkUserId();
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