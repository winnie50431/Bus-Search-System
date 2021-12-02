import React, { useState, useEffect } from "react";
import Menu from "../components/Menu/Menu";
import List from "../components/List/List";
import Map from "../components/Map/Map";
// import { getData, getStationData } from "../api/services";
import Navbar from "../components/Navbar/Navbar";
import { CssBaseline, Grid } from "@material-ui/core";

const Homepage = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 }); // current position
  const [stations, setStations] = useState([]); // All data of stations nearby
  const [routeName, setRouteName] = useState(null);

  return (
    <div>
      <CssBaseline />
      <Menu
        coordinates={coordinates}
        stations={stations}
        setCoordinates={setCoordinates}
        setStations={setStations}
        setRouteName={setRouteName}
      />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={8}>
          <Map coordinates={coordinates} routeName={routeName} />
        </Grid>
        <Grid item xs={12} md={4}>
          <List routeName={routeName} />
        </Grid>
      </Grid>
      {/* <CssBaseline />
      <Navbar />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map coordinates={coordinates} stations={stations} />
        </Grid>
      </Grid> */}
    </div>
  );
};

export default Homepage;
