import styles from '../styles/MobileBars.module.css'
import Image from 'next/image'
import {generateContent, SelectContent} from '../utils/GenerateContent'
import ExitCross from '../components/exitcross'

export default function MobileBar(props) {
    return (
        <div className={styles.bar}>
            <div></div>
            <div className={styles.barTop}>
                <h2 className={`${styles.title} ${props.borderless ? styles.borderless : ""}`}>{props.title}</h2>
                <ExitCross wrapper={props.slideClass} index={props.index} slideClass={styles.bar}/>
            </div>
            <SelectContent type={props.type} content={props.content} mobile={true}/>
            <div className={styles.overlayColour}>
                <Image alt={props.alt} src={props.src} layout="responsive" objectFit="cover" className={styles.roundImage} priority/>
            </div>
        </div>
    );
}