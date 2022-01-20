import JourneyCard from "../JourneyCard/JourneyCard";

const RouteSelector = (props) => {
  const { route, routeType, enableEndjourney, setEnableEndjourney } = props;
  return (
    <>
      {route &&
        // routeType === "start" &&
        route.map((item) => (
          <JourneyCard
            index={item.id}
            routeType={routeType}
            stationName={item.name}
            setEnableEndjourney={setEnableEndjourney}
            enableEndjourney={enableEndjourney}
          />
        ))}
    </>
  );
};

export default RouteSelector;
