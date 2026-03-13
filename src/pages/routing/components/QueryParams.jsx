import styles from "../Routing.module.css";

const data = {
  heading: "Query params",
  descriptionStart: "Query params are key-value pairs in the URL after the ",
  descriptionEnd:
    " symbol. They pass additional data without changing the route — commonly used for search, filtering, or pagination.",
  example: `/concepts?search=routing
/concepts?category=hooks&sort=asc`,
  example2: `// URL: /concepts?search=routing&category=hooks

const params = new URLSearchParams(window.location.search);

params.get("search");    // → "routing"
params.get("category");  // → "hooks"
params.get("sort");      // → null`,
  exampleOfNull: {
    code: ".get()",
    return: " return ",
    null: "null",
    text: " if the key does not exist in the URL.",
  },
};

const QueryParams = () => {
  return (
    <section>
      <h2>{data.heading}</h2>
      <div className={styles.description}>
        <p>
          {data.descriptionStart}
          <code className={styles.code}>?</code>
          {data.descriptionEnd}
        </p>
      </div>
      <div className={`${styles.example} ${styles.greyBackground}`}>
        <pre>
          <code className={styles.code}>{data.example}</code>
        </pre>
      </div>
      <div className={`${styles.example} ${styles.greyBackground}`}>
        <pre>
          <code className={styles.code}>{data.example2}</code>
        </pre>
        <p style={{ marginTop: 16 }}>
          <code className={styles.code}>{data.exampleOfNull.code}</code>
          {data.exampleOfNull.return}
          <code className={styles.code}>{data.exampleOfNull.null}</code>
          {data.exampleOfNull.text}
        </p>
      </div>
    </section>
  );
};

export default QueryParams;
