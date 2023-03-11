import styles from '../styles/MobileBars.module.css'
import Image from 'next/image'
import {SelectContent} from './GenerateContent'
import ExitCross from '../components/exitcross'

interface Props {
    title: string;
    borderless: boolean;
    slideClass: string;
    index: number;
    type: string;
    content: Object;
    src: string;
    alt: string;
}
export default function MobileBar(props: Props) {
    return (
        <div className={styles.bar}>
            <div></div>
            <div className={styles.barTop}>
                <h2 className={`${styles.title} ${props.borderless ? styles.borderless : ""}`}>{props.title}</h2>
                <ExitCross wrapper={props.slideClass} index={props.index} slideClass={styles.bar}/>
            </div>
            <SelectContent type={props.type} content={props.content} mobile={true}/>
            <div className={styles.overlayColour}>
                <Image alt={props.alt} src={props.src} width={1568} height={896} layout="responsive" objectFit="cover" className={styles.roundImage} priority/>
            </div>
        </div>
    );
}