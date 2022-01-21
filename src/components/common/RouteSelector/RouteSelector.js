import JourneyCard from "../JourneyCard/JourneyCard";

const RouteSelector = (props) => {
  const {
    route,
    routeType,
    setEnableEndjourney,
    setStartStation,
    filterStation,
    handleStartClick,
    handleEndClick,
  } = props;
  return (
    <>
      {route.length &&
        route.map((item, index) => (
          <JourneyCard
            key={index}
            routeType={routeType}
            stationName={item.name}
            handleStartClick={handleStartClick}
            handleEndClick={handleEndClick}
            setEnableEndjourney={setEnableEndjourney}
            setStartStation={setStartStation}
            filterStation={filterStation}
          />
        ))}
    </>
  );
};

export default RouteSelector;
