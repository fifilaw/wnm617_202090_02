

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

	<p><span>Gender: </span> ${o.gender}</p>
	<p><span>Email: </span>${o.email}</p>
	<p><span>Location: </span>${o.location}</p>
	<p><span>Date Joined: </span>Jan 2020</p>


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
		<div class="add-note-btn flex-none"><a href="#add-note-page">Add Updates</a></div>
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

	`)

const makeAnimalProfileAbout=templater(o=>`
			<hr>
		<div class="view-location-btn flex-none js-animal-map"data-id="${o.id}">View Location History</div>
		

		<h2 style="margin-top:2em;">About ${o.name}</h2>
		<div class="cat-bio">
			
			<p>${o.description}</p>
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
		


	`)





const MakeCatMapPage=o=>`

		<div class="display-flex">
			<div class="cat-note-photo flex-none">
				<img src="${o.photo}" alt="">
			</div>
		<div class="display-flex flex-column " style="padding-left: 1em;">
			<h4 style="margin:0">Note</h4>
			<p class="flex-stretch"><span>Status:</span> ${o.status}</p>
		</div>
		</div>
			<h4>Note Description</h4>
			<p>${o.description}</p>
		<p>Created at: ${o.date_create}</p>



	`;




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
			<div>
				<form action="" id="edit-cat-form" data-ajax="false">
					<div class="form-control display-flex flex-align-center  flex-column">
						<div class="form-upload-photo cat">
							<img src="${o.img}">

						</div>
						<div >
							<a href="#" class="edit-photo-btn">Edit Photo</a>
							
						</div>
					</div>
					<div class="form-control">
						<label for="edit-cat-name" class="form-label">Cat Name</label>
						<input type="text" class="form-input" id="edit-cat-name" data-role="none" value="${o.name}">
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
						<input type="text" class="form-input" id="edit-cat-size" data-role="none" value="${o.size}">
					</div>
					<div class="form-control">
						<label for="edit-cat-coat" class="form-label">Coat</label>
						<input type="text" class="form-input" id="edit-cat-coat" data-role="none" value="${o.coat}">
					</div>
					<div class="form-control">
						<label for="edit-neutered" class="form-label">Neutered?</label>
						<select name="edit-neutered" id="edit-neutered" class="drop-down" data-role="none">
							<option  class="options"  value="option1">Yes</option>
							<option  class="options" value="option2">No</option>

						</select>
					</div>
				
					<div class="form-control">
						<a href="#animal-profile-page" class="form-button fixed">Save</a>
					</div>

				</form>
			</div>`
	);


const EditUserProfileForm= templater(o=>`
		<div class="display-flex regular-back-header" style="margin-top: 1em;">
					<a href="#" class="back-icon" data-rel="back"><img src="images/back-icon.svg"></a>
						<h2 class="flex-stretch">Edit User</h2>
					
				</div>
			<div>
				<form action="" id="edit-user-form" data-ajax="false" class="overscroll">
					<div class="form-control display-flex">
						<div class="form-upload-photo user">
							<img src="images/add.svg" class="flex-none ">
						</div>
						<div class="flex-stretch">
							<label for="user-profile-name" class="form-label">Username</label>
							<input type="text" class="form-input" id="user-profile-name" data-role="none" value="${o.username}">
						</div>
					</div>
					<div class="form-control">
						<label for="user-firstname" class="form-label">First Name</label>
						<input type="text" class="form-input" id="user-firstname" data-role="none" value="${o.firstname}">
					</div>
					<div class="form-control">
						<label for="user-lastname" class="form-label">Last Name</label>
						<input type="text" class="form-input" id="user-lastname" data-role="none" value="${o.lastname}">
					</div>
					<div class="form-control">
						<label for="user-location" class="form-label">Location</label>
						<input type="text" class="form-input" id="user-location" data-role="none" value="${o.location}">
					</div>
					<div class="form-control">
						<label for="user-gender" class="form-label">Gender</label>
						<input type="text" class="form-input" id="user-gender" data-role="none" value="${o.gender}">
					</div>
					<div class="form-control">
						<label for="user-email" class="form-label">Email</label>
						<input type="text" class="form-input" id="user-email" data-role="none" value="${o.email}">
					</div>

				
					<div class="form-control">
						<a href="#user-profile-page" class="form-button">Save Changes</a>
					</div>

				</form>
			</div>

	`)


