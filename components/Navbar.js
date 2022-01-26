import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';
import NavbarButton from './NavbarButton';

const Navbar = ({  }) => {
  return (
    <div className={styles.container}>
      <div>
        <Link href='/'>
          <a className={styles.navbarIcon}><img src='/logo.png' width='60' /></a>
        </Link>
      </div>
      <div className={styles.navIcons}>
        <NavbarButton
          href='/'
          icon='/home.png'
          name='Home'
        />
        <NavbarButton
          href='/about'
          icon='/about.png'
          name='About me'
        />
        <NavbarButton
          href='/my-work'
          icon='/my-work.png'
          name='My work'
        />
        <NavbarButton
          href='/blog'
          icon='/blog.png'
          name='Blog'
        />
        <NavbarButton
          href='/contact'
          icon='/contact.png'
          name='Contact me'
        />
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;