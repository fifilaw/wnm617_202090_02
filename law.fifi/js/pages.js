
const MapPage= async()=>{


	let d = await query({type:'recent_locations',params:[sessionStorage.userId]});

		console.log(d);

	let valid_animals = d.result.reduce((r,o)=>{
      o.icon = o.img;
      if(o.lat && o.lng) r.push(o);
      return r;
   },[])

	console.log(valid_animals);

	let map_el= await makeMap("#map-page .map");

	makeMarkers(map_el, valid_animals);


	map_el.data("markers").forEach((o,i)=>{
		o.addListener("click", function(){
			// console.log("click")

			// sessionStorage.animalId= valid_animals[i].animal_id;
			// $.mobile.navigate("#animal-profile-page");

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

	console.log(d)
	$('#list-page .animal-list').html(makeAnimalList(d.result));


}
const UserProfilePage= async()=>{
	let d = await query({type:'user_by_id',params:[sessionStorage.userId]});

	console.log(d)
	$('#user-profile-page .user-profile').html(makeUserProfile(d.result));
}



const AnimalProfilePage= async()=>{

	query({type:'animal_by_id',params:[sessionStorage.animalId]}).then(d=>{

		console.log(d)
		$('#animal-profile-page .animal-profile .cat-info').html(makeAnimalProfile(d.result));
	})

	query({type:'locations_by_animal_id',params:[sessionStorage.animalId]}).then(d2=>{

		console.log(d2)
		$('#animal-profile-page .animal-profile .cat-note ').html(makeAnimalNote(d2.result));
	})

	
}

const AnimalMapPage= async()=>{
	let d = await query({type:'locations_by_animal_id',params:[sessionStorage.animalId]});

		console.log(d);


	let map_el= await makeMap("#animal-map-page .map");

	makeMarkers(map_el, d.result);
}

const EditAnimalProfilePage= async()=>{

	let d = await query({type:'animal_by_id',params:[sessionStorage.animalId]});

	console.log(d)
	$('#edit-cat-page .edit-cat').html(EditAnimalProfileForm(d.result));
}

const EditUserProfilePage= async()=>{

	query({type:'user_by_id',params:[sessionStorage.userId]}).then(d=>{

	console.log(d)
	$('#edit-user-page .edit-user').html(EditUserProfileForm(d.result));
	})

	

}