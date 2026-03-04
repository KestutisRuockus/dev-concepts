import React from "react";
import { useRouter } from "./RouterContext";

const Route = ({ path, component: Component }) => {
  const { currentPath } = useRouter();

  if (currentPath !== path) return null;

  return React.createElement(Component);
};

export default Route;
