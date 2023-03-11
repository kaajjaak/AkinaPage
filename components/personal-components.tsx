import styles from '../styles/DesktopBars.module.css'
import Bar from './templates'

export default function DesktopBar(props) {
    return (
        <Bar alt={props.alt} className={styles.bar} image={props.image} imageStyle={styles.image} title={props.title}
             left={props.left} content={props.content} type={props.type} top={props.top} topStyle={styles.top}
             bottomStyle={styles.bottom} titleStyle={styles.title}></Bar>);
}