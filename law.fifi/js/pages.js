
const RecentPage= async()=>{}

//async and await
const ListPage= async()=>{
	let d = await query({type:'animals_by_user_id',params:[sessionStorage.userId]});

	console.log(d)
	$('#list-page .animal-list').html(makeAnimalList(d.result));


}
const UserProfilePage= async()=>{}



const AnimalProfilePage= async()=>{

	let d = await query({type:'animal_by_id',params:[sessionStorage.userId]});

	console.log(d)
	$('#list-page .animal-list').html(makeAnimalList(d.result));
}