import styles from '../styles/DesktopBars.module.css'
import Bar from './templates'

interface Props {
    alt: string;
    image: string;
    title: string;
    top: boolean;
    type: string;
    content: Object;
    edged: boolean;
    left: boolean
}
export default function DesktopBar(props: Props) {
    return (
        <Bar left={props.left} edged={props.edged} alt={props.alt} className={styles.bar} image={props.image} title={props.title}
             content={props.content} type={props.type} top={props.top} topStyle={styles.top}
             bottomStyle={styles.bottom} titleStyle={styles.title}></Bar>);
}