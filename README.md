# Interactive Travel Companion Built with React

![Screenshot (288)](https://github.com/user-attachments/assets/503237be-b95e-449e-9629-cf4653cc9748)


It's your travel buddy, always with you! It shows real-time locations of nearby restaurants, hotels, and attractions, helping you explore your surroundings with ease.

![GitHub last commit](https://img.shields.io/github/last-commit/rahu1-ku/travel_companion)
![NPM Version](https://img.shields.io/npm/v/react)
![GitHub top language](https://img.shields.io/github/languages/top/rahu1-ku/travel_companion)

## Project overview

Our project utilizes ![Static Badge](https://img.shields.io/badge/OpenStreetMaps-green)
 and ![Static Badge](https://img.shields.io/badge/React%20Leaflet-red) to create an interactive map. By integrating the Travel Advisor API, we retrieve and display points of interest within the map bounds.

We design informative cards using Material UI that highlight essential details such as name, location, ratings, pricing, awards, phone number, and cuisines, along with direct links to each restaurant's website.

Markers on the map indicate the exact locations of restaurants and hotels, showing key details like the name, photo, and contact information. Additionally, our search feature, powered by the Geocode Earth API and the ge-autocomplete component, allows users to easily find and explore a variety of cities and attractions.



## Pre-requisites 

To install Node.js go to https://nodejs.org/en/download/package-manager

Check and update node to latest version using-

```bash
  npm install npm@latest -g
```

Get the "Travel Advisor" api key from https://rapidapi.com/hub

Also get the GeoCode api key from https://geocode.earth/


## Run Locally

Clone the project

```bash
  git clone https://github.com/rahu1-ku/travel_companion
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```


Create the .env file in the root with the api keys from RapidApi and Geocode earth.

```bash
  REACT_APP_TRAVEL_ADVISOR_API_KEY = YOUR_KEY
  REACT_APP_GEOCODE_EARTH_API_KEY = YOUR_KEY
```

Start the development server

```bash
  npm start
```

Live preview at http://localhost:3000/ (on your system)

## Tech Tree for React Travel Companion
![Static Badge](https://img.shields.io/badge/React%20JS-orange)
![Static Badge](https://img.shields.io/badge/Material%20UI-darkgreen)
![Static Badge](https://img.shields.io/badge/Axios-lightblue)
![Static Badge](https://img.shields.io/badge/JavaScript-blue)

![Static Badge](https://img.shields.io/badge/React%20Leaflet-green)
![Static Badge](https://img.shields.io/badge/React-dom-green)
![Static Badge](https://img.shields.io/badge/Geocode%20Earth-Autocomplete-red)
### Frontend
- **React JS**: Core framework for building the user interface.
  - **React Leaflet**: Library for map integration using OpenStreetMap.
    - **Map API Integration**: Fetch and display map layers with x, y, z indices.
    - **Markers and Popups**: Add markers for restaurants, hotels, and attractions with detailed popups (name, photo, phone number).
  - **Material UI**: Used for designing cards that display location information such as name, ratings, pricing, awards, and website links.
  - **Geocode Earth API & ge-autocomplete**: Implements global search for cities and attractions with autocomplete suggestions.
- **State Management**:
  - **React Hooks**: Manage component state (map bounds, search results, filters).

### Backend/External APIs
- **Travel Advisor API**: Fetches restaurant, hotel, and attraction data within map bounds (location, ratings, pricing, cuisines).

### Features
- **Filtering & Sorting**: Allows filtering between restaurants, hotels, and attractions, with sorting by user ratings.
- **Responsive UI**: Ensures fast and smooth map interaction for a seamless user experience.
- **Dynamic Search**: Search for locations worldwide using ge-autocomplete and display results on the map.


## Preview
![Screenshot (290)](https://github.com/user-attachments/assets/8dbe7a39-2d71-45ad-b04c-3f98712cfd0e)


![Screenshot (291)](https://github.com/user-attachments/assets/62f2a989-4a1d-4c18-93bd-2ee4c56065ea)

![Screenshot (294)](https://github.com/user-attachments/assets/aae6eac4-a985-4d23-a450-f742da1bc64d)


## Acknowledgements

 - [©OpenStreetMaps](https://www.openstreetmap.org/about) for the maps
 - [©Rapid API](https://rapidapi.com/hub) for travel advisor API
 - [©Geocode Earth](https://geocode.earth/) for autocomplete API

