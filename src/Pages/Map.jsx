import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  const defaultProps = {
    center: {
      //https://www.youtube.com/watch?v=Pf7g32CwX_s
      //search latlong.net and then search for a place name
      //for cox's bazar
      lat: 39.059479,
      lng: -80.873016,
    },
    zoom: 11,
  };

  //googlemapurl: https://www.google.com/maps/api=1/js?v=3.exp&libraries=geometry,drawing,places
  return (
    <div className="w-full h-80 mt-6">
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.REACT_APP_GOOGLE_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={39.059479}
          lng={-80.873016}
          text="Family Hotel"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
