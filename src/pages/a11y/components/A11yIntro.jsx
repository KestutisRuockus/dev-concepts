import styles from "../A11y.module.css";

const data = {
  heading: "A11y",
  paragraphs: [
    {
      title: "making web applications usable",
      content:
        "Accessibility (a11y) is the practice of making web applications usable by as many people as possible — including those with visual, motor, hearing, or cognitive disabilities.",
    },
    {
      title: "assistive technologies",
      content:
        "It ensures that assistive technologies like screen readers can navigate and understand your content, and that all functionality is reachable via keyboard, not just a mouse.",
    },
  ],
};

const A11yIntro = () => {
  return (
    <section>
      <h1>{data.heading}</h1>
      <div className={styles.intro}>
        {data.paragraphs.map((paragraph) => (
          <p key={paragraph.title}>{paragraph.content}</p>
        ))}
      </div>
    </section>
  );
};

export default A11yIntro;
