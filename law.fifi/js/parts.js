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
		<div class="add-note-btn flex-none"><a href="#location-add-page">Add Updates</a></div>
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




const SelectOptions = (a,selected=0) => {
	console.log(selected)

	return a.reduce((r,o,i)=>{
		return`<option class="options" value="${o[0]}" ${(selected==o[0])?"selected":""}>${o[1]} </option>`
	},"");
};

const animalgenders = [
	['Girl','Girl'],
	['Boy','Boy']
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
						<label for="edit-cat-gender" class="form-label">Gender</label>
						<select name="edit-neutered" id="edit-cat-gender" class="drop-down" data-role="none">
							<option  class="options"  value="Girl">Girl</option>
							<option  class="options"  value="Boy">Boy</option>

							$({SelectOptions(animalgenders,${o.gender})})

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
						<input type="text" class="form-input" id="edit-cat-size" data-role="none" value="${o.size}">
					</div>
					<div class="form-control">
						<label for="edit-cat-coat" class="form-label">Coat</label>
						<input type="text" class="form-input" id="edit-cat-coat" data-role="none" value="${o.coat}">
					</div>
					<div class="form-control">
						<label for="edit-cat-neutered" class="form-label">Neutered?</label>
						<select name="edit-neutered" id="edit-cat-neutered" class="drop-down" data-role="none">
							<option  class="options"  value="Yes">Yes</option>
							<option  class="options" value="No">No</option>

						</select>
					</div>
					<div class="form-control">
						<label for="edit-cat-description" class="form-label">Cat Description</label>
						<textarea data-role="none" name="edit-cat-description" class="add-cat-note margin-bot-5" id="edit-cat-description">${o.description}</textarea>
					</div>
				
					<div class="form-control">
						<a href="#animal-profile-page" class="form-button fixed js-cat-edit">Save</a>
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
					<div class="form-control display-flex flex-align-center  flex-column">
						<div class="form-upload-photo cat">
							<img src="${o.img}">

						</div>
						<div >
							<a href="#" class="edit-photo-btn">Edit Photo</a>
							
						</div>
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
						<textarea data-role="none" name="edit-user-bio" id="edit-user-bio" class="add-cat-note margin-bot-5">${o.bio}</textarea>
					</div>

				
					<div class="form-control">
						<a href="#user-profile-page" class="form-button fixed js-user-edit">Save Changes</a>
					</div>

				</form>
			</div>

	`);


const MakeUserAddInfoPage=o=>`

	<div class="welcome-msg">
		<h2>Welcome!</h2>
		<p>Tell us about yourself:</p>
	</div>
	<form id="signup-success-form" data-ajax="false">
		<div class="form-control display-flex flex-column">
			<label for="signup-firstname" class="form-label">First Name</label>
			<input type="text" class="form-input" id="signup-firstname" data-role="none">
		</div>
		<div class="form-control display-flex flex-column">
			<label for="signup-lastname" class="form-label">Last Name</label>
			<input type="lastname" class="form-input" id="signup-lastname" data-role="none">
		</div>
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
				<input type="submit" class="form-button signup-info-jump fixed" value="Save" data-role="none">
			</div>
			<div class="form-control">
				<button class="skip-button fixed"  data-role="none">I'll skip it for now</button>
			</div>
		
		
	</form>


`;