import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Programming.module.css'
import DesktopBar from '../components/programming-components'
import image1 from '../images/anime-girl-glasses.png'
import image2 from '../images/anime-girl-flower.png'
import image3 from '../images/programming-mobile-select.png'
import image4 from '../images/anime-girl-glasses-wide.png'
import image5 from '../images/anime-girl-flower-wide.png'
import Link from 'next/link'
import HomeIcon from '../components/homeicon'
import SlideButton from '../components/slidebutton'
import MobileBar from '../components/mobilebars'

const languages = {
  JS: "Node.js & React",
  Python: "Scikit-learn, Pandas & Selenium",
  "Web Dev": "HTML & CSS",
  Java: "JavaFX",
  "C#": ".NET Core & .NET Framework",
  C: "Data Structures & Algorithms"
 
}
const projects = {
  "Productivity Made Easy":
    {
      description: "Cross-Platform Activity Tracker with programmable usage limits made complete with custom REST API.",
      technology: {
        "Application": " .NET MAUI, API: Python FastAPI"
      }
    },
  "RoboTyper":
    {
      description: "Video game designed to teach touch typing skills to middle schoolers.",
      technology: {
        "Website": "HTML, CSS & JavaScript"
      }
    }
}


const Programming: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Akina</title>
        <meta name="description" content="A pink website!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="../images/programming-desktop-back.png" as="image"/>
        <link rel="preload" href="../images/programming-mobile-back.png" as="image"/>
      </Head>
        <div className={styles.bgimg}>
      <main className={styles.main}>
        <HomeIcon iconStyle={styles.homeIcon} desktop={true}/>
        <div className={styles.desktopBars}>
        <DesktopBar alt="girl with glasses" image={image1} title="Programming Languages and Frameworks:" left={false} content={languages} type="unordered" top={true} edged={true}/>
        <DesktopBar alt="girl in holding a book" image={image2} title="Projects:" left={true} content={projects} top={false} type="misc" edged={true}/>
        </div>
          <HomeIcon iconStyle={`${styles.homeArrow} ${styles.hidePhone}`} desktop={false} />
        <div className={styles.wrapper}>
        <div className={`${styles.selectImg} ${styles.hidePhone}`}>
          <Image src={image3} height="256" width="256" layout="responsive" objectFit="cover" />
        </div>
        <SlideButton slideClass={styles.wrapper} pageButton={styles.pageButton} hidePhone={styles.hidePhone} index={0} text="Skills"/>
        <SlideButton slideClass={styles.wrapper} pageButton={styles.pageButton} hidePhone={styles.hidePhone} index={1} text="Projects"/> 
        </div>
        <MobileBar borderless={true} slideClass={styles.wrapper} index={0} content={languages} src={image4} type="unordered" title="Programming Languages and Frameworks"/>
        <MobileBar borderless={true} slideClass={styles.wrapper} index={1} content={projects} type="misc" src={image5} title="Projects"/>
      </main>
      </div>
    </div>
  )
}

export default Programming
