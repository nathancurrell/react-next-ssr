import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from "../components/Header"
import Waves from "../components/Waves.js"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ryan Brian Jones | Freelance Web Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}> 
        <img src="/logo.png" className={styles.hero_ryan} />   
        {/* <div> */}
          <h1 className={styles.title}>FREELANCE WEB<br/>DEVELOPER</h1>
          <div className={styles.navigation_buttons}>
            <button>ABOUT</button>
            <span> | </span>
            {/* <button>PORTFOLIO</button> */}
            <button>WHY US</button>
            <span> | </span>
            <button>CONTACT</button>
          </div>
        {/* </div> */}
      </main>
      <Waves/>
      
      <div className={styles.main_body}>
        <div className={styles.main_content}>
          <h2>ABOUT</h2>
          <div className={styles.h2_underline} />
          <div className={styles.about_section}>
            <div className={styles.text}>
              <p>
                Spicy jalapeno kielbasa flank aliquip, sed commodo ribeye id et prosciutto ham ut pig pork. Proident in brisket beef sunt corned beef. Fatback quis nulla pork chop sirloin enim cillum magna short ribs. Aute chicken buffalo duis cupidatat est proident doner short loin fugiat kielbasa consequat biltong incididunt.
              </p>
              <p>
                Chicken pastrami ea anim. Consectetur ball tip ullamco ham hock. Drumstick shank t-bone, aliqua tenderloin boudin ex. Enim ipsum sed, brisket cupim shank sunt qui ex sint laborum. Picanha tongue spare ribs, leberkas nisi deserunt pastrami. Deserunt eu jowl andouille, qui elit nostrud in porchetta ribeye doner et turducken.
              </p>
              <p>
                Duis shank proident alcatra, short ribs short loin ad dolore. Fatback kevin corned beef esse shankle lorem, consequat anim nisi mollit jowl boudin porchetta aliqua. Prosciutto velit pork belly, ground round andouille dolor ullamco kielbasa pork rump eu aliqua jowl nulla meatball. Picanha pork belly cow incididunt quis, laborum sunt.
              </p>
            </div>
            <div className={styles.image}>
              <img width="500" src="/me.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
