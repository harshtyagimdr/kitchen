	
	var geocoder;
	var map;
	var pinIcon = new google.maps.MarkerImage(
		up_map_var[5]+up_map_var[4]+".png",
		null,
		null,
		null
		);	
	jQuery(document).ready(function() {
		initialize();
		});
	jQuery(window).resize(function() {
			clearTimeout(this.id);
			this.id = setTimeout(afterResizing, 1000);
		});

	function afterResizing(){
			initialize();
		}			
	function initialize() {
  var styles = [
    {
      stylers: [
				{hue: up_map_var[6] },
				{saturation: up_map_var[7]},
				{lightness: up_map_var[8]},
				{gamma: up_map_var[9]}
			]
    }
  ];
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});
	
			var mapOptions = {
				zoom: up_map_var[3]*1,
				center: latlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				streetViewControl: false,
				scrollwheel: false,
				panControl:false,
				zoomControl:true,
				fullscreenControl: false,
    zoomControlOptions: {
      style:google.maps.ZoomControlStyle.SMALL
    },
	 mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
				};

			if(up_map_var[1] && up_map_var[2]) {
			  var latlng = new google.maps.LatLng(up_map_var[1],up_map_var[2]);
			  mapOptions.center=latlng;
            map = new google.maps.Map(document.getElementById("up_map_canvas"), mapOptions);
         } else {
						var address = up_map_var[0];	
						geocoder = new google.maps.Geocoder();
						if (address) {
							map = new google.maps.Map(document.getElementById("up_map_canvas"), mapOptions);
							geocodeAddress(); 
						} 
				}
			var marker = new google.maps.Marker({
				map:map,
				position: latlng,
				icon: pinIcon
				});

  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
		}

		function geocodeAddress() {
			var address = up_map_var[0];
			geocoder.geocode( { "address": address}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					map.setCenter(results[0].geometry.location);
					var marker = new google.maps.Marker({
					map: map,
					position: results[0].geometry.location,
					icon: pinIcon
					});
				} else {
					alert("Geocode was not successful for the following reason: " + status);
				}
			});
		}