import DynamicRoutes from "./components/DynamicRoutes";
import NavigationGuard from "./components/NavigationGuard";
import NotFound from "./components/NotFound";
import PushState from "./components/PushState";
import QueryParams from "./components/QueryParams";
import RouteTracking from "./components/RouteTracking";
import RoutingIntro from "./components/RoutingIntro";

const Routing = () => {
  return (
    <main>
      <RoutingIntro />
      <PushState />
      <RouteTracking />
      <DynamicRoutes />
      <QueryParams />
      <NotFound />
      <NavigationGuard />
    </main>
  );
};

export default Routing;
