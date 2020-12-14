
const MapPage= async()=>{


	let d = await query({type:'recent_locations',params:[sessionStorage.userId]});

		// console.log(d);

	let valid_animals = d.result.reduce((r,o)=>{
      o.icon = o.img;
      if(o.lat && o.lng) r.push(o);
      return r;
   },[])

	// console.log(valid_animals);

	let map_el= await makeMap("#map-page .map");

	makeMarkers(map_el, valid_animals);


	map_el.data("markers").forEach((o,i)=>{
		o.addListener("click", function(){
			// console.log("click")

			sessionStorage.animalId= valid_animals[i].animal_id;
			$.mobile.navigate("#animal-profile-page");

			// map_el.data("infoWindow")
   //          .open(map_el.data("map"),o);
   //       map_el.data("infoWindow")
   //          .setContent(valid_animals[i].name);
			
   
			})
		})

	
	
	}
	
	
	// $('#list-page .animal-list').html(makeAnimalList(d.result));

//async and await
const ListPage= async()=>{
	let d = await query({type:'animals_by_user_id',params:[sessionStorage.userId]});

	// console.log(d)
	$('#list-page .animal-list').html(d.result.length?makeAnimalList(d.result):`<div class="no-cat col-sm-12"><img src="images/add-cat.png" alt=""></div>`);


}
const UserProfilePage= async()=>{


	query({type:'user_by_id',params:[sessionStorage.userId]}).then(d=>{

		console.log(d)
		$('#user-profile-page .user-profile').html(makeUserProfileIcon(d.result));
	})

	query({type:'animals_by_user_id',params:[sessionStorage.userId]}).then(d=>{

		// console.log(d)
		$('.cat-found').html(d.result.length);


	})



	query({type:'animals_by_user_id',params:[sessionStorage.userId]}).then(d=>{


		let total_cat_added=d.result.length;

		if(total_cat_added==0){
			$('.congrats-message').html(`<p>Add 5 cats to earn a bronze badge!</p>`);

		}else if(5>total_cat_added>0){
			$('.congrats-message').html(`<p>Add <strong>${5-total_cat_added}</strong> more cats to earn a bronze badge!</p>`);

		}else if(total_cat_added==5 && total_cat_added<10){
			$('.congrats-message').html(`
				<p>Congrats! You have earned the bronze badge. Add <strong>${10-total_cat_added}</strong> more cats to earn a Sliver badge! </p>
				<div class="cat-badge display-flex ">
					<img class="flex-none" src="images/badge-2.svg">
				</div>`);
		}else if(total_cat_added==10 && total_cat_added<15){
			$('.congrats-message').html(`<p>Congrats! You have earned the sliver badge. Add <strong>${15-total_cat_added}</strong> more cats to earn a gold badge!</p>
				<div class="cat-badge display-flex ">
					<img class="flex-none" src="images/badge-2.svg"><img src="images/badge.svg">
					
				</div>`);

		}else if(total_cat_added>=15){
			$('.congrats-message').html(`<p>Congrats! You have earned the gold badge. Meow!</p>
				<div class="cat-badge display-flex ">
					<img class="flex-none" src="images/badge-3.svg"><img class="flex-none" src="images/badge-2.svg"><img src="images/badge.svg">
					
				</div>`);

		}

	})




	query({type:'user_by_id',params:[sessionStorage.userId]}).then(d=>{

		// console.log(d)
		$('.user-profile-detail').html(makeUserProfileInfo(d.result));
	})


	query({type:'user_by_id',params:[sessionStorage.userId]}).then(d=>{

		// console.log(d)
		$('.user-profile-detail').html(makeUserProfileInfo(d.result));
	})




}



const AnimalProfilePage= async()=>{

	query({type:'animal_by_id',params:[sessionStorage.animalId]}).then(d=>{


		$('#animal-profile-page .animal-profile .cat-info').html(makeAnimalProfile(d.result));
		$('#animal-profile-page .animal-profile .cat-profile-detail').html(makeAnimalProfileAbout(d.result));
		$('#animal-profile-page  .animal-profile-modal').html(makeAnimalProfileOptions(d.result));
	})

	query({type:'animal_status',params:[sessionStorage.animalId]}).then(d=>{

		// console.log(d.result)
		$('#animal-profile-page .animal-profile .cat-status').html(d.result.length?makeAnimalProfileStatus(d.result):`<h5 class="cat-name-title" style="font-size: 1em;">No Status Yet</h5>`);
	})

	

	
}

