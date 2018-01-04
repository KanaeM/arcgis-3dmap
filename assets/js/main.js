require([
	"esri/Map",
	"esri/views/SceneView",
  "esri/layers/TileLayer",
	"dojo/domReady!"
], function(Map, SceneView, TileLayer){

  var protectedAreaLayer = new TileLayer({
    url: "https://strimaps.si.edu/arcgis/rest/services/Panama/AreasProtegidas/MapServer",
    id: "protected-area-layer",
  });

  var map = new Map({
    basemap: "dark-gray",
    layers: [protectedAreaLayer],
    ground: "world-elevation"
  });	
  var view = new SceneView({
    container: "mapView", 
    map: map,
    scale: 50000000      // Sets the initial scale to 1:50,000,000
    // center: [ -79.516670, 8.983333]  // Sets the center point of view with lon/lat
  });

  protectedAreaLayer.when(function(){
    view.goTo(protectedAreaLayer.fullExtent);
  })

});