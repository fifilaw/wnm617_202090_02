const drawAnimalList = (a,empty_phrase='Hey Dummy, add an animal.') => {
   $("#list-page .animal-list")
      .html(a.length?makeAnimalList(a):empty_phrase);
}


const makeAnimalList= templater(o=>`
		<div class="js-animal-jump col-sm-6" data-id="${o.id}">
		<div class="animal-list-img" >
			<img src="${o.img}" ></div>
			<div class="display-flex flex-column" style="padding: 0.6em;">
				<div class="display-flex flex-align-center " >
	     			<h6 class="list-title flex-stretch">${o.name}</h6>
	     			<div class="list-gender-icon flex-none"><img src="images/${o.gender}.png" alt=""></div>
     			</div>
     			<p class="list-type">${o.breed}</p>
     		</div>
     	</div>`
	);


const makeUserProfileIcon =templater(o=>`

		<div class="display-flex user-profile-card">
				<div class="user-icon"><img src="${o.img}" class="user-icon"></div>
					
					
				
					<div class="flex-none">
					<a href="#" class="more-icon black" data-activate="#list-add-modal" style="margin: 1em 0.5em 0 0;"><img src="images/more-black.png" ></a>
					</div>
				</div>
					<div class="user-detail flex-stretch">
						<h2>${o.firstname} ${o.lastname}</h2>
						<p>@${o.username}</p>
					</div>
		

				
				</div>
					
	`);


const makeUserProfileAchievement =o=>`

		

			<div class="user-achievement ">

				<h4>Cats Found</h4>
				<div class="display-flex flex-align-center ">
					<p class="flex-stretch">${o.length}</p>
					<div class="cat-badge"><img class="flex-none" src="images/badge.svg"></div>
					<div class="cat-badge"><img class="flex-none" src="images/badge-2.svg"></div>
				</div>
			</div>
			
	
	`;


const makeUserProfileInfo =templater(o=>`

	<div class="cat-bio display-flex flex-align-center">
			
			<span class="flex-none">Bio</span>
			<p class="flex-stretch cat-description">${o.bio}</p>
		</div>

	<p><span>Gender: </span> ${o.gender}</p>
	<p><span>Email: </span>${o.email}</p>
	<p><span>Location: </span>${o.location}</p>


`);

const makeAnimalNote= templater(o=>`

	
				
				<div class="cat-note-detail col-sm-6">
					<img src="${o.photo}">
					<p>${o.description}</p>
				</div>
			

	`);

const makeAnimalProfile= templater(o=>`
	<div class="cat-icon flex-none"><img src="${o.img}"></div>
	<div class="display-flex flex-end"> 
		<div class="add-note-btn flex-none"><a href="#location-add-page">Add Location</a></div>
	</div>
		<div class="display-flex flex-justify-center flex-align-center">
			
				<h1 class="cat-name-title">${o.name}</h1>
				<div class="gender-icon"><img src="images/${o.gender}.png" alt=""></div>		
		</div>
		
	</div>

	`
	);


const makeAnimalProfileStatus=templater(o=>`

			
			<h5 class="cat-name-title" style="font-size: 1em;">Last Seen Status: ${o.status}</h5>

	`);

const makeAnimalProfileAbout=templater(o=>`
			<hr>
		<div class="view-location-btn flex-none js-animal-map"data-id="${o.id}">View Location History</div>
		

		<h2 style="margin-top:2em;">About ${o.name}</h2>
		<div class="cat-bio display-flex flex-align-center">
			
			<span class="flex-none">Bio</span>
			<p class="flex-stretch cat-description">${o.description}</p>
		</div>
		<div class="display-flex cat-detail">
			<span>Breed</span>
			<p>${o.breed}</p>
		</div>
		<div class="display-flex cat-detail">
			<span>Color</span><p>${o.color}</p>
		</div>
		<div class="display-flex cat-detail">
			<span>Size</span><p>${o.size}</p>
		</div>	
		<div class="display-flex cat-detail">
			<span>Coat</span><p>${o.coat}</p>
		</div>	
		<div class="display-flex cat-detail">
			<span>Neutered</span><p>${o.neutered}</p>
		</div>
		


	`);

const makeAnimalProfileOptions=templater(o=>`
		

	<div class="modal" id="delete-cat" style="top: 0; z-index: 6; left: 0;">
      	<div class="modal-back" data-deactivate="#delete-cat"></div>
      	<div class="modal-popup">
      		
      		<div class="modal-question"><div>Are you sure?</div></div>
      		<div class="display-flex space-around" style="background: var(--color-main-medium);">
      			<div class="modal-select flex-none" data-deactivate="#delete-cat"><a href="#">No</a></div>
      			<div class="modal-select flex-none yes" data-deactivate="#delete-cat"><a href="#" class="js-cat-delete" data-id="${o.id}">Yes</a></div>
      		</div>
      	</div>
      </div>

    <div class="modal" id="cat-menu" style="top: 0; z-index: 6; left: 0;">
      	<div class="modal-back" data-deactivate="#cat-menu"></div>
      	<div class="modal-popup">
      		<div class="modal-head"><div><a href="#edit-cat-page" data-deactivate="#cat-menu">Edit Cat Profile</a></div></div>
      		<div class="modal-foot" data-activate="#delete-cat" data-deactivate="#cat-menu"><a href="#">Delete Cat Profile</a></div>
      	</div>
    </div>



`);








