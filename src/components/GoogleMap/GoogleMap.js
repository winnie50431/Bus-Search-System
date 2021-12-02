import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";


const MapContainer = ({ coordinates }) => {
  const mapStyles = {
    height: "75vh",
    width: "100%",
  };

  const stops = [
    {
      StopUID: "TPE13521",
      StopID: "13521",
      StopName: {
        Zh_tw: "士林",
        En: "Shilin",
      },
      StopBoarding: 0,
      StopSequence: 45,
      StopPosition: {
        PositionLon: 121.524405,
        PositionLat: 25.096111,
        GeoHash: "wsqqv2e77",
      },
      StationID: "10209",
    },
    {
      StopUID: "TPE13522",
      StopID: "13522",
      StopName: {
        Zh_tw: "捷運芝山站一",
        En: "MRT Zhishan Sta. 1",
      },
      StopBoarding: -1,
      StopSequence: 46,
      StopPosition: {
        PositionLon: 121.522657043885,
        PositionLat: 25.1007959524461,
        GeoHash: "wsqqv36ne",
      },
      StationID: "801",
    },
    {
      StopUID: "TPE13523",
      StopID: "13523",
      StopName: {
        Zh_tw: "捷運芝山站(福華)",
        En: "MRT Zhishan Sta.(Fuhua)",
      },
      StopBoarding: -1,
      StopSequence: 47,
      StopPosition: {
        PositionLon: 121.522791,
        PositionLat: 25.102851,
        GeoHash: "wsqqv3f4w",
      },
      StationID: "1165604714",
    },
    {
      StopUID: "TPE13524",
      StopID: "13524",
      StopName: {
        Zh_tw: "中山北路口",
        En: "Zhongshan N. Rd. Entrance",
      },
      StopBoarding: -1,
      StopSequence: 48,
      StopPosition: {
        PositionLon: 121.523591,
        PositionLat: 25.105781,
        GeoHash: "wsqqv66gb",
      },
      StationID: "610",
    },
    {
      StopUID: "TPE13525",
      StopID: "13525",
      StopName: {
        Zh_tw: "石油新村",
        En: "Shiyou New Village",
      },
      StopBoarding: 0,
      StopSequence: 49,
      StopPosition: {
        PositionLon: 121.5259541,
        PositionLat: 25.10679142,
        GeoHash: "wsqqv6s3x",
      },
      StationID: "684",
    },
  ];

  const [selected, setSelected] = useState(null);

  const onSelect = (item) => {
    console.log(item);
    setSelected(item);
    console.log(selected);
  };
  return (
    <LoadScript
    //    googleMapsApiKey='YOUR_API_KEY_HERE'
    >
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={}>
        {stops.length > 0
          ? stops.map((stop) => (
              <Marker
                key={stop.StopID}
                position={{
                  lat: stop.StopPosition.PositionLat,
                  lng: stop.StopPosition.PositionLon,
                }}
                onClick={(e) => onSelect(e)}
                onChildClick={(e) => console.log(e)}
              />
            ))
          : null}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
