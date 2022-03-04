// import React from 'react'
// import GoogleMapReact from 'google-map-react'
// import MyMarker from "./MyMarker";
// import "./styles.css";

// export default function Contact() {
//     const distanceToMouse = (pt, mp) => {
//         if (pt && mp) {
//             // return distance between the marker and mouse pointer
//             return Math.sqrt(
//                 (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
//             );
//         }
//     };

//     const points = [
//         { id: 1, title: "Round Pond", lat: 51.506, lng: -0.184 },
//         { id: 2, title: "The Long Water", lat: 51.508, lng: -0.175 },
//         { id: 3, title: "The Serpentine", lat: 51.505, lng: -0.164 }
//     ];
//     return (
//         <div style={{ height: '100vh', width: '100%' }}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{
//                     // remove the key if you want to fork
//                     key: "",
//                     language: "en",
//                     region: "US"
//                 }}
//                 defaultCenter={{ lat: 51.506, lng: -0.169 }}
//                 defaultZoom={15}
//                 distanceToMouse={distanceToMouse}
//             >
//                 {points.map(({ lat, lng, id, title }) => {
//                     return (
//                         <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={title} />
//                     );
//                 })}
//             </GoogleMapReact>
//             {/* <script src="https://maps.googleapis.com/maps/api/js?key=yourKEYhere"></script> */}
//         </div>
//     )
// }
import React from "react";
import GoogleMapReact from 'google-map-react';
import MyMarker from "./MyMarker";
import "./styles.css"
import styled from "styled-components";

const Styles = styled.div`
    
`
const AnyReactComponent = ({ lat, lng, id, text }) =>
    <div>
        <MyMarker className="Locate-div" key={id} lat={lat} lng={lng} text={id} tooltip={text} /><b>({lat},{lng})</b>
    </div>;

export default function Contact() {
    const defaultProps = {
        center: {
            lat: 17.4533584,
            lng: 78.3702936
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <Styles>
            <div className="mx-auto my-5" style={{ height: '70vh', width: '50%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={17.4533584}
                        lng={78.3702936}
                        text="West"
                        id="1"
                        title=""
                    />
                </GoogleMapReact>
            </div>
        </Styles>
    );
};