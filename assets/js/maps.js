function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {   // create a new object map
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });   // with that object we were able to get a Google Map rendering in our map div.

    // we need to have markers that show where Rosie has been, 
    // when the markers are close together, then we'd like them to appear in one cluster.
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  // Each individual letter is going to appear on the markers
    var locations = [ //this array contain a set of objects which contain a latitude and a longitude of the different places that Rosie has visited.
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 }
    ];
    // we need to iterate through locations array and create a new marker that has the label from our string
    var markers = locations.map(function (location, i) {   //this map method here is a built-in JavaScript method. 
        //Don't get it confused with the Google Map that we're working with.
        //The map method in JavaScript works similar to a forEach() function.
        // location is the current value of where we are in the locations array
        //i is the index number of where we currently are in the array

        //returns a new google.maps.Marker object.
        return new google.maps.Marker({   //this returns results of looping through each item in our locations array
            //a position value, which is going to be set to the current location 												
            position: location,
            //a label which is set to i % labels.length
            label: labels[i % labels.length]  //The reason for using the %operator is so that if we have more than 26 locations, 
            //then it will loop around to the start of our string again and go from Z back to A, 
            //instead of throwing an error.
        });
    });
    // go back to the "Create Marker Clusters" Google tutorial and grab the sample code to add a marker image to our map.
    // this code create both the marker image for our map and also going to create them in a cluster if they're close together 
    // using that clusterer library that we already loaded.
    var markerClusterer = MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}