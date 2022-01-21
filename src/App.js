import { useEffect, useState } from "react";
import "./App.scss";
import FareDetails from "./components/common/FareDetails/FareDetails";
import RouteSelector from "./components/common/RouteSelector/RouteSelector";
import { MAX_COST } from "./constant";

const App = () => {
  const [enableEndjourney, setEnableEndjourney] = useState(false);
  const [startStation, setStartStation] = useState("");
  const [endStation, setEndStation] = useState("");
  const [credit, setCredit] = useState(30);
  const [fare, setFare] = useState(0);
  // const [points, setPoints] = useState([]);
  const points = [];

  const StartRoute = [
    { id: "1", name: "Holborn" },
    { id: "2", name: "Earl’s Court" },
    { id: "3", name: "Wimbledon" },
    { id: "4", name: "Hammersmith" },
  ];
  const EndRoute = [
    { id: "5", name: "Holborn" },
    { id: "6", name: "Earl’s Court" },
    { id: "7", name: "Wimbledon" },
    { id: "8", name: "Hammersmith" },
  ];
  useEffect(() => {
    setFare(MAX_COST);
  }, []);
  const startJourney = (station) => {
    points.push(...points, "1");
    console.log(`POINTS : ${points}`);
  };
  const endJourney = (station) => {
    console.log(`POINTS : ${points}`);
    points.push(...points, "2");
    setFare("1.2");
    if (credit >= 30) {
      console.log(`POINTS : ${points}`);
    }
  };
  const handleStartClick = (stationName) => {
    setEnableEndjourney(true);
    setStartStation(stationName);
    console.log(`Start Station ${stationName}`);
    startJourney(stationName);
  };
  const handleEndClick = (stationName) => {
    // setEnableEndjourney(true);
    // setStartStation(stationName);
    console.log(`End Station : ${stationName}`);
    setEndStation(stationName);
    endJourney(stationName);
    console.log(`Journey ends`);
    getTotalCredit();
  };
  const getTotalCredit = () => {
    if (points.length <= 2) {
      // setFare("1.3");
      console.log(`Final Fare : ${fare}`);
    } else {
      setFare(MAX_COST);
    }
  };

  return (
    <div className="app">
      <p>Select Journey</p>
      <div className="app-start-journey">
        <RouteSelector
          routeType={"start"}
          route={StartRoute}
          enableEndjourney={enableEndjourney}
          setEnableEndjourney={setEnableEndjourney}
          setStartStation={setStartStation}
          handleStartClick={handleStartClick}
        />
      </div>
      <div className="app-end-journey">
        <RouteSelector
          routeType={"end"}
          route={EndRoute}
          filterStation={startStation}
          handleEndClick={handleEndClick}
        />
      </div>
      <FareDetails
        startStation={startStation}
        endStation={endStation}
        enableEndjourney={enableEndjourney}
        fare={fare}
        setFare={setFare}
      />
    </div>
  );
};

export default App;
