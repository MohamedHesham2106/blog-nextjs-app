import Logo from "./Logo";
import Link from "next/link";
import styles from "./MainNavigation.module.css";
import { useRouter } from "next/router";
const MainNavigation = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">
              <a className={router.pathname == "/posts" ? styles.active : ""}>
                Posts
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={router.pathname == "/contact" ? styles.active : ""}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
