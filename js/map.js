jQuery(function ($) {
   "use strict";
   if ($("#googleMap").length) {
      function initialize() {
         var mapOptions = {
            zoom: 16,
            scrollwheel: false,
            center: new google.maps.LatLng(51.496611, -0.137964),
            zoomControl: true,
            gestureHandling: 'cooperative',
            overviewMapControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT
            },
         };
         var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
         var marker = new google.maps.Marker({
            icon: "images/pin.jpg",
            animation: google.maps.Animation.BOUNCE,
            position: map.getCenter(),
            title: "Synx",
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
            {
               "featureType": "landscape",
               "elementType": "labels",
               "stylers": [
                  {
                     "visibility": "off"
                  },
                  {
                     "color": "#a2a2a2"
                  }
               ]
            },
            {
               "featureType": "transit",
               "elementType": "labels",
               "stylers": [
                  {
                     "visibility": "on"
                  }
               ]
            },
            {
               "featureType": "poi",
               "elementType": "labels",
               "stylers": [
                  {
                     "visibility": "off"
                  }
               ]
            },
            {
               "featureType": "water",
               "elementType": "labels",
               "stylers": [
                  {
                     "visibility": "on"
                  }
               ]
            },
            {
               "featureType": "road",
               "elementType": "labels.icon",
               "stylers": [
                  {
                     "visibility": "on"
                  }
               ]
            },
            {
               "stylers": [
                  {
                     "hue": "#bbbbbb"
                  },
                  {
                     "saturation": -100
                  },
                  {
                     "gamma": 1
                  },
                  {
                     "lightness": 1
                  }
               ]
            },
            {
               "featureType": "road",
               "elementType": "labels.text.fill",
               "stylers": [
                  {
                     "visibility": "on"
                  },
                  {
                     "lightness": 24
                  }
               ]
            },
            {
               "featureType": "road",
               "elementType": "geometry",
               "stylers": [
                  {
                     "lightness": 57
                  },
               ]
            }
         ]
         map.setOptions({
            styles: styles
         });
      }
      google.maps.event.addDomListener(window, "load", initialize);
   }
});