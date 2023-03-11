import Link from 'next/link';
import styles from '../styles/MobileBars.module.css'
import React from "react";

interface Props {
    index: number;
    slideClass: string;
    pageButton: string;
    hidePhone: string;
    text: string;
}

function SlideButton(props: Props) {

    function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent> | undefined) {
        event?.preventDefault();
        const elements2 = document.getElementsByClassName(`${styles.bar}`)
        console.log(document.getElementsByClassName(`${styles.bar}`))
        elements2[props.index].classList.add(`${styles.slideUp}`);
        elements2[props.index].classList.remove(`${styles.slideDown}`);
        const elements = document.getElementsByClassName(`${props.slideClass}`)
        console.log(document.getElementsByClassName(`${props.slideClass}`))
        elements[0].classList.add(`${styles.wrapperSlideUp}`);
        elements[0].classList.remove(`${styles.wrapperSlideDown}`);
    }

    return (
        <Link href="">
            <a onClick={handleClick} className={`${props.pageButton} ${props.hidePhone}`}>
                {props.text}
            </a>
        </Link>
    );
}

export default SlideButton