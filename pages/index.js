import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Page from '../components/Page';
import styles from '../styles/Homepage.module.scss';

const extraTitles = [
  'Freelancer',
  'Contractor',
  'Developer',
];

const title = 'Ryan Brian Jones';

const Title = () => <h1 aria-label="Ryan Brian Jones">Ryan Brian Jones</h1>;
const AnimatableTitle = () => {
  const splitTitle = title.split(" ");
  let currentLetterIndex = 0;
  return (
    <h1 aria-label="Ryan Brian Jones">
      {splitTitle.map((word, wordIndex) => {
        const letters = wordIndex === splitTitle.length - 1 ? word : `${word} `;
        return (
          <span className={styles.word} key={`word_${wordIndex}`}>
            {[...letters].map((letter, letterIndex) => (
              <span style={{ animationDelay: `${(currentLetterIndex++) * 100}ms` }} className={styles.letter} key={`letter_${currentLetterIndex}`}>{letter}</span>
            ))}
          </span>
        )
      })}
    </h1>
  )
};

const Homepage = ({  }) => {
  const [extraTitle, setExtraTitle] = useState({
    current: '', selectedIndex: -1, reverse: true, waitCycles: null,
  });
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setExtraTitle(prevValue => {
        let newValue = {...prevValue};

        if (!newValue.waitCycles) {
          if (prevValue.current.length <= 0) {
            newValue.reverse = true;
            newValue.selectedIndex = (prevValue.selectedIndex + 1) % extraTitles.length;
            newValue.waitCycles = 20;
          } else if (prevValue.current.length === ` ${extraTitles[prevValue.selectedIndex]}`.length) {
            newValue.reverse = false;
            newValue.waitCycles = 40;
          }
          
        }

        if (newValue.waitCycles) {
          newValue.waitCycles--;
        } 
        if (!newValue.waitCycles) {
          if (newValue.reverse) {
            newValue.current = ` ${extraTitles[newValue.selectedIndex]}`.substr(0, prevValue.current.length + 1);
          } else {
            newValue.current = prevValue.current.substr(0, prevValue.current.length - 1);
          }
        }
        return newValue;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <Page>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <div className={styles.titleWrapper}>
            {pageLoaded ? ( // so that crawlers get the title in just a h1
              <AnimatableTitle />
            ) : <Title />}
            <span className={styles.extraTitle}>{extraTitle.current}</span>
            <span className={styles.cursor}>_</span>
          </div>
          <p className={styles.bio}>Hi, I'm Ryan. A full-stack developer based in Liverpool.</p>
          <p className={styles.bio}>I make web apps and mobile apps, and host them serverlessly,</p>
          <p className={styles.bio}>ensuring they're reliable and cheap to run.</p>
          <div className={styles.buttonWrapper}>
            <Link href="/contact">
              <a className={styles.buttonPrimary}>Contact me</a>
            </Link>
            <Link href="/my-work">
              <a>My work</a>
            </Link>
          </div>
        </div>
        <div className={styles.logo}>
          <img src="/logo.png" width="550" />
          <div className={styles.logoLight}></div>
        </div>
      </div>
    </Page>
  );
}

export default Homepage;