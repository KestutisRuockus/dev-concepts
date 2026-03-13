import styles from "../Lifecycle.module.css";

const data = {
  heading: "Cleanup phase",
  description: {
    one: "The cleanup phase runs when a component unmounts, or before the effect re-runs on the next update. It is the return function inside ",
    two: "Cleanup is important to prevent memory leaks — if you add an event listener, start a timer, or make a fetch request, you need to undo that when the component is gone.",
  },
  strong: "useEffect",
  examples: [
    {
      subHeading: "Event Listener",
      code: `useEffect(() => {
  window.addEventListener('resize', handleResize)
  return () => {
    window.removeEventListener('resize', handleResize)
  }
}, [])`,
    },
    {
      subHeading: "Timer",
      code: `useEffect(() => {
  const id = setTimeout(() => {
    setMessage('done')
  }, 3000)
  return () => clearTimeout(id)
}, [])`,
    },
    {
      subHeading: "Fetch with AbortController",
      code: `useEffect(() => {
  const controller = new AbortController()
  fetch('/api/data', { signal: controller.signal })
    .then(res => res.json())
    .then(setData)
    .catch(err => {
      if (err.name !== 'AbortError') throw err
    })
  return () => controller.abort()
}, [userId])`,
    },
  ],
};

const CleanupPhase = () => {
  return (
    <section>
      <h2>{data.heading}</h2>
      <div className={styles.description}>
        <p>
          {data.description.one}
          <code className={styles.code}>{data.strong}</code>
        </p>
        <p>{data.description.two}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data.examples.map((example) => (
          <div
            key={example.subHeading}
            className={`${styles.example} ${styles.greyBackground}`}
          >
            <h3>{example.subHeading}</h3>
            <pre>
              <code className={styles.code}>{example.code}</code>
            </pre>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CleanupPhase;
