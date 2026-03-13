import { useEffect, useState } from "react";
import { RouterContext } from "./RouterContext";

const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(() => {
    if (window.location.pathname) {
      window.history.replaceState({}, "", "/routing");
      return "/routing";
    }
    return window.location.pathname;
  });

  useEffect(() => {
    const pathHandler = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", pathHandler);
    return () => window.removeEventListener("popstate", pathHandler);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
