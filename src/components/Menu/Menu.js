import React, { useState, useEffect } from "react";
import BusService from "../../api/services";

const Menu = ({
  coordinates,
  setCoordinates,
  stations,
  setStations,
  setRouteName,
}) => {
  /** form data
   * 1. get current coordinates
   * 2. get the station nearby and set current
   * 3. get routes
   */
  const [stops, setStops] = useState([]);
  const [currentStation, setCurrentStation] = useState(null); // current station
  const [description, setDescription] = useState("");

  // 1. get current coordinates (lat: 緯度; lng: 經度)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error.code, error.message);
        }
      );
    }
  }, []);

  // 2. get the stations nearby and show
  useEffect(() => {
    BusService.getNearby(coordinates).then((data) => {
      if (data.length) {
        // 2.1 get the stations nearby
        setStations(data);
        // 2.2 set default station ( current station )
        const stationID = data[0].StationID;
        setCurrentStation(stationID);
        // 2.3 set description
        const address = data[0].StationAddress;
        setDescription(address);
      }
    });
    console.log(coordinates);
  }, [coordinates]);

  // 3. get routes
  useEffect(() => {
    console.log({ currentStation });
    if (stations && currentStation) {
      // 3.1 get routes of current
      const result = stations.find(
        (station) => station.StationID === currentStation
      );
      // 3.1 get routes of current
      if (result) {
        const stops = result.Stops;
        setStops(stops);
        const address = result.StationAddress;
        setDescription(address);
      }
    }
  }, [currentStation]);

  const routeSelectHandler = (e) => {
    const routeName = e.target.value;
    setRouteName(routeName);
  };

  const stationSelectHandler = (e) => {
    const stationID = e.target.value;
    setCurrentStation(stationID);
  };

  const search = (e) => {
    e.preventDefault();
  };

  /** List data */

  return (
    <section>
      <form>
        <p>乘車位址:</p>
        <p>{description}</p>
        <select
          name="stationSelect"
          id="stationSelect"
          onChange={stationSelectHandler}
        >
          <option value="" disabled>
            站牌
          </option>
          {stations.map((station) => {
            return (
              <option value={station.StationID} key={station.StationID}>
                {station.StationName.Zh_tw} 
                {station.StationAddress}
              </option>
            );
          })}
        </select>
        <select
          name="routeSelect"
          id="routeSelect"
          onChange={routeSelectHandler}
        >
          <option value="">路線名稱</option>
          {stops.length
            ? stops.map((stop) => (
                <option value={stop.RouteName.Zh_tw} key={stop.RouteID}>
                  {stop.RouteName.Zh_tw}
                </option>
              ))
            : ""}
        </select>
        <button onClick={search}>Search</button>
      </form>
    </section>
  );
};

export default Menu;
