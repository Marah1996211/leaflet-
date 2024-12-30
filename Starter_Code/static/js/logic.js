console.log('getting started');

// Creating the tile layer for the background
let basemap = L.tileLayer(
    "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", // Fixed URL string
    {
        attribution:
            'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    }
);

// Creating a map object with options
let map = L.map("map", {
    center: [40.7, -94.5],
    zoom: 3,
});

// Add base map to our object
basemap.addTo(map);

// Making the AJAX call to retrieve earthquake geoJSON data
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function (data) {
    // Creating a function that returns the style of each earthquake plotted on the map
    function styleInfo(feature) {
        return {
            opacity: 1,
            fillOpacity: 1,
            fillColor: getColor(feature.geometry.coordinates[2]),
            color: "#000000",
            radius: getRadius(feature.properties.mag),
            stroke: true,
            weight: 0.5,
        };
    }

    // Function to determine the color of the marker based on depth
    function getColor(depth) {
        switch (true) {
            case depth > 90:
                return '#ea2c2c';
            case depth > 70:
                return '#ea822c';
            case depth > 50:
                return '#ee9c00';
            case depth > 30:
                return '#eecc00';
            case depth > 10:
                return '#d4ee00';
            default:
                return "#98ee00";
        }
    }

    // Function to determine the radius of the earthquake marker based on magnitude
    function getRadius(magnitude) {
        if (magnitude === 0) {
            return 1;
        }
        return magnitude * 4;
    }

    // Adding geoJSON layer to the map
    L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },
        style: styleInfo,
        onEachFeature: function (feature, layer) {
            layer.bindPopup(
                "Magnitude: " + feature.properties.mag +
                "<br>Depth: " + feature.geometry.coordinates[2] +
                "<br>Location: " + feature.properties.place
            );
        }
    }).addTo(map);

    // Legend setup
    let legend = L.control({
        position: "bottomright"
      });
    
      // Then add all the details for the legend
      legend.onAdd = function () {
        let div = L.DomUtil.create("div", "info legend");
    
        let grades = [-10, 10, 30, 50, 70, 90];
        let colors = [
          "#98ee00",
          "#d4ee00",
          "#eecc00",
          "#ee9c00",
          "#ea822c",
          "#ea2c2c"
        ];
    
        // Looping through our intervals to generate a label with a colored square for each interval.
        for (let i = 0; i < grades.length; i++) {
            div.innerHTML += "<i style='background: " + colors[i] + "'></i> "
              + grades[i] + (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
          }
        return div;
      };
    
      // Finally, we our legend to the map.
      legend.addTo(map);
    });