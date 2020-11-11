
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

	map_locs.forEach(o=>{
		let m = new google.maps.Marker({
	    position: map_locs[0],
	    map: map,
  });

		markers.push(m);

	})

	map_el.data("markers", markers);
	
}