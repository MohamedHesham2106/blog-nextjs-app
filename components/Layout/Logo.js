import styles from "./Logo.module.css";
import { HiCode } from "react-icons/hi";
const Logo = () => {
  return (
    <div className={styles.logo}>
      <HiCode className={styles.icon} />
      Mohamed&apos;s Blog
    </div>
  );
};

export default Logo;