const makeAddNotePage=templater(o=>`

	<div class="form-control">
		<label for="add-cat-status" class="form-label">Cat Status</label>
		<input type="text" class="form-input" id="add-cat-status" data-role="none" placeholder="Example: Playing,Eating,Sleeping">
	</div>

	<div class="form-control">
		<label for="animal-upload-note-image" class="form-label">Upload a photo of the cat:</label>
		<input type="hidden" id="animal-note-image" value="${o.img}">
		<label class="image-uploader add-location" style="background-image:url('https://via.placeholder.com/400/fffbf2?text=Click to upload a photo')">
			<input type="file" data-role="none" id="cat-upload-note-input">
		</label>
	</div>
	
	<div class="form-control">
		<label for="update-cat-description" class="form-label">Description</label>
		<textarea data-role="none" name="update-cat-description" id="update-cat-description" class="add-cat-note"></textarea>
	</div>
	<div class="form-control">
		<a href="#" class="form-button js-location-add">Add Note</a>
	</div>
	`)






















const MakeCatMapPage=o=>`


		
		<div class="display-flex flex-column">
		<div class="cat-note-photo flex-none flex-align-center">
					<img src="${o.photo}" alt="">
				</div>
			<div class="flex-stretch" style="padding:1em">
				
				<p><span>Status:</span> ${o.status}</p>
				<span>Description:</span>
				<p>${o.description}</p>
				<p>Created at: ${o.date_create}</p>
			</div>
				
			
		</div>

	

	`;




const SelectOptions = (a,selected) => {


	return a.reduce((r,o,i)=>{

		return r+`<option class="options" value="${o[0]}" ${(selected==o[0])?"selected":""}>${o[1]} </option>`

	},"");
};

const animalgenders = [
	['Girl','Girl'],
	['Boy','Boy']
];

const animalsize = [
	['Small','Small'],
	['Medium','Medium'],
	['Large','Large']
];


const animalcoat = [
	['Short','Short'],
	['Medium','Medium'],
	['Long','Long']
];



const animalneutered = [
	['Yes','Yes'],
	['No','No']
];



const FormControl=({namespace, name, displayname,type,placeholder,value})=>{
	return`
	<div class="form-control">
		<label for="${namespace}-${name}" class="form-label">${{displayname}}</label>
		<input type="text" class="form-input" id="user-firstname" data-role="none" value="${value} placeholder=${placeholder}">
	</div>

	`
}

// ${FormControl({
// 	namespace:"edit-cat",
// 	name:"name",
// 	displayname:"Name",
// 	type:"text",
// 	placeholder:"Type Animal Name",
// 	value:o.type
// })}
const EditAnimalProfileForm= templater(o=>`


		<div class="display-flex regular-back-header" style="margin-top: 1em;">
			<a href="#" class="back-icon" data-rel="back"><img src="images/back-icon.svg"></a>
						<h2 class="flex-stretch">Edit ${o.name}</h2>
					
			</div>
			<div class="overscroll">
				<form action="" id="edit-cat-form" data-ajax="false" class="margin-bot-5">
					<div class="form-control display-flex flex-align-center  flex-column">
						
					
							<input type="hidden" id="animal-edit-image" value="${o.img}">
							<label class="image-uploader thumbnail" style="background-image:url('${o.img}')">
								<input type="file" data-role="none" id="cat-edit-input">
							</label>
					
					</div>
					<div class="form-control">
						<label for="edit-cat-name" class="form-label">Cat Name</label>
						<input type="text" class="form-input" id="edit-cat-name" data-role="none" value="${o.name}">
					</div>
					<div class="form-control">
						<label for="edit-cat-gender" class="form-label">Gender</label>
						<select name="edit-cat-gender" id="edit-cat-gender" class="drop-down" data-role="none">
							

							${SelectOptions(animalgenders,o.gender)}

						</select>
						
					</div>

					<div class="form-control">
						<label for="edit-cat-breed" class="form-label">Breed</label>
						<input type="text" class="form-input" id="edit-cat-breed" data-role="none" value="${o.breed}">
					</div>
					<div class="form-control">
						<label for="edit-cat-color" class="form-label">Color</label>
						<input type="text" class="form-input" id="edit-cat-color" data-role="none" value="${o.color}">
					</div>
					<div class="form-control">
						<label for="edit-cat-size" class="form-label">Size</label>
						<select id="edit-cat-size" data-role="none" class="drop-down">
							${SelectOptions(animalsize,o.size)}

						</select>
					</div>
					<div class="form-control">
						<label for="edit-cat-coat" class="form-label">Coat</label>
						<select id="edit-cat-coat" data-role="none" class="drop-down">
							${SelectOptions(animalcoat,o.coat)}

						</select>
					</div>
					<div class="form-control">
						<label for="edit-cat-neutered" class="form-label">Neutered?</label>
						<select name="edit-neutered" id="edit-cat-neutered" class="drop-down" data-role="none">
							${SelectOptions(animalneutered,o.neutered)}
							
						</select>
					</div>
					<div class="form-control">
						<label for="edit-cat-description" class="form-label">Cat Description</label>
						<textarea data-role="none" name="edit-cat-description" class="add-cat-note " id="edit-cat-description">${o.description}</textarea>
					</div>
				
					<div class="form-control">
						<a href="#animal-profile-page" class="form-button js-cat-edit">Save</a>
					</div>

				</form>
			</div>`
	);


