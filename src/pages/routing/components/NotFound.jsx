import styles from "../Routing.module.css";

const data = {
  heading: "Not Found",
  description:
    "When a user navigates to a URL that doesn't match any defined route, the app should display a fallback — commonly known as a 404 page. Without it, unmatched routes render nothing, leaving the user with a blank screen. A catch-all route handles this by matching any path that wasn't caught by previous routes.",
  example: `<Route path="/" component={Home} />
<Route path="/concepts" component={Concepts} />
<Route path="*" component={NotFound} /> // catches everything else`,
};

const NotFound = () => {
  return (
    <section>
      <h2>{data.heading}</h2>
      <p className={styles.description}>{data.description}</p>
      <div className={`${styles.example} ${styles.greyBackground}`}>
        <pre>
          <code className={styles.code}>{data.example}</code>
        </pre>
      </div>
    </section>
  );
};

export default NotFound;
