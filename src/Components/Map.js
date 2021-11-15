import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 39.090,
    lng: -84.540
};

function Map(props){

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_APIKEY
    })

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback((map)=>{
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
    }, [])

    const onUnmount = React.useCallback((map)=>{
        setMap(null)
    })
    

    
    return isLoaded? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <h1>Hello Google Maps</h1>
            <></>
        </GoogleMap>
    ) : <h2>Loading</h2>
}

export default React.memo(Map)
