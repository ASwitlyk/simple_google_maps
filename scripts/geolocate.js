var map;

function initialize() {

  var mapOptions = {
    zoom: 16,
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  //Try HTML5 geolocation
  if(navigator.geolocation) {
  	console.log('yes geo');
  	navigator.geolocation.getCurrentPosition(function(position) {
  		console.log('position is :', position);
  		// create a new google LatLng object - which is a point in geographical coordinates: latitude and longitude.
  		var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  		map.setCenter(pos);

  		var infowindow = new google.maps.InfoWindow({
  			map: map,
  			position: pos,
  			content: 'Your location found'
  		});

  	}); // end of getCurrentPosition
  } else {
  	console.log('geolocation not allowed');
  }

}

google.maps.event.addDomListener(window, 'load', initialize);