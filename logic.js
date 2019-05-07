// var newYorkCoords = [40.73, -74.0059];
// var mapZoomLevel = 12;

var queryUrl = "https://gbfs.citibikenyc.com/gbfs/en/station_information.json";

// createMapcreateMapcreateMapcreateMapcreateMapcreateMapcreateMapcreateMapcreateMapcreateMapcreateMapcreateMapcreateMapcreateMapcreateMap

// Create the createMap function
function createMap(bikeStations) {
  // Create the tile layer that will be the background of our map
var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

  // Create a baseMaps object to hold the lightmap layer
var light = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
});

  // Create an overlayMaps object to hold the bikeStations layer
  // Create the map object with options
  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Light Map": light
  };
  
  var overlayMaps = {
    Stations: bikeStations
  };

  var myMap = L.map("map", {
    center: [
      40.73, -74.0059
    ],
    zoom: 12,
    layers: [streetmap, light]
  });

  // Create our map, giving it the streetmap and earthquakes layers to display on load


  // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
 // L.control.layers(baseMaps, overlayMaps).addTo(myMap);
}


// createMarkerscreateMarkerscreateMarkerscreateMarkerscreateMarkerscreateMarkerscreateMarkerscreateMarkerscreateMarkers


// Create the createMarkers function
function createMarkers(response) {
  // Pull the "stations" property off of response.data

  // Initialize an array to hold bike markers
var bikeMarkers = [];
  // Loop through the stations array
    // For each station, create a marker and bind a popup with the station's name

  for (var i = 0; i < response.length; i++) {
    var bike = response[i];
    L.marker([bike.lat, bike.lon])
      .bindPopup("<h1>" + bike.name + "</h3>");
  }
    // Add the marker to the bikeMarkers array

  // Create a layer group made from the bike markers array, pass it into the createMap function
//L.control.layers().addTo(myMap);
createMap(bikeMarkers);
}
// Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete


// APIcallAPIcallAPIcallAPIcallAPIcallAPIcallAPIcallAPIcallAPIcallAPIcallAPIcallAPIcallAPIcallAPIcallAPIcallAPIcallAPIcall

d3.json(queryUrl, function(response) {
  createMarkers(response.data.stations);
});
