import styles from "../Lifecycle.module.css";

const data = {
  heading: "useMemo & useCallback",
  description: {
    intro:
      "During the update phase, every re-render recreates all values and functions inside the component. This is usually fine — but sometimes it causes unnecessary work or breaks optimizations.",
    useMemo:
      " caches a computed value and only recalculates it when the dependencies change.",
    useCallback:
      " caches a function reference and only recreates it when the dependencies change. This is useful when passing callbacks to child components wrapped in ",
  },
  strong: {
    useMemo: "useMemo",
    useCallback: {
      useCallback: "useCallback",
      reactMemo: "React.memo",
    },
  },
  examples: {
    useMemo: `const total = useMemo(() => {
  return items.reduce((acc, item) => acc + item.price, 0)
}, [items])`,
    useCallback: `const handleClick = useCallback(() => {
  doSomething(id)
}, [id])`,
  },
};

const MemoCallback = () => {
  return (
    <section>
      <h2>{data.heading}</h2>
      <div className={styles.description}>
        <p>{data.description.intro}</p>
      </div>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>{data.strong.useMemo}</code>
          {data.description.useMemo}
        </p>
        <div className={`${styles.example} ${styles.greyBackground}`}>
          <pre>
            <code className={styles.code}>{data.examples.useMemo}</code>
          </pre>
        </div>
      </div>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>
            {data.strong.useCallback.useCallback}
          </code>
          {data.description.useCallback}
          <code className={styles.code}>
            {data.strong.useCallback.reactMemo}
          </code>
        </p>
        <div className={`${styles.example} ${styles.greyBackground}`}>
          <pre>
            <code className={styles.code}>{data.examples.useCallback}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default MemoCallback;
