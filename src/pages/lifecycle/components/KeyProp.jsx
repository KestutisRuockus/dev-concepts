import styles from "../Lifecycle.module.css";

const data = {
  heading: "Key prop",
  description: {
    one: "React uses the ",
    two: " prop to identify components in the tree. When a component's ",
    three:
      "changes, React does not update it — it destroys the old one and creates a brand new one from scratch. This means all state is reset and all effects re-run.",
    four: "This is different from a normal re-render. A re-render keeps the existing component instance and updates it. A ",
    five: " change is a full unmount and remount.",
    six: "The most common use case is lists — React needs a stable key to track which items changed, were added, or were removed.",
    seven: "But ",
    eight:
      " can also be used to intentionally reset a component's state without lifting it up.",
    nine: "A common real-world example — resetting a form when the user switches between records:",
  },
  strong: "key",
  examples: {
    one: `{users.map(user => (
  <UserCard key={user.id} user={user} />
))}`,
    two: `// every time userId changes, UserProfile fully resets
<UserProfile key={userId} />`,
    three: `<EditForm key={selectedId} initialData={selectedRecord} />
// switching selectedId gives you a clean form every time`,
  },
};

const KeyProp = () => {
  return (
    <section>
      <h2>{data.heading}</h2>
      <div className={styles.description}>
        <p>
          {data.description.one}
          <code className={styles.code}>{data.strong}</code>
          {data.description.two}
          <code className={styles.code}>{data.strong}</code>
          {data.description.three}
        </p>
        <p style={{ margin: "16px 0" }}>
          {data.description.four}
          <code className={styles.code}>{data.strong}</code>
          {data.description.five}
        </p>
        <p>{data.description.six}</p>
      </div>
      <div className={`${styles.example} ${styles.greyBackground}`}>
        <pre>
          <code className={styles.code}>{data.examples.one}</code>
        </pre>
      </div>
      <div className={styles.description}>
        <p>
          {data.description.seven}
          <code className={styles.code}>{data.strong}</code>
          {data.description.eight}
        </p>
      </div>
      <div className={`${styles.example} ${styles.greyBackground}`}>
        <pre>
          <code className={styles.code}>{data.examples.two}</code>
        </pre>
      </div>
      <div className={styles.description}>
        <p>{data.description.nine}</p>
      </div>
      <div className={`${styles.example} ${styles.greyBackground}`}>
        <pre>
          <code className={styles.code}>{data.examples.three}</code>
        </pre>
      </div>
    </section>
  );
};

export default KeyProp;
