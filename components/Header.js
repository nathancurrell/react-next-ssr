import React from 'react';
import Link from 'next/link'
import styles from '../styles/Header.module.scss';

class Header extends React.Component {
  render(){
    const hideTitle = this.props.hideTitle;
    return (
      <div className={styles.navbar}>
        <div className={styles.navbar_main}>
          {!hideTitle && (
            <span className={styles.header_font}>RYAN   BRIAN   JONES</span>
          )}
          <div className={styles.navbar_buttons}>
            <Link href="/blog">
              <a className={styles.navbar_butt}>BLOG</a>
              </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
