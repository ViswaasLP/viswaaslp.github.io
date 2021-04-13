if($("#map-dark").length){
    function initialize() {
    var mapOptions = {
        zoom: 18,
        scrollwheel: false,
        center: new google.maps.LatLng(51.511522, -0.09304),
        zoomControl: true,
          zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
    };
        
    var map = new google.maps.Map(document.getElementById("map-dark"),mapOptions);
    var marker = new google.maps.Marker({
        icon: 'images/pin-two.png',
        position: map.getCenter(),
        map: map
    });
        
        /*If u want an info window*/
        /*var infowindow = new google.maps.InfoWindow({
          content: "bckjdbcsd",
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });*/

    var styles = [
              {elementType: 'geometry', stylers: [{color: "#343f44"}]},
              {elementType: 'labels.text.fill', stylers: [{color: "#95a49e"}]},
              {elementType: 'labels.text.stroke', stylers: [{"visibility": "off"}]},
              {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#7f9089'}]
              },
              {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{color: '#333f43'}]
              },
              {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#333f43'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#333f43'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#404a4f'}]
              },
              {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#525d62'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#525d62'}]
              },
              {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#495553'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
              }
            ]

    map.setOptions({styles: styles});
}
google.maps.event.addDomListener(window, 'load', initialize);
}
	

