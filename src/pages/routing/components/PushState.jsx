import styles from "../Routing.module.css";

const data = {
  heading: "History.pushState",
  descriptionStart:
    " updates the URL in the browser without triggering a page reload. When a user clicks a link or navigates programmatically, ",
  descriptionEnd:
    " changes the address bar — but the page stays intact. React then detects the state change and renders the matching component.",
  coreMechanism:
    "This is the core mechanism behind SPA navigation — the URL looks like a traditional multi-page site, but JavaScript controls what is displayed.",
  example: `<button 
  onClick={() => 
    window.history.pushState({}, 
    "", 
    "/routing/demo")}>
  Click — watch the URL change
</button>`,
};

const PushState = () => {
  return (
    <section>
      <h2>{data.heading}</h2>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>history.pushState</code>
          {data.descriptionStart}
          <code className={styles.code}>pushState</code>
          {data.descriptionEnd}
        </p>
        <p>{data.coreMechanism}</p>
      </div>
      <div className={`${styles.example} ${styles.greyBackground}`}>
        <pre>
          <code className={styles.code}>{data.example}</code>
        </pre>
      </div>
    </section>
  );
};

export default PushState;
