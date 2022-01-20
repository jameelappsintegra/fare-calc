import JourneyCard from "../JourneyCard/JourneyCard";

const RouteSelector = (props) => {
  const {
    route,
    routeType,
    setEnableEndjourney,
    setStartStation,
    filterStation,
  } = props;
  return (
    <>
      {route.length &&
        route.map((item) => (
          <JourneyCard
            index={item.id}
            routeType={routeType}
            stationName={item.name}
            setEnableEndjourney={setEnableEndjourney}
            setStartStation={setStartStation}
            filterStation={filterStation}
          />
        ))}
    </>
  );
};

export default RouteSelector;
