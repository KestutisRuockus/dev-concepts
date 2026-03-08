import styles from "../A11y.module.css";

const data = {
  heading: "Aria - Accessible Rich Internet Applications",
  firstRule:
    "The first rule of ARIA: if you can use a native HTML element, use it. No ARIA is better than bad ARIA",
};

const AriaIntro = () => {
  return (
    <section>
      <h2>{data.heading}</h2>
      <p className={styles.aria}>
        ARIA (Accessible Rich Internet Applications) attributes provide
        additional semantic information to assistive technologies like screen
        readers. They are used when native HTML semantics aren't enough — for
        example when building custom components with non-semantic elements like{" "}
        <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>.
      </p>
      <p className={styles.importantRule}>{data.firstRule}</p>
    </section>
  );
};

export default AriaIntro;
