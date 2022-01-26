import Link from "next/link";
import styles from "../styles/NavbarButton.module.scss";

const NavbarButton = ({ href, name, icon }) => {
  return (
    <Link href={href}>
      <a className={styles.navIcon}>
        <img src={icon} />
        <span>{name}</span>
      </a>
    </Link>
  )
}

export default NavbarButton;