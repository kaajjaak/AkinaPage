import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Programming.module.css'
import DesktopBar from '../components/programming-components'
// import image1 from '/anime-girl-glasses.png'
// import image2 from '/anime-girl-flower.png'
// import image3 from '/programming-mobile-select.png'
// import image4 from '/anime-girl-glasses-wide.png'
// import image5 from '/anime-girl-flower-wide.png'
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
                <title>Programming</title>
                <meta name="description" content="A pink website!"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
                <meta name="theme-color" content="#FFE1E1"  />
                <meta name="apple-mobile-web-app-status-bar-style" content="#FFE1E1" />
                <link rel="preload" href="/programming-desktop-back.png" as="image"/>
                <link rel="preload" href="/programming-mobile-back.png" as="image"/>
            </Head>
            <div className={styles.bgImg}>
                <main className={`${styles.main}`}>
                    {/*<main className={`${styles.main} ${unsupported.main}`}>*/}
                    {/*<Unsupported/>*/}
                    <HomeIcon iconStyle={styles.homeIcon} desktop={true}/>
                    <div className={styles.desktopBars}>
                        <DesktopBar alt="girl with glasses" image="/anime-girl-glasses.png" title="Programming Languages and Frameworks:"
                                    left={false} content={languages} type="unordered" top={true} edged={true}/>
                        <DesktopBar alt="girl in holding a book" image="/anime-girl-flower.png" title="Projects:" left={true}
                                    content={projects} top={false} type="misc" edged={true}/>
                    </div>
                    <HomeIcon iconStyle={`${styles.homeArrow} ${styles.hidePhone}`} desktop={false}/>
                    <div className={styles.wrapper}>
                        <div className={`${styles.selectImg} ${styles.hidePhone}`}>
                            <Image src="/programming-mobile-select.png" alt="girl in cafe looking at you" height="256" width="256" layout="responsive" objectFit="cover"/>
                        </div>
                        <SlideButton slideClass={styles.wrapper} pageButton={styles.pageButton}
                                     hidePhone={styles.hidePhone} index={0} text="Skills"/>
                        <SlideButton slideClass={styles.wrapper} pageButton={styles.pageButton}
                                     hidePhone={styles.hidePhone} index={1} text="Projects"/>
                    </div>
                    <MobileBar alt="close up of girl with glasses" borderless={true} slideClass={styles.wrapper} index={0} content={languages} src="/anime-girl-glasses-wide.png"
                               type="unordered" title="Programming Languages and Frameworks"/>
                    <MobileBar alt="close up of girl with plants in her hair" borderless={true} slideClass={styles.wrapper} index={1} content={projects} type="misc"
                               src="/anime-girl-flower-wide.png" title="Projects"/>
                </main>
            </div>
        </div>
    )
}

export default Programming
