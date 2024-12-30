#Leaflet Earthquake Visualization
##Project Overview
This project is part of a challenge to visualize earthquake data provided by the United States Geological Survey (USGS). The goal is to build an interactive web map using Leaflet.js to display earthquake data and provide meaningful context to the public. The map visualizes earthquakes using markers where the size of the marker reflects the earthquake's magnitude and the color represents its depth. Additional features such as popups and legends are added to provide more context.

##Objective:
Create a dynamic map using Leaflet that visualizes USGS earthquake data.
Plot earthquakes from the past 7 days with markers reflecting their magnitude and depth.
Implement popups with detailed information about each earthquake.
Add a legend to explain the color coding for depth.

##Table of Contents
Project Features
Technologies Used
Setup Instructions
Project Structure
Usage
Credits

##Project Features
1. Earthquake Map Visualization
A Leaflet map displays earthquake data from the USGS GeoJSON feed.
Earthquake markers are dynamically sized based on their magnitude.
The color of each marker indicates the depth of the earthquake, with a color scale representing different depth intervals.
2. Interactivity and Popups
Each marker includes a popup that provides additional information about the earthquake, such as:
Magnitude
Depth
Location
3. Color-Coded Legend
A legend is provided to explain the color scheme used for depth classification on the map.
Technologies Used
Leaflet.js: JavaScript library used to build the interactive map.
D3.js: JavaScript library used to fetch and process the GeoJSON data from the USGS API.
GeoJSON: A format used to represent earthquake data from the USGS.

##Setup Instructions
Clone the repository: To get started, clone the repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/leaflet-challenge.git
Install dependencies: This project doesn't require any external dependencies, as it relies on libraries loaded directly from a CDN. Ensure that you have an internet connection to load the Leaflet and D3 libraries.

Open the project: Open the index.html file in your browser to view the map and interact with the visualization.

##Project Structure
graphql
Copy code
leaflet-challenge/
│
├── index.html       # Main HTML file for the map
├── Leaflet-Part-1/  # Directory for Part 1 of the challenge
│   ├── style.css    # Styles for the map and legend
│   ├── script.js    # JavaScript code for fetching and visualizing earthquake data
│   └── index.html   # The HTML page for Part 1
└── README.md        # Project documentation (this file)

##Usage
Open the index.html file in a browser to see the map.
The map will load earthquake data from the USGS API, plotting earthquakes from the past 7 days.
Each earthquake is represented by a circle marker. The size reflects its magnitude, and the color reflects its depth.
Clicking on a marker will display a popup with the following information:
Magnitude
Depth
Location of the earthquake
The legend at the bottom of the map will explain the color coding for depth.

##Credits
USGS Earthquake Data: Data provided by the United States Geological Survey.
Leaflet.js: Open-source JavaScript library for interactive maps.
D3.js: JavaScript library for data visualization.
OpenStreetMap: Base map tiles used for the map's background.