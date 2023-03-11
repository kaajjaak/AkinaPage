import styles from '../styles/DesktopBars.module.css'
import Bar from './templates'
import {StaticImageData} from "next/image";
import React from "react";

interface Props {
    alt: string;
    image: StaticImageData;
    title: string;
    top: boolean;
    type: string;
    content: Object;
    left: boolean;
    edged: boolean;
}

export default function DesktopBar(props: Props) {
    return (
        <Bar alt={props.alt} className={styles.bar} image={props.image} title={props.title}
             left={props.left} content={props.content} type={props.type} top={props.top} topStyle={styles.top}
             bottomStyle={styles.bottom} titleStyle={styles.title2} edged={props.edged}></Bar>);
}