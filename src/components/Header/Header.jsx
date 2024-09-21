import { AppBar, Box, InputBase, Toolbar, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";

const Header = ({ setCoordinates }) => {
  const KEY = process.env.REACT_APP_GEOCODE_EARTH_API_KEY;
  const classes = useStyles();

  useEffect(() => {
    const autoCompleteElement = document.querySelector("ge-autocomplete");
    const handleSuggestionClick = (event) => {
      const suggestion = event.target.value;
      if (suggestion && suggestion !== "") {
        handleSelection(suggestion);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        const suggestion = event.target.value;
        if (suggestion && suggestion !== "") {
          handleSelection(suggestion);
        }
      }
    };

    if (autoCompleteElement) {
      autoCompleteElement.addEventListener("click", handleSuggestionClick);
      autoCompleteElement.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (autoCompleteElement) {
        autoCompleteElement.removeEventListener("click", handleSuggestionClick);
        autoCompleteElement.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  const handleSelection = async (selectedPlace) => {
    const apiKey = KEY;
    const query = `https://api.geocode.earth/v1/autocomplete?api_key=${apiKey}&text=${encodeURIComponent(
      selectedPlace
    )}`;

    try {
      const response = await fetch(query);
      const data = await response.json();

      if (data.features && data.features.length > 0) {
        const coordinates = data.features[0].geometry.coordinates;
        setCoordinates({ lat: coordinates[1], lng: coordinates[0] });
      } else {
        console.error("No results found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4" className={classes.title}>
          Travel Companion
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="h5" className={classes.title}>
            Explore places
          </Typography>
          <div className={classes.search}>
            <ge-autocomplete
              api_key={KEY}
              placeholder="Search..."
              className={classes.autoCompleteContainer}
            >
              <SearchIcon className={classes.searchIcon} />
            </ge-autocomplete>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
