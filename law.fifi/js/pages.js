
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
		$('#animal-profile-page .animal-profile').html(makeAnimalProfile(d.result));
	})

	query({type:'locations_by_animal_id',params:[sessionStorage.animalId]}).then(d=>{

		console.log(d)
		$('#animal-profile-page .animal-profile .cat-note ').html(makeAnimalNote(d.result));
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