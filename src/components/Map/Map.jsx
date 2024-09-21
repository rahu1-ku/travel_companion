import React, { useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useStyle from "./styles";
import { Grid, useMediaQuery } from "@material-ui/core";
import L from "leaflet";
import pin from "leaflet/dist/images/marker-shadow.png";
import { Box, Button, Rating, Typography } from "@mui/material";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) => {
  const classes = useStyle();
  const isMobile = useMediaQuery("(min-width:600px)");

  const MapEvents = () => {
    const map = useMap();

    useEffect(() => {
      if (coordinates) {
        map.setView([coordinates.lat, coordinates.lng], map.getZoom(), {
          animate: true,
        });
      }
    }, [coordinates, map]);

    useMapEvent("moveend", (event) => {
      const map = event.target;
      const center = map.getCenter();
      const bounds = map.getBounds();

      setCoordinates({ lat: center.lat, lng: center.lng });

      setBounds({
        ne: bounds.getNorthEast(),
        sw: bounds.getSouthWest(),
      });
    });
    return null;
  };

  return (
    <div className={classes.mapContainer}>
      <MapContainer
        className={classes.leafletContainer}
        center={coordinates}
        zoom={14}
      >
        <TileLayer
          className={classes.leafletContainer}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {places?.map(
          (place, index) =>
            place.latitude &&
            place.longitude && (
              <Marker
                key={index}
                position={[place.latitude, place.longitude]}
                icon={L.icon({
                  iconUrl:
                    "https://static-00.iconduck.com/assets.00/map-marker-icon-171x256-xkl73sge.png",
                  shadowUrl: pin,
                  iconSize: [27, 43],
                  iconAnchor: [12, 41],
                })}
                eventHandlers={{
                  click: () => {
                    setChildClicked(index);
                  },
                }}
              >
                <Popup autoPan={false}>
                  <Grid container spacing={2}>
                    {/* Place name */}
                    <Grid item xs={12}>
                      <Typography
                        className={classes.typography}
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: "bold" }}
                      >
                        {place.name}
                      </Typography>
                    </Grid>

                    {/* Place image */}
                    <Grid item xs={12}>
                      <img
                        src={
                          place.photo
                            ? place.photo.images.large.url
                            : "https://media.istockphoto.com/id/187363337/photo/modern-hotel-building-in-summer.jpg?s=612x612&w=0&k=20&c=eRVDcadZTKs5t2K-CEeXT6DiJQ68Fnbs6u9F-0S_v8Q="
                        }
                        alt={place.name}
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "8px",
                        }}
                      />
                    </Grid>

                    {/* Price, Address, Phone, and Rating */}
                    <Grid item xs={12}>
                      <Box>
                        {/* Price */}
                        <Typography gutterBottom variant="subtitle1">
                          {place.price}
                        </Typography>

                        {/* Address with Location Icon */}
                        <Typography gutterBottom variant="subtitle1">
                          {place.address_obj?.street2 ? (
                            <Box
                              component="span"
                              sx={{ display: "flex", alignItems: "center" }}
                            >
                              <LocationOnIcon sx={{ marginRight: "5px" }} />
                              {place.address_obj.street2}
                            </Box>
                          ) : (
                            ""
                          )}
                        </Typography>

                        {/* Phone with Phone Icon */}
                        <Typography gutterBottom variant="subtitle1">
                          {place.phone ? (
                            <Box
                              component="span"
                              sx={{ display: "flex", alignItems: "center" }}
                            >
                              <PhoneIcon sx={{ marginRight: "5px" }} />{" "}
                              {place.phone}
                            </Box>
                          ) : (
                            ""
                          )}
                        </Typography>

                        {/* Rating */}
                        <Typography gutterBottom variant="subtitle1">
                          <Box
                            component="span"
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            {place.rating}
                            <Rating
                              size="small"
                              value={place.rating}
                              readOnly
                              sx={{ marginLeft: "5px", marginRight: "5px" }}
                            />
                            ({place.num_reviews})
                          </Box>
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Popup>
              </Marker>
            )
        )}

        <MapEvents />
      </MapContainer>
    </div>
  );
};

export default Map;
