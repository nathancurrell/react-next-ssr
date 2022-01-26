import styles from "../styles/Page.module.scss";
import Navbar from "./Navbar";

const Page = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className="fixed-bg"></div>
      <Navbar />
      <div className={styles.contentWrapper}>
        {children}
      </div>
    </div>
  );
}

export default Page;