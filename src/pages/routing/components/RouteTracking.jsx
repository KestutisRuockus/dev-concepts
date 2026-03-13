import styles from "../Routing.module.css";

const data = {
  heading: "Route tracking",
  descriptionStart:
    "Route tracking keeps the current URL in sync with React state. When the URL changes — either through ",
  descriptionsMid: " (programmatic navigation) or ",
  descriptionEnd:
    " (browser back/forward buttons) — state updates and triggers a re-render, displaying the correct component for the current path.",
  example: `const [currentPath, setCurrentPath] = useState(window.location.pathname);

useEffect(() => {
  const handler = () => setCurrentPath(window.location.pathname);
  window.addEventListener("popstate", handler);
  return () => window.removeEventListener("popstate", handler);
}, []);

const navigate = (path) => {
  window.history.pushState({}, "", path);
  setCurrentPath(path);
};`,
};

const RouteTracking = () => {
  return (
    <section>
      <h2>{data.heading}</h2>
      <div className={styles.description}>
        <p>
          {data.descriptionStart}
          <code className={styles.code}>pushState</code>
          {data.descriptionsMid}
          <code className={styles.code}>popstate </code>
          {data.descriptionEnd}
        </p>
      </div>
      <div className={`${styles.example} ${styles.greyBackground}`}>
        <pre>
          <code className={styles.code}>{data.example}</code>
        </pre>
      </div>
    </section>
  );
};

export default RouteTracking;
