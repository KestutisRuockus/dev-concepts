import styles from "../Lifecycle.module.css";

const data = {
  heading: "React Component Lifecycle",
  description: {
    lifecycle:
      "Every React component has a lifecycle — a series of phases it goes through from the moment it appears on the screen to the moment it disappears.",
    phases:
      "The lifecycle consists of three phases: mounting, updating, and unmounting.",
    didMount:
      "Mounting is when the component appears in the DOM for the first time. React runs the function, renders the output, and commits it to the DOM. In class components this was ",
    didUpdate:
      "Updating happens when state or props change. React re-runs the function and updates the DOM with the new output. In class components this was ",
    willUnmount:
      "Unmounting is when the component is removed from the DOM entirely. This is the place to cancel timers, remove event listeners, and clean up any side effects. In class components this was ",
    hook: "In functional components, all three phases are managed through ",
  },
  code: {
    didMount: "componentDidMount ",
    didUpdate: "componentDidUpdate",
    willUnmount: "componentWillUnmount",
    hook: "useEffect",
  },
};

const LifecycleIntro = () => {
  return (
    <section>
      <h1>{data.heading}</h1>
      <div className={styles.intro}>
        <p>{data.description.lifecycle}</p>
        <p>{data.description.phases}</p>
        <p>
          {data.description.didMount}
          <code className={styles.code}>{data.code.didMount}</code>
        </p>
        <p>
          {data.description.didUpdate}
          <code className={styles.code}>{data.code.didUpdate}</code>
        </p>
        <p>
          {data.description.willUnmount}
          <code className={styles.code}>{data.code.willUnmount}</code>
        </p>
        <p>
          {data.description.hook}
          <code className={styles.code}>{data.code.hook}</code>
        </p>
      </div>
    </section>
  );
};

export default LifecycleIntro;
