import styles from "../A11y.module.css";

const data = {
  heading: "Keyboard Accessibility",
  keyboardA11yDescription:
    "Keyboard accessibility ensures that all functionality is reachable without a mouse — using only the keyboard. This is essential for users with motor or visual disabilities who rely on Tab to navigate and screen readers to understand focused elements.",
  keyboardNavigation: {
    subheading: "Keyboard Navigation",
    items: [
      {
        button: "Tab",
        action: "move to next focusable element",
      },
      {
        button: "Shift + Tab",
        action: "move to previous focusable element",
      },
      {
        button: "Enter",
        action: "activate links and buttons",
      },
      {
        button: "Space",
        action: "activate buttons and checkboxes",
      },
      {
        button: "Escape",
        action: "close modals and dropdowns",
      },
    ],
  },
  keyboardNavigationExample: [
    {
      title: "requires extra keyboard handling",
      example: `❌ Non-semantic — requires extra 
    keyboard handling
              
<div 
  role="button"
  tabIndex={0}
  onKeyDown={(e) => 
    e.key === "Enter" 
    && handleClick()}>
    Click me
</div>`,
    },
    {
      title: "correct keyboard work",
      example: `

✅ Semantic — keyboard works 
    out of the box

<button 
  onClick={handleClick}>
    Click me
</button>`,
    },
  ],
  focusManagement: {
    subheading: "Focus Management",
    description:
      "Focus management ensures that when a modal or dialog opens, focus moves into it and cannot escape to background elements — this is called a focus trap. When the dialog closes, focus returns to the element that triggered it.",
  },
};

const KeyboardAccessibility = () => {
  return (
    <section>
      <h2>{data.heading}</h2>
      <p className={styles.keyboardAccessibility}>
        {data.keyboardA11yDescription}
      </p>
      <h3>{data.keyboardNavigation.subheading}</h3>
      <ul className={styles.keyboardNavigation}>
        {data.keyboardNavigation.items.map((item) => (
          <li key={item.button}>
            <code>{item.button}</code> — {item.action}
          </li>
        ))}
      </ul>
      <div className={styles.keyboardNavigationExample}>
        {data.keyboardNavigationExample.map((example) => (
          <div key={example.title} className={styles.greyBackground}>
            <pre>
              <code>{example.example}</code>
            </pre>
          </div>
        ))}
      </div>

      <h3>{data.focusManagement.subheading}</h3>
      <p className={styles.focusManagement}>
        {data.focusManagement.description}
      </p>

      <pre
        className={`${styles.greyBackground} ${styles.focusManagementExample}`}
      >
        <code>{`// When modal opens — 
    move focus into it
modalRef.current.focus();

// When modal closes — 
    return focus to trigger
triggerButton.current.focus();

// Focus trap — 
    keep Tab inside modal
<dialog 
  ref={modalRef}>
  <button>Action</button>
  <button 
    onClick={closeModal}>
      Close
  </button>
</dialog>`}</code>
      </pre>
      <p className={styles.importantRule}>
        The native <code>&lt;dialog&gt;</code> element handles focus trap
        automatically — no extra JavaScript needed.
      </p>
    </section>
  );
};

export default KeyboardAccessibility;
