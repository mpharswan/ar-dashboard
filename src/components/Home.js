import { useEffect, useState } from "react";
import ReactMapGL, { NavigationControl} from "react-map-gl";

const Home = () => {

    const [ viewport, setViewport] = useState({
        // latitude: 45.4211,
        // longitude: -75.6903,
        latitude: 24.979940,
        longitude: 55.118881,
        width: '100%',
        height: '100vh',
        zoom: 12,
        // pitch: 50
      })

      return (
        <div className="home" >
          <ReactMapGL {...viewport} 
          // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapboxApiAccessToken="pk.eyJ1IjoibWFuc29vcmFtZWVuIiwiYSI6ImNrczh3Y2d6bTFyMTYybnBobzd4ZXUycXcifQ.Ebyu9N4yE8hppLp6JQmsjg"
          mapStyle="mapbox://styles/mansoorameen/cks76xung60ih18kcuvver6yk"
          onViewportChange={viewport => {
            setViewport(viewport)
          }}
          >
                {/* <NavigationControl /> */}
    
          </ReactMapGL>
        </div>
      );
    }
export default Home
