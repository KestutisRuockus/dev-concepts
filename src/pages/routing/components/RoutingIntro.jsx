import styles from "../Routing.module.css";

const data = {
  heading: "Routing",
  paragraphs: [
    {
      title: "Routing determines",
      content:
        "Routing determines what content to display based on the current URL. When you type a URL or click a navigation link, the browser maps that address to specific content — each URL has its own page or view.",
    },
    {
      title: "Traditionally",
      content:
        "Traditionally, every URL triggered a full page reload from the server (MPA). In modern SPAs, JavaScript handles routing on the client side — the URL changes, but the page never reloads.",
    },
  ],
};

const RoutingIntro = () => {
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

export default RoutingIntro;
