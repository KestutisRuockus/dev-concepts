import styles from "../A11y.module.css";

const data = {
  heading: "Why use semantics over non-semantics",
  items: [
    {
      title: "A11y",
      description: "screen readers understand the purpose of each element",
    },
    {
      title: "SEO",
      description: "search engines better understand page structure",
    },
    {
      title: "Keyboard",
      description: "native keyboard support without extra code",
    },
  ],
};

const SemanticReasons = () => {
  return (
    <section>
      <h2>{data.heading}</h2>
      <p className={styles.semanticOverNonSemantics}>
        Semantic elements improve accessibility because screen readers
        understand their purpose — a <code>&lt;nav&gt;</code> is announced as
        navigation, a <code>&lt;button&gt;</code> is announced as a button. They
        also improve SEO because search engines better understand page
        structure. Additionally, semantic elements are natively keyboard
        accessible — <code>&lt;button&gt;</code> and <code>&lt;a&gt;</code> work
        with Tab and Enter by default, unlike <code>&lt;div&gt;</code>.
      </p>

      <ul className={styles.semanticReasons}>
        {data.items.map((item) => (
          <li key={item.title}>
            <b>{item.title}</b> — {item.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SemanticReasons;
