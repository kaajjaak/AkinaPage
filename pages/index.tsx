import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Akina Homepage</title>
                <meta name="description" content="A pink website!"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
                <meta name="theme-color" content="#FFE1E1" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#FFE1E1" />
                <link rel="preload" href="/mobile-back.png" as="image"/>
                <link rel="preload" href="/desktop-back.png" as="image"/>
                <link rel="preload" href="/horizontal-phone-overlay.png" as="image"/>
            </Head>
            <div className={styles.bgImg}>
                <main className={`${styles.main}`}>
                    {/*<main className={`${styles.main} ${unsupported.main}`}>*/}
                    {/*<Unsupported/>*/}
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
