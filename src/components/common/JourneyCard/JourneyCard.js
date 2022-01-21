import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./journeycard.scss";
const JourneyCard = (props) => {
  const {
    index,
    stationName,
    routeType,
    filterStation,
    handleStartClick,
    handleEndClick,
  } = props;

  const [endStation, setendStation] = useState("");

  return (
    <div
      index={index}
      onClick={() =>
        routeType === "start"
          ? handleStartClick(stationName)
          : handleEndClick(stationName)
      }
      className={`${routeType}`}
    >
      <Card color="primary" outline className="journey">
        <CardBody className="journey-cardBody">
          <CardTitle tag="h5">{stationName}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default JourneyCard;
