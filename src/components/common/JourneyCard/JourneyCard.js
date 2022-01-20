import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./journeycard.scss";
const JourneyCard = (props) => {
  const {
    index,
    stationName,
    routeType,
    setEnableEndjourney,
    setStartStation,
    filterStation,
  } = props;

  const [endStation, setendStation] = useState("");

  useEffect(() => {
    return () => {
      setendStation(filterStation);
    };
  }, []);
  const handleClick = (stationName) => {
    setEnableEndjourney(true);
    setStartStation(stationName);
    console.log(`${stationName}`);
  };
  return (
    <div
      index={index}
      onClick={() => handleClick(stationName)}
      className={`${routeType}`}
    >
      <Card
        body
        color="primary"
        outline
        className="journey"
        inverse={routeType === "end"}
      >
        <CardBody className="journey-cardBody">
          <CardTitle tag="h5">{stationName}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default JourneyCard;
