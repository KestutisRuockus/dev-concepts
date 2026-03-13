import styles from "../Lifecycle.module.css";

const data = {
  heading: "Mount phase",
  content: {
    zero: "Mounting is the first phase of a component's lifecycle — it happens when the component is added to the DOM for the first time.",
    one: "In functional components, ",
    two: " with an empty dependency array ",
    three: " is the equivalent of ",
    four: " — it runs once, after the initial render.",
  },
  strong: {
    hook: "useEffect",
    list: "[]",
    phase: "componentDidMount ",
  },
  example: `useEffect(() => {
  fetch('/api/user')
    .then(res => res.json())
    .then(data => setUser(data))
}, [])`,
};

const MountPhase = () => {
  return (
    <section>
      <h1>{data.heading}</h1>
      <div className={styles.description}>
        <p style={{ marginBottom: 16 }}>{data.content.zero}</p>
        <p>
          {data.content.one}{" "}
          <code className={styles.code}>{data.strong.hook}</code>
          {data.content.two}
          <code className={styles.code}>{data.strong.list}</code>
          {data.content.three}
          <code className={styles.code}>{data.strong.phase}</code>
          {data.content.four}
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

export default MountPhase;
