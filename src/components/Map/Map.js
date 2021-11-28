import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import BusService from "../../api/services";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlined from "@material-ui/icons/LocationOnOutlined";
import useStyles from "./styles";
import { LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ coordinates, routeName }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width: 600px)");
  const [ stopsData, setStopsData ] = useState(null);
  // let stopsData = [];

  useEffect(() => {
    if (routeName) {
      BusService.getStopOfRoute(routeName)
        .then((data) => {
          setStopsData(data)
        })
        .catch((err) => console.log(err));
    }
  }, [routeName]);

  const StopMarker = ({ text }) => (
    <div
      style={{
        color: "white",
        background: "red",
        padding: "10px 10px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {text}
    </div>
  );

  const AnyReactComponent = ({ text }) => (
    <div
      style={{
        color: "white",
        background: "grey",
        padding: "15px 10px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {text}
    </div>
  );

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        // bootstrapURLKeys={{
        //   key: process.env.REACT_APP_MAPSTOKEN,
        // }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        yesIWantToUseGoogleMapApiInternals
        // options={""}
        // onChange={""}
        onChildClick={(e) => console.log(e)}
      >
        <AnyReactComponent
          text={"My house"}
          key={1}
          lat={coordinates.lat}
          lng={coordinates.lng}
        />
        { stopsData && (stopsData.length>0) ?
          stopsData[0].Stops.map((stop) => (
            <StopMarker
              text={stop.StopSequence}
              lat={stop.StopPosition.PositionLat}
              lng={stop.StopPosition.PositionLon}
            />
          )) : null }
      </GoogleMapReact>
    </div>
  );
};

export default Map;
