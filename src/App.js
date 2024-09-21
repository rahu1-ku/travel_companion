import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./api";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState({
    sw: { lat: 0, lng: 0 }, // Default Southwest coordinates
    ne: { lat: 0, lng: 0 }, // Default Northeast coordinates
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);

    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    if (
      coordinates.lat !== 0 &&
      coordinates.lng !== 0 &&
      bounds.sw.lat !== 0 &&
      bounds.ne.lat !== 0
    ) {
      setIsLoading(true);
      const fetchPlaces = async () => {
        try {
          const data = await getPlacesData(type, bounds.sw, bounds.ne);
          setPlaces(
            data?.filter((place) => place.name && place.num_reviews > 0)
          );
          setIsLoading(false);
          setFilteredPlaces([]);
        } catch (error) {
          console.error("Error fetching places data:", error);
        }
      };

      fetchPlaces();
    }
  }, [type, bounds]);
  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
