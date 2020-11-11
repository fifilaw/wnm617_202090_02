
const MapPage= async()=>{


	let d = await query({type:'recent_locations',params:[sessionStorage.userId]});

		console.log(d);


	let map_el= await makeMap("#map-page .map");

	makeMarkers(map_el, d.result);


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

	let d = await query({type:'animal_by_id',params:[sessionStorage.animalId]});

	console.log(d)
	$('#animal-profile-page .animal-profile').html(makeAnimalProfile(d.result));
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