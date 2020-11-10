
const MapPage= async()=>{
	let d = await query({type:'animals_by_user_id',params:[sessionStorage.userId]});

	// console.log(d.result[0].id)

	let animalsID = d.result.map(a=>a.id)

	// console.log(animalsID)

	for (var i=0; i<animalsID.length; i++){

		let found_animals_id = await query({
	      type:'check_animals_locations_by_id',
	      params:[animalsID[i]]
	   });

		let animal_details = found_animals_id.result.map(a=>{

			let reduce_data = {};

			reduce_data[a.animal_id]= [a.lat, a.lng];



			return reduce_data;
		});

		console.log(animal_details);


	}
	
	
	// $('#list-page .animal-list').html(makeAnimalList(d.result));
}

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

	let d = await query({type:'user_by_id',params:[sessionStorage.userId]});

	console.log(d)
	$('#edit-user-page .edit-user').html(EditUserProfileForm(d.result));
}