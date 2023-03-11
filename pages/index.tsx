import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Akina</title>
                <meta name="description" content="A pink website!"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preload" href="../images/mobile-back.png" as="image"/>
                <link rel="preload" href="../images/desktop-back.png" as="image"/>
                <link rel="preload" href="../images/horizontal-phone-overlay.png" as="image"/>
            </Head>
            <div className={styles.bgimg}>
                <p className={styles.unsupportedText}>Your current screen size is not supported!<br/>Please consider
                    flipping your device!</p>
                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Akina
                    </h1>
                    <div className={styles.pronouns}>
                        <p>She/Her</p>
                    </div>
                    <Link href="./personal">
                        <a className={styles.pageButton}>Personal</a>
                    </Link>
                    <Link href="./programming">
                        <a className={styles.pageButton}>Programming</a>
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default Home
