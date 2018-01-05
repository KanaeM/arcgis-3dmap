require([
	"esri/Map",
	"esri/views/SceneView",
  "esri/layers/TileLayer",
  "dojo/dom",
  "dojo/on",
	"dojo/domReady!"
], function(Map, SceneView, TileLayer, dom, on){

  var protectedAreaLayer = new TileLayer({
    url: "https://strimaps.si.edu/arcgis/rest/services/Panama/CoberturaBoscosa2000/MapServer",
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
    scale: 50000000 
  });

  protectedAreaLayer.when(function(){
    view.goTo(protectedAreaLayer.fullExtent);
  })

});