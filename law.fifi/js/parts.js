

const makeAnimalList= templater(o=>`
		<div class="js-animal-jump" data-id="${o.id}">
		<div class="animal-list-img" >
			<img src="${o.img}" ></div>
			<div class="display-flex flex-column">
     			<h6 class="list-title">${o.name}</h6><p class="list-type">${o.breed}</p>
     		</div>
     	</div>`
	);


const makeUserProfile =templater(o=>`

		<div class="display-flex user-profile-card space-around">
					<div class="user-icon flex-none"><img src="${o.img}" class="user-icon"></div>
					
					<div class="user-detail flex-stretch">
						<h2>${o.firstname} ${o.lastname}</h2>
						<p>Joined Jan 2020</p>
					</div>
				
					<div class="flex-none">
					<a href="#" class="more-icon" data-activate="#list-add-modal" style="margin-top: 1em;"><img src="images/more.png" ></a>
					</div>
				</div>
				<div class="user-profile-detail">
					<h4 style="font-size: 0.8em;">Personal Information:</h4>
					<p><span>Gender: </span> ${o.gender}</p>
					<p><span>Email: </span>${o.email}</p>
					<p><span>Location: </span>${o.location}</p>
				</div>
					<h4 style=" margin-top: 3em;font-size: 0.8em;   margin-left: 1em;">Personal Achievements:</h4>
				<div class="display-flex space-around" style="flex-wrap: wrap;">

					<div class="user-achievement">

						<h4>Cats Found</h4>
						<div class="display-flex flex-align-center ">
							<p class="flex-stretch">15</p>
							<div class="cat-badge"><img class="flex-none" src="images/badge.svg"></div>
							<div class="cat-badge"><img class="flex-none" src="images/badge-2.svg"></div>
						</div>
					</div>
					<div class="user-achievement">
						<h4>Breed</h4>
						<div class="display-flex flex-align-center ">
							<p class="flex-stretch">6</p>
							
						</div>
					</div>
					<div class="user-achievement">
						<h4>Colors</h4>
						<div class="display-flex flex-align-center ">
							<p class="flex-stretch">4</p>
							
						</div>
					</div>
					<div class="user-achievement">
						<h4>Neutered</h4>
						<div class="display-flex flex-align-center ">
							<p class="flex-stretch">10</p>
							<div class="cat-badge"><img class="flex-none" src="images/badge.svg"></div>
							
						</div>
					</div>
				</div>
	`);


const makeAnimalNote= templater(o=>`

	
				
				<div class="cat-note-detail col-sm-6">
					<img src="${o.photo}">
					<p>${o.description}</p>
				</div>
			

	`);

const makeAnimalProfile= templater(o=>`
		<div class="cat-icon flex-none"><img src="${o.img}"></div>
		
	
			<div class="cat-profile">
				<div class="display-flex space-around " >
			
					<div class="cat-detail flex-stretch">
						<div class="reverse-btn flex-none js-animal-map"data-id="${o.id}" >View Location</div>
					

					<div class="add-note-btn flex-none"><a href="#add-note-page" >Add Note</a></div>
				
					</div>	
			
				
				</div>
				<div class="cat-profile-detail display-flex space-between">
					<div class="display-flex flex-column">
						<span>Breed</span>
						<p>${o.breed}</p>
					</div>
					<div class="display-flex flex-column">
						<span>Color</span><p>${o.color}</p>
					</div>
					<div class="display-flex flex-column">
						<span>Size</span><p>${o.size}</p>
					</div>	
					<div class="display-flex flex-column">
						<span>Coat</span><p>${o.coat}</p>
					</div>	
					<div class="display-flex flex-column">
						<span>Neutered</span><p>${o.neutered}</p>
					</div>
				</div>		
					
  					<h2 style="padding-left: 1em;">Cat Notes</h2>
				<div class="cat-note grid gap">

  				</div>
		
			</div>
			
		</div>
	


		`
	);




const EditAnimalProfileForm= templater(o=>`
		<div class="display-flex regular-back-header" style="margin-top: 1em;">
			<a href="#" class="back-icon" data-rel="back"><img src="images/back-icon.svg"></a>
						<h2 class="flex-stretch">Edit ${o.name}</h2>
					
			</div>
			<div>
				<form action="" id="edit-cat-form" data-ajax="false">
					<div class="form-control display-flex">
						<div class="form-upload-photo cat">
							<img src="images/add.svg" class="flex-none ">
						</div>
						<div class="flex-stretch">
							<label for="edit-cat-name" class="form-label">Cat Name</label>
							<input type="text" class="form-input" id="edit-cat-name" data-role="none" value="${o.name}">
						</div>
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
						<select name="edit-neutered" id="edit-neutered" class="drop-down">
							<option  class="options"  value="option1">Yes</option>
							<option  class="options" value="option2">No</option>

						</select>
					</div>
				
					<div class="form-control">
						<a href="#animal-profile-page" class="form-button">Edit Cat</a>
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