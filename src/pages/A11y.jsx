import styles from "./A11y.module.css";

const A11y = () => {
  return (
    <>
      <section>
        <h1>A11y</h1>
        <div className={styles.intro}>
          <p>
            Accessibility (a11y) is the practice of making web applications
            usable by as many people as possible — including those with visual,
            motor, hearing, or cognitive disabilities.
          </p>
          <p>
            It ensures that assistive technologies like screen readers can
            navigate and understand your content, and that all functionality is
            reachable via keyboard, not just a mouse.
          </p>
        </div>
      </section>

      <section>
        <h2>Semantic tag names</h2>
        <ul className={styles.semanticTagNames}>
          <li>
            <code>&lt;header&gt;</code>
            <p>
              Introductory content for the page or a section, typically contains
              logo, navigation or headings
            </p>
          </li>
          <li>
            <code>&lt;nav&gt;</code>
            <p>A set of navigation links to other pages or sections</p>
          </li>
          <li>
            <code>&lt;main&gt;</code>
            <p>The primary content of the page. Only one per page.</p>
          </li>
          <li>
            <code>&lt;section&gt;</code>
            <p>A thematic grouping of content, usually with a heading</p>
          </li>
          <li>
            <code>&lt;article&gt;</code>
            <p>
              Self-contained content that makes sense on its own, like a blog
              post or news card
            </p>
          </li>

          <li>
            <code>&lt;aside&gt;</code>
            <p>
              Content indirectly related to the main content, like a sidebar
            </p>
          </li>
          <li>
            <code>&lt;footer&gt;</code>
            <p>
              Closing content for the page or section, typically contains
              copyright or links
            </p>
          </li>
          <li>
            <code>&lt;p&gt;</code>
            <p>A paragraph of text</p>
          </li>
          <li>
            <code>&lt;strong&gt;</code>
            <p>Important text, screen readers may stress it</p>
          </li>
          <li>
            <code>&lt;em&gt;</code>
            <p>Emphasized text, screen readers may change tone</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Why use semantics over non-semantics</h2>
        <p className={styles.semanticOverNonSemantics}>
          Semantic elements improve accessibility because screen readers
          understand their purpose — a <code>&lt;nav&gt;</code> is announced as
          navigation, a <code>&lt;button&gt;</code> is announced as a button.
          They also improve SEO because search engines better understand page
          structure. Additionally, semantic elements are natively keyboard
          accessible — <code>&lt;button&gt;</code> and <code>&lt;a&gt;</code>{" "}
          work with Tab and Enter by default, unlike <code>&lt;div&gt;</code>.
        </p>

        <ul className={styles.semanticReasons}>
          <li>
            <b>A11y</b> — screen readers understand the purpose of each element
          </li>
          <li>
            <b>SEO</b> — search engines better understand page structure
          </li>
          <li>
            <b>Keyboard</b> — native keyboard support without extra code
          </li>
        </ul>
      </section>

      <section>
        <h2>Example of semantic and div soup</h2>
        <div className={styles.semanticExamples}>
          <div>
            <h3>❌ Non-semantic </h3>
            <br />
            <pre>
              <code>
                {`<div>
  <div id="header">
    <div id="nav">
      <div>Home</div>
    </div>
  </div>
  <div id="main">
    <div class="article">
      <div>Title</div>
      <div>Content</div>
    </div>
  </div>
</div>`}
              </code>
            </pre>
          </div>
          <div>
            <h3>✅ Semantic</h3>
            <br />
            <pre>
              <code>
                {`<body>
  <header>
    <nav>
      <a>Home</a>
    </nav>
  </header>
  <main>
    <article>
      <h1>Title</h1>
      <p>Content</p>
    </article>
  </main>
</body>`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2>Aria - Accessible Rich Internet Applications</h2>
        <p className={styles.aria}>
          ARIA (Accessible Rich Internet Applications) attributes provide
          additional semantic information to assistive technologies like screen
          readers. They are used when native HTML semantics aren't enough — for
          example when building custom components with non-semantic elements
          like <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>.
        </p>
        <p className={styles.importantRule}>
          The first rule of ARIA: if you can use a native HTML element, use it.
          No ARIA is better than bad ARIA
        </p>
      </section>

      <section>
        <h2>Mostly used aria attributes</h2>
        <ul className={styles.ariaAttrs}>
          <li>
            <code>aria-label</code>
            <p>Provides an accessible name when no visible text is present</p>
            <pre className={styles.greyBackground}>
              <code>{`<button 
  aria-label="Close modal">
    ✕
</button>`}</code>
            </pre>
          </li>
          <li>
            <code>aria-hidden</code>
            <p>Hides element from screen readers — used for decorative icons</p>
            <pre className={styles.greyBackground}>
              <code>{`<span 
  aria-hidden="true">
    🎨
</span>`}</code>
            </pre>
          </li>

          <li>
            <code>aria-expanded</code>
            <p>Indicates whether a collapsible element is open or closed</p>
            <pre className={styles.greyBackground}>
              <code>{`<button 
  aria-expanded="false">
    Menu
</button>`}</code>
            </pre>
          </li>

          <li>
            <code>aria-required</code>
            <p>Indicates that a form field must be filled before submitting</p>
            <pre className={styles.greyBackground}>
              <code>{`<input 
  aria-required="true" 
/>`}</code>
            </pre>
          </li>

          <li>
            <code>aria-describedby</code>
            <p>
              References another element that provides additional description
            </p>
            <pre className={styles.greyBackground}>
              <code>{`<input 
  aria-describedby="hint"
/>
<p 
  id="hint">
    Must be at least 8 characters
</p>`}</code>
            </pre>
          </li>

          <li>
            <code>role</code>
            <p>
              Defines the purpose of an element when semantic HTML is not used
            </p>
            <pre className={styles.greyBackground}>
              <code>{`<div 
  role="button" 
  tabIndex={0}>
    Click me
</div>`}</code>
            </pre>
          </li>
        </ul>
      </section>

      <section>
        <h2>Keyboard Accessibility</h2>
        <p className={styles.keyboardAccessibility}>
          Keyboard accessibility ensures that all functionality is reachable
          without a mouse — using only the keyboard. This is essential for users
          with motor or visual disabilities who rely on Tab to navigate and
          screen readers to understand focused elements.
        </p>
        <h3>Keyboard Navigation</h3>
        <ul className={styles.keyboardNavigation}>
          <li>
            <code>Tab</code> — move to next focusable element
          </li>
          <li>
            <code>Shift + Tab</code> — move to previous focusable element
          </li>
          <li>
            <code>Enter</code> — activate links and buttons
          </li>
          <li>
            <code>Space</code> — activate buttons and checkboxes
          </li>
          <li>
            <code>Escape</code> — close modals and dropdowns
          </li>
        </ul>
        <div className={styles.keyboardNavigationExample}>
          <div className={styles.greyBackground}>
            <pre>
              <code>{`❌ Non-semantic — requires extra 
    keyboard handling
              
<div 
  role="button"
  tabIndex={0}
  onKeyDown={(e) => 
    e.key === "Enter" 
    && handleClick()}>
    Click me
</div>`}</code>
            </pre>
          </div>
          <div className={styles.greyBackground}>
            <pre>
              <code>{`

✅ Semantic — keyboard works 
    out of the box

<button onClick={handleClick}>
  Click me
</button>`}</code>
            </pre>
          </div>
        </div>
        <h3>Focus Management</h3>
        <p className={styles.focusManagement}>
          Focus management ensures that when a modal or dialog opens, focus
          moves into it and cannot escape to background elements — this is
          called a focus trap. When the dialog closes, focus returns to the
          element that triggered it.
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
    </>
  );
};

export default A11y;
