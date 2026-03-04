import { useRouter } from ".././router/RouterContext";
import styles from "./Nav.module.css";

const links = [
  { path: "/", label: "Home" },
  { path: "/routing", label: "Routing" },
  { path: "/a11y", label: "A11y" },
  { path: "/lifecycle", label: "Lifecycle" },
];

const Nav = () => {
  const { navigate, currentPath } = useRouter();
  return (
    <nav className={styles.nav}>
      {links.map((link) => (
        <a
          key={link.path}
          href={link.path}
          className={currentPath === link.path ? styles.active : ""}
          onClick={(e) => {
            e.preventDefault();
            navigate(link.path);
          }}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
