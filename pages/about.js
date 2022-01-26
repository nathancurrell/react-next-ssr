import { Gitgraph, templateExtend, TemplateName } from "@gitgraph/react";
import Link from "next/link";
import Page from "../components/Page";
import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <Page>
      <div className={styles.container}>  
        <h1 className={styles.title}>About me</h1>
        <div className={styles.content}>
          <div className={styles.left}>
            <p>I enjoy keeping up to date with the latest software development trends, and using cutting edge technologies to create highly performant websites and applications that live on the web or on mobile devices.</p>
            <p>I am experienced in frontend and backend development, writing test suites, and using SQL to query databases.</p>
            <p>The projects I develop are hosted on DigitalOcean droplets, or serverlessly on AWS depending on the needs of the project.</p>
            <p>Recently I've been working with the following technologies:</p>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>React Native</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>SQL</li>
              <li>HTML & (S)CSS</li>
              <li>Vue.js</li>
              <li>WordPress</li>
              <li>Ember</li>
            </ul>
            <p>Outside of work I love competing in game jams (such as <a target="_blank" rel="noopener noreferrer" href="https://ldjam.com/events/ludum-dare/46/plantlings">Ludum Dare</a>), watching movies, drawing (including <Link href="/logo.png"><a target="_blank" rel="noopener noreferrer">my logo</a></Link>), and learning to play the <a target="_blank" rel="noopener noreferrer" href="https://th.static-thomann.de/thumb/orig/pics/bdb/323239/7502647_800.jpg">ocarina</a></p>
          </div>
          <div className={styles.right}>
            <div className={styles.rightContent}>
              <p className={styles.timelineTitle}>Timeline</p>
              <Gitgraph options={{
                template: templateExtend(TemplateName.Metro, {
                  colors: ['#fbeb6e', '#eb5fbd', '#399fdb'],
                  commit: {
                    message: {
                      displayHash: false,
                      displayAuthor: false,
                    }
                  },
                  branch: {
                    label: {
                      display: false,
                    }
                  }
                }),
                orientation: "vertical-reverse"
              }}>
                {(gitgraph) => {
                  const education = gitgraph.branch("Eduction");

                  education.commit({
                    subject: "BSc (Hons) Software Engineering",
                    // body: "Liverpool John Moores University",
                  })
                          .tag({
                            name: "2014 - 2018",
                            style: {
                              color: '#1c1b1fe6'
                            }
                          })
                          
                  education.commit("");

                  const master = education.branch("Employment");

                  master.commit("We Are Nova")
                        .tag("2016 - 2018")

                  const freelance = master.branch("Freelance");
                  freelance.commit("Part-time freelance")
                          .tag("2017 - 2020")

                  education.commit("");

                  master.commit("RentalStep")
                        .tag("2018 - 2019")

                  master.commit("Monterosa")
                        .tag("2019 - 2020")

                  master.commit("PropertyCloud")
                        .tag("2020 - 2020")

                  freelance.commit("Full-time freelance")
                          .tag("2020 - Now")
                }}
              </Gitgraph>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default About;