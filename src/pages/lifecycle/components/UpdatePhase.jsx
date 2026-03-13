import styles from "../Lifecycle.module.css";

const data = {
  heading: "Update phase",
  description: {
    one: "The update phase happens when a component re-renders. This is triggered by a state change, a prop change, or a parent component re-rendering.",
    two: " with dependencies runs after every render where at least one of the dependencies has changed. React compares each dependency using, ",
    three: "  — if the value is the same, the effect is skipped.",
  },
  strong: {
    hook: "useEffect ",
    object: "Object.is()",
  },
  example: `useEffect(() => {
  console.log('userId changed, fetching...')
  fetch("/api/user/" + userId)
    .then(res => res.json())
    .then(data => setUser(data))
}, [userId]) // only re-runs when userId changes`,
};

const UpdatePhase = () => {
  return (
    <section>
      <h2>{data.heading}</h2>
      <div className={styles.description}>
        <p style={{ marginBottom: 16 }}>{data.description.one}</p>
        <p>
          <code className={styles.code}>{data.strong.hook}</code>
          {data.description.two}
          <code className={styles.code}>{data.strong.object}</code>
          {data.description.three}
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

export default UpdatePhase;