const EditUserProfileForm= templater(o=>`
		<div class="display-flex regular-back-header" style="margin-top: 1em;">
			<a href="#" class="back-icon" data-rel="back"><img src="images/back-icon.svg"></a>
				<h2 class="flex-stretch">Edit Profile</h2>
			
		</div>
			<div class="overscroll ">
				<form action="" id="edit-user-form" data-ajax="false" class="margin-bot-5">
					<div class="form-control display-flex flex-align-center  flex-column" style="margin-bottom:3em;">
						
					
							<input type="hidden" id="user-edit-image" value="${o.img}">
							<label class="image-uploader thumbnail" style="background-image:url('${o.img}')">
								<input type="file" data-role="none" id="user-upload-input">
							</label>
					
					</div>
					
						<div class="form-control">
							<label for="edit-user-username" class="form-label">Username</label>
							<input type="text" class="form-input" id="edit-user-username" data-role="none" value="${o.username}">
						</div>
				
					<div class="form-control">
						<label for="edit-user-firstname" class="form-label">First Name</label>
						<input type="text" class="form-input" id="edit-user-firstname" data-role="none" value="${o.firstname}">
					</div>
					<div class="form-control">
						<label for="edit-user-lastname" class="form-label">Last Name</label>
						<input type="text" class="form-input" id="edit-user-lastname" data-role="none" value="${o.lastname}">
					</div>
					<div class="form-control">
						<label for="edit-user-location" class="form-label">Location</label>
						<input type="text" class="form-input" id="edit-user-location" data-role="none" value="${o.location}">
					</div>
					<div class="form-control">
						<label for="edit-user-gender" class="form-label">Gender</label>
						<input type="text" class="form-input" id="edit-user-gender" data-role="none" value="${o.gender}">
					</div>
					<div class="form-control">
						<label for="edit-user-email" class="form-label">Email</label>
						<input type="text" class="form-input" id="edit-user-email" data-role="none" value="${o.email}">
					</div>
				
					<div class="form-control">
						<label for="edit-user-bio" class="form-label">Bio</label>
						<textarea data-role="none" name="edit-user-bio" id="edit-user-bio" class="add-cat-note">${o.bio}</textarea>
					</div>

				
					<div class="form-control">
						<a href="#user-profile-page" class="form-button js-user-edit">Save Changes</a>
					</div>

				</form>
			</div>

	`);


const MakeUserAddInfoPage=templater(o=>`

	<div class="welcome-msg">
		<h2>Welcome ${o.firstname}!</h2>
		<p>Tell us about yourself:</p>
	</div>
	<form id="signup-success-form" data-ajax="false">
		
		<div class="form-control display-flex flex-column">
			<label for="signup-gender" class="form-label">Gender</label>
			<input type="gender" class="form-input" id="signup-gender" data-role="none">
		</div>
		<div class="form-control display-flex flex-column">
			<label for="signup-location" class="form-label">Location</label>
			<input type="location" class="form-input" id="signup-location" data-role="none">
		</div>
		<div class="form-control">
			<label for="signup-bio" class="form-label">Bio</label>
			<textarea data-role="none" name="signup-bio"id="signup-bio" class="add-cat-note margin-bot-5"></textarea>
		</div>
		
		
			<div class="form-control">
				<input type="submit" class="form-button signup-info-jump" value="Save" data-role="none">
			</div>
			<div class="form-control">
				<a href="#" class="skip-button signup-info-jump"  data-role="none">I'll skip it for now</a>
			</div>
		
		
	</form>


`);








const MakeNoResultPage=o=>`
	<div class="display-flex flex-column no-location" style="padding:1em">
		<div class="cat-journal-img" style="width:100px"><img src="images/cat-sad.png"></div>
		<p class="">Looks like this cat doesn't have a location yet...Want to add a location?</p>
		<a href="#location-add-page">Add Location</a>

	</div>

`;









const filterList = (animals,type) => {
   let a = [...(new Set(animals.map(o=>o[type])))];
   return templater(o=>`<div class="filter" data-field="${type}" data-value="${o}">${o[0].toUpperCase()+o.substr(1)}</div>`)(a);
}

const makeFilterList = (animals) => {
   return `
   <div class="filter" data-field="type" data-value="all">All</div> | 
   ${filterList(animals,'type')} | 
   ${filterList(animals,'breed')} 
   `;
}











const makeUploaderImage = (el,name,folder='') => {
   $(el).parent().css({'background-image':`url('${folder+name}')`}).addClass("picked")
      .prev().val(folder+name)
}









