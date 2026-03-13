import { useRouter } from "./RouterContext";

const Route = ({ path, component }) => {
  const { currentPath } = useRouter();

  if (currentPath !== path) return null;
  const Component = component;

  return <Component />;
};

export default Route;
