import { useState } from "react";
import "./App.scss";
import RouteSelector from "./components/common/RouteSelector/RouteSelector";

const App = () => {
  const [enableEndjourney, setEnableEndjourney] = useState(false);
  const [startStation, setStartStation] = useState("");
  const StartRoute = [
    { id: "1", name: "Holborn", zone: "1" },
    { id: "2", name: "Earl’s Court", zone: "2" },
    { id: "3", name: "Wimbledon", zone: "3" },
    { id: "4", name: "Hammersmith", zone: "4" },
  ];
  const EndRoute = [
    { id: "5", name: "Holborn", zone: "1" },
    { id: "6", name: "Earl’s Court", zone: "2" },
    { id: "7", name: "Wimbledon", zone: "3" },
    { id: "8", name: "Hammersmith", zone: "4" },
  ];
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
        />
      </div>
      {startStation && (
        <p>{`state : ${enableEndjourney} Start station : ${startStation}`}</p>
      )}
      <div className="app-end-journey">
        <RouteSelector
          routeType={"end"}
          route={EndRoute}
          startStation={startStation}
          filterStation={startStation}
        />
      </div>
    </div>
  );
};

export default App;
