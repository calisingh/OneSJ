import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";
import DirectionsIcon from "@material-ui/icons/Directions";

const Map = ({ service }) => {
  const [selected, setSelected] = useState(true);

  const libraries = ["places"];

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyB2i3tIi6Yn9DOzeUQJf3DUcFbFh9IOcOY",
    libraries,
  });

  if (loadError) return "There was an error connecting to Google Maps";

  if (!isLoaded) return "Loading...";

  const mapContainerStyle = {
    width: "100%",
    height: "50vh",
  };

  const center = {
    lat: service.lat ? service.lat : 37.3382,
    lng: service.lon ? service.lon : -121.8863,
  };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={15}
      center={center}
      // Allow for scrolling to zoom in and out
      options={{ gestureHandling: "greedy" }}
    >
      <Marker
        position={center}
        title={service.provider_name}
        onClick={() => setSelected(!selected)}
      />
      {selected ? (
        <InfoWindow
          position={center}
          onCloseClick={() => setSelected(false)}
          options={{ pixelOffset: new window.google.maps.Size(0, -40) }}
        >
          <div className="center">
            <h4>{service.provider_name}</h4>
            <h6>
              Website:{" "}
              <a
                className="data"
                rel="noreferrer"
                target="_blank"
                href={service.web_link}
              >
                {service.provider_name}
              </a>
            </h6>
            <h6>Address: {service.address}</h6>
            <h6>
              <a
                className="data"
                rel="noreferrer"
                target="_blank"
                href={
                  "https://www.google.com/maps/dir//" +
                  service.address.replace(/ /g, "+")
                }
              >
                Get Directions <DirectionsIcon />
              </a>
            </h6>
            <h6>Phone Number: {service.contact}</h6>
            <h6>Email: {service.email}</h6>
          </div>
        </InfoWindow>
      ) : null}
    </GoogleMap>
  );
};

export default Map;