const AnimalMapPage= async()=>{

	query({type:'locations_by_animal_id',params:[sessionStorage.animalId]}).then(d=>{

      makeMap(".cat-profile-map").then(map_el=>{

         makeMarkers(map_el,d.result);
		// console.log(d.result.length)

		if(d.result.length==0){
			 $("#animal-map-page .cat-note").html(MakeNoResultPage)}
		

         map_el.data("markers").forEach((o,i)=>{
			o.addListener("click", function(){
				// console.log("click")

	        $("#animal-map-page .cat-note").html(MakeCatMapPage(d.result[i]))
	        $(".cat-map").addClass("active")
			})
		})
      })
   })


	// query({type:'location_by_id',params:[sessionStorage.animalId]}).then(d=>{

	// 	// console.log(d)
	// 	$('#animal-map-page .map-details').html(d.result.length?MakeCatMapPage(d.result): `<div class="display-flex flex-column" style="padding:1em">
	// 				<p class="">Looks like this cat doesn't have a location yet...</p>
	// 				<div class="cat-journal-img"><img src="images/cat-sad.png"></div>
	// 			</div>`);
	// })


	

}

const EditAnimalProfilePage= async()=>{

	let d = await query({type:'animal_by_id',params:[sessionStorage.animalId]});

	// console.log(d)
	$('#edit-cat-page .edit-cat').html(EditAnimalProfileForm(d.result));
}

const EditUserProfilePage= async()=>{

	let d = query({type:'user_by_id',params:[sessionStorage.userId]}).then(d=>{

	// console.log(d)
	$('#edit-user-page .edit-user').html(EditUserProfileForm(d.result));
	})

	

}








const LocationAddPage= async()=>{


	let map_el= await makeMap("#location-add-page .map");
	makeMarkers(map_el,[]);

	let map=map_el.data("map");

	map.addListener("click",function(e){
		console.log(e,map.getCenter())

		let posFromClick={
			lat:e.latLng.lat(),
			lng:e.latLng.lng(),
			icon:"images/map-icon.svg"
		}

		let posFromCenter={
			lat:map.getCenter().lat(),
			lng:map.getCenter().lng()
		}


		$("#location-add-lat").val(posFromClick.lat);
		$("#location-add-lng").val(posFromClick.lng);

		makeMarkers(map_el,[posFromClick])
	})
}











const NewCatLocationAddPage= async()=>{


	let map_el= await makeMap("#new-cat-location-add-page .map");
	makeMarkers(map_el,[]);

	let map=map_el.data("map");

	map.addListener("click",function(e){
		console.log(e,map.getCenter())

		let posFromClick={
			lat:e.latLng.lat(),
			lng:e.latLng.lng(),
			icon:"images/map-icon.svg"
		}

		let posFromCenter={
			lat:map.getCenter().lat(),
			lng:map.getCenter().lng()
		}


		$("#location-add-lat").val(posFromClick.lat);
		$("#location-add-lng").val(posFromClick.lng);

		makeMarkers(map_el,[posFromClick])
	})
}







const UserUploadPage = async() => {
   query({
      type:'user_by_id',
      params:[sessionStorage.userId]
   }).then(d=>{
      console.log(d)

      makeUploaderImage($("#user-upload-input"),d.result[0].img)
   });
}






const AddNotePage = async()=>{

	query({type:'animal_by_id',params:[sessionStorage.animalId]}).then(d=>{


		$('#add-note-page #add-note-form').html(makeAddNotePage(d.result));
	})

}










const SignupSucessPage=async()=>{



	let d = query({type:'user_by_id',params:[sessionStorage.userId]}).then(d=>{

	console.log(d)
	$('#signup-success-page .user-signup-add-info').html(MakeUserAddInfoPage(d.result));
	})

}







