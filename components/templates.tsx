import styles from '../styles/DesktopBars.module.css'
import Image, {StaticImageData} from 'next/image'
import {SelectContent} from './GenerateContent'
import React from "react";

interface Props {
    className: string;
    top: boolean;
    topStyle: string;
    bottomStyle: string;
    edged: boolean;
    left: boolean;
    titleStyle: string;
    title: string;
    content: Object;
    type: string;
    alt: string;
    image: StaticImageData;
}

export default function Bar(props: Props) {
    return (<div className={styles.moveable}>
        <div
            className={`${props.className} ${props.top ? props.topStyle : props.bottomStyle} ${props.edged ? styles.edged : ""} ${props.left ? styles.reverse : ""}`}
            id={props.top ? styles.top : styles.bottom}>
            <div className={styles.details}>
                <h2 className={props.titleStyle}>{props.title}</h2>
                <SelectContent type={props.type} content={props.content}/>
            </div>
            <Image alt={props.alt} src={props.image} layout="responsive" objectFit="contain" height={1024}
                   width={1024}/>
        </div>
    </div>);
}
