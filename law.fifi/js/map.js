
const makeMap= async (target, center={ lat: 37.785981, lng: -122.399262})=>{

	await checkData(()=>window.google);

	let map_el = $(target);

   if(!map_el.data('map'))
      map_el.data(
         "map",
         new google.maps.Map(map_el[0], {
            center: center,
            zoom: 12,
            disableDefaultUI: true
         })
      );

   return map_el;
}

const makeMarkers = (map_el, map_locs)=>{
	
	let map = map_el.data('map');

	let markers = map_el.data("markers");

	if(markers) markers.forEach(o=>o.setMap(null));

	markers=[];

	map_locs.forEach(o=>{
		let m = new google.maps.Marker({

		    position: o,
		    map: map,
		    icon:{
		    	url:'images/map.svg',
		    	scaledSize:{
		    		width:50,
		    		height:50
		    	}
		    }
  });

		markers.push(m);

	})

	map_el.data("markers", markers);



	
}
