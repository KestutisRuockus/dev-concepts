import styles from "../Routing.module.css";

const data = {
  heading: "Dynamic routes",
  descriptionStar:
    "Dynamic routes are URL patterns that contain variable segments. Instead of a fixed path like ",
  descriptionMid0:
    ", a dynamic route matches multiple URLs using a parameter — for example ",
  descriptionMid1: " matches ",
  descriptionEnd:
    " part is extracted and used to display the correct content for that specific URL.",
  example: `// Route definition
<Route path="/concepts/:id" component={ConceptPage} />

// Examples of matching URLs:
 /concepts/pushstate  → shows pushState concept
 /concepts/popstate   → shows popState concept
 /concepts/routing    → shows routing concept`,
};

const DynamicRoutes = () => {
  return (
    <section>
      <h2>{data.heading}</h2>
      <div className={styles.description}>
        <p>
          {data.descriptionStar}
          <code className={styles.code}>/concept</code>
          {data.descriptionMid0}
          <code className={styles.code}>/concept/:id</code>
          {data.descriptionMid1}
          <code className={styles.code}>
            /concepts/1, /concepts/2, /concepts/routing
          </code>
          {". "}
          <code className={styles.code}>:id</code>
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

export default DynamicRoutes;
