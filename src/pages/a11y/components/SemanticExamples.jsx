import styles from "../A11y.module.css";
const data = {
  heading: "Example of semantic and div soup",
};

const SemanticExamples = () => {
  return (
    <section>
      <h2>{data.heading}</h2>
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
  );
};

export default SemanticExamples;
