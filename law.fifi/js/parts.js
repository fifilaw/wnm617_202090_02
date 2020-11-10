

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

const makeAnimalProfile= templater(o=>`
		<div class="display-flex back-header" >
				<a href="#list-page" class="back-icon"><img src="images/back-icon.svg"></a>
					<h2 class="flex-stretch">${o.name}</h2>
				<a href="#" class="flex-none more-icon" data-activate="#cat-menu"><img src="images/more.png" ></a>
			</div>
	
			<div class="display-flex space-around " >
		<div class="cat-icon flex-none"><img src="${o.img}"></div>
		
		<div class="user-detail flex-stretch">
			<div class="reverse-btn flex-none"><a href="#map-page" >View Location</a></div>
		

		<div class="add-note-btn flex-none"><a href="#add-note-page" >Add Note</a></div>
			
		</div>	
			
				
			</div>
			<div class="cat-profile-detail display-flex space-between">
				<div class="flex-none">
					<p><span>Breed:</span>${o.breed}</p>
					<p><span>Color:</span>${o.color}</p>
					<p><span>Size: </span>${o.size}</p>
				</div>
				<div class="flex-none" style="margin-right: 2em;"><p><span>Coat: </span>${o.coat}</p>
				<p><span>Neutered:</span>${o.neutered}</p></div>
				
			</div>
		
			<div class="cat-note grid gap">
				
				<div class="cat-note-detail col-sm-6">
					<img src="images/venus-1.png">
					<p>Venus is wearing a hat.</p>
				</div>
				<div class="cat-note-detail col-sm-6">
					<img src="images/venus-2.png">
					<p>Venus being cute.</p>
				</div>
				<div class="cat-note-detail col-sm-6">
					<img src="images/venus-3.png">
					<p>Venus forgets to put her toungue back.</p>
				</div>
				<div class="cat-note-detail col-sm-6">
					<img src="images/venus-4.png">
					<p>Venus is wearing a scarf.</p>
				</div>
				
				
			
		</div>
		<div class="modal" id="cat-menu" style="top: 0; z-index: 6; left: 0;">
      	<div class="modal-back" data-deactivate="#cat-menu"></div>
      	<div class="modal-popup">
      		<div class="modal-head"><div><a href="#edit-cat-page" data-deactivate="#cat-menu">Edit Cat Profile</a></div></div>
      		<div class="modal-foot" data-activate="#delete-cat" data-deactivate="#cat-menu"><a href="#">Delete Cat Profile</a></div>
      	</div>
      </div>

      <div class="modal" id="delete-cat" style="top: 0; z-index: 6; left: 0;">
      	<div class="modal-back" data-deactivate="#delete-cat"></div>
      	<div class="modal-popup">
      		
      		<div class="modal-question"><div>Are you sure?</div></div>
      		<div class="display-flex space-around" style="background: var(--color-main-medium);">
      			<div class="modal-select flex-none" data-deactivate="#delete-cat"><div><a href="#">No</a></div></div>
      			<div class="modal-select flex-none yes"><div><a href="#list-page" data-deactivate="#delete-cat">Yes</a></div></div>
      		</div>
      	</div>
      </div>


		`
	);