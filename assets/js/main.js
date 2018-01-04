require([
	"esri/Map",
	"esri/views/SceneView",
	"dojo/domReady!"
], function(Map, SceneView){

  var map = new Map({
    basemap: "street",
    ground: "world-elevation"
  });	
  var view = new SceneView({
    container: "mapView", 
    map: map
  });

});