import styles from "../A11y.module.css";
const data = {
  heading: "Semantic tag names",
  items: [
    {
      tag: "header",
      description:
        "Introductory content for the page or a section, typically contains logo, navigation or headings",
    },
    {
      tag: "nav",
      description: "A set of navigation links to other pages or sections",
    },
    {
      tag: "main",
      description: "The primary content of the page. Only one per page.",
    },
    {
      tag: "section",
      description: "A thematic grouping of content, usually with a heading",
    },
    {
      tag: "article",
      description:
        "Self-contained content that makes sense on its own, like a blog post or news card",
    },
    {
      tag: "aside",
      description:
        "Content indirectly related to the main content, like a sidebar",
    },
    {
      tag: "footer",
      description:
        "Closing content for the page or section, typically contains copyright or links",
    },
    {
      tag: "p",
      description: "A paragraph of text",
    },
    {
      tag: "strong",
      description: "Important text, screen readers may stress it",
    },
    {
      tag: "em",
      description: "Emphasized text, screen readers may change tone",
    },
  ],
};

const SemanticTagNames = () => {
  return (
    <section>
      <h2>{data.heading}</h2>
      <ul className={styles.semanticTagNames}>
        {data.items.map((item) => (
          <li key={item.tag}>
            <code>&lt;{item.tag}&gt;</code>
            <span>{item.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SemanticTagNames;
