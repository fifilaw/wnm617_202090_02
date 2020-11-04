

const makeAnimalList= templater(o=>`
		<li><a href="#animal-profile-page">
		<div class="animal-list-img" >
			<img src="${o.img}" ></div>
			<div class="display-flex flex-column">
     			<h6 class="list-title">${o.name}</h6><p class="list-type">${o.breed}</p>
     		</div>
     	</a></li>`
	);