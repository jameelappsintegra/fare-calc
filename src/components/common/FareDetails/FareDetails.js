import { useEffect } from "react";

const FareDetails = (props) => {
  const { startStation, endStation, enableEndjourney, fare, setFare } = props;
  useEffect(() => {
    setFare(fare);
  }, [fare]);
  return (
    <>
      <p>{`State : ${
        enableEndjourney === true ? "Station Entered" : "Not Entered"
      }  `}</p>
      <div>
        <strong>Start station</strong> :{` ${startStation && startStation}`}
      </div>
      <div>
        <strong>End Station</strong> :{` ${endStation && endStation}`}
      </div>
      <strong>Fare</strong> : {`${fare}`}
    </>
  );
};
export default FareDetails;
