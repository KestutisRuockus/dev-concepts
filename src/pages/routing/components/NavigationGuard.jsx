import styles from "../Routing.module.css";

const data = {
  heading: "Navigation guard",
  description:
    "A navigation guard is a check that runs before rendering a route. It determines whether the user is allowed to access a specific page — if not, it redirects them elsewhere. Most commonly used to protect routes that require authentication: if the user is not logged in, they get redirected to the login page instead of seeing protected content.",
  example: `const ProtectedRoute = ({ component: Component }) => {
  const isLoggedIn = false; // check auth state

  if (!isLoggedIn) {
    navigate("/login");
    return null;
  }

  return <Component />;
};

// Usage:
<ProtectedRoute path="/dashboard" component={Dashboard} />`,
  exampleDescription: {
    if: "If ",
    status: "isLoggedIn",
    text: " is false — user gets redirected to ",
    route: "/login",
    text1: " and sees nothing. If true — component renders normally. ",
  },
};

const NavigationGuard = () => {
  return (
    <section>
      <h2>{data.heading}</h2>
      <p className={styles.description}>{data.description}</p>
      <div className={`${styles.example} ${styles.greyBackground}`}>
        <pre>
          <code className={styles.code}>{data.example}</code>
        </pre>
        <p style={{ marginTop: 16 }}>
          {data.exampleDescription.if}
          <code className={styles.code}>{data.exampleDescription.status}</code>
          {data.exampleDescription.text}
          <code className={styles.code}>{data.exampleDescription.route}</code>
        </p>
        <p>{data.exampleDescription.text1}</p>
      </div>
    </section>
  );
};

export default NavigationGuard;
