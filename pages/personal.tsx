import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Personal.module.css'
import unsupported from '../styles/Unsupported.module.css'
import DesktopBar from '../components/personal-components'
import image1 from '../images/anime-girl-pc.png'
import image2 from '../images/anime-girl-book.png'
import image3 from '../images/personal-mobile-select.png'
import image4 from '../images/anime-girl-guitar.png'
import image5 from '../images/anime-girl-book-frame.png'
import HomeIcon from '../components/homeicon'
import SlideButton from '../components/slidebutton'
import MobileBar from '../components/mobilebars'
import Unsupported from "../components/unsupported";


const about_me = {
    Pronouns: "She/Her",
    "LGBTQIA+": "agender, asexual & pancurious",
    Hobbies: "programming, music & factorio",
    "Diagnosed with": "ADHD, ASD & DCD",
    "Fun Fact": "I am a certified cutie!"
}
const favourite_books = {
    "L'&Eacute;tranger": "Albert Camus",
    "Klara and the Sun": "Kazuo Ishiguro",
    "Permanent Record": "Edward Snowden",
    "The Song of Achilles": "Madline Miller",
    "The Metamorphosis": "Franz Kafka"
}


const Personal: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Akina</title>
                <meta name="description" content="A pink website!"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preload" href="../images/personal-desktop-back.png" as="image"/>
                <link rel="preload" href="../images/personal-mobile-back.png" as="image"/>
                <link rel="preload" href="../images/horizontal-phone-overlay.png" as="image"/>
            </Head>
            <div className={styles.bgimg}>
                <main className={`${styles.main} ${unsupported.main}`}>
                    <Unsupported />
                    <HomeIcon iconStyle={styles.homeIcon} desktop={true}/>
                    <div className={styles.desktopBars}>
                        <DesktopBar edged={false} alt="girl in front of computer" image={image1} title="About Me"
                                    left={false} content={about_me} type="normal" top={true}/>
                        <DesktopBar edged={false} alt="girl in holding a book" image={image2} title="Favourite Books"
                                    left={true} content={favourite_books} top={false} type="numbered"/>
                    </div>
                    <HomeIcon iconStyle={`${styles.homeArrow} ${styles.hidePhone}`} desktop={false}/>
                    <div className={styles.wrapper}>
                        <div className={`${styles.selectImg} ${styles.hidePhone}`}>
                            <Image src={image3} alt="rainbow themed girl" height="256" width="256" layout="responsive"
                                   objectFit="cover"/>
                        </div>
                        <SlideButton slideClass={styles.wrapper} pageButton={styles.pageButton}
                                     hidePhone={styles.hidePhone} index={0} text="About Me"/>
                        <SlideButton slideClass={styles.wrapper} pageButton={styles.pageButton}
                                     hidePhone={styles.hidePhone} index={1} text="Favourite Books"/>
                    </div>
                    <MobileBar borderless={false} slideClass={styles.wrapper} alt="girl playing the guitar in a cherry tree forrest"
                               index={0} content={about_me} src={image4} type="normal"
                               title="About Me"/>
                    <MobileBar borderless={false} slideClass={styles.wrapper} alt="girl reading a book looking at you" index={1}
                               content={favourite_books} type="numbered-italic"
                               src={image5} title="Favourite Books"/>
                </main>
            </div>
        </div>
    )
}

export default Personal