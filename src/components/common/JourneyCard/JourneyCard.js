import { Card, CardBody, CardTitle } from "reactstrap";
import "./journeycard.scss";
const JourneyCard = (props) => {
  const {
    index,
    stationName,
    routeType,
    setEnableEndjourney,
    enableEndjourney,
  } = props;
  const handleClick = (stationName) => {
    setEnableEndjourney(true);
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
