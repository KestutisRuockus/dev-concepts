import styles from "../A11y.module.css";

const data = {
  heading: "Mostly used aria attributes",
  items: [
    {
      attr: "aria-label",
      description:
        "Provides an accessible name when no visible text is present",
      example: `<button
  aria-label="Close modal">
    x
</button>`,
    },
    {
      attr: "aria-hidden",
      description:
        "Hides element from screen readers — used for decorative icons",
      example: `<span 
  aria-hidden="true">
    🎨
</span>`,
    },
    {
      attr: "aria-expanded",
      description: "Indicates whether a collapsible element is open or closed",
      example: `<button 
  aria-expanded="false">
    Menu
</button>`,
    },
    {
      attr: "aria-required",
      description:
        "Indicates that a form field must be filled before submitting",
      example: `<input 
  aria-required="true" 
/>`,
    },
    {
      attr: "aria-describedby",
      description:
        "References another element that provides additional description",
      example: `<input 
  aria-describedby="hint"
/>
<p 
  id="hint">
    Must be at least 8 characters
</p>`,
    },
    {
      attr: "role",
      description:
        "Defines the purpose of an element when semantic HTML is not used",
      example: `<div 
  role="button" 
  tabIndex={0}>
    Click me
</div>`,
    },
  ],
};

const AriaAttributes = () => {
  return (
    <section>
      <h2>{data.heading}</h2>
      <ul className={styles.ariaAttrs}>
        {data.items.map((item) => (
          <li key={item.attr}>
            <code>{item.attr}</code>
            <p>{item.description}</p>
            <pre className={styles.greyBackground}>
              <code>{item.example}</code>
            </pre>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AriaAttributes;
