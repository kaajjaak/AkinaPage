import React from 'react';
import Link from 'next/link';
import styles from '../styles/MobileBars.module.css'

interface Props {
    index: number;
    slideClass: string;
    wrapper: string;

}

function ExitCross(props : Props) {

    function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent> | undefined): void {
        event?.preventDefault()
        const elements = document.getElementsByClassName(`${props.slideClass}`)
        elements[props.index].classList.add(`${styles.slideDown}`)
        elements[props.index].classList.remove(`${styles.slideUp}`)
        const elements2 = document.getElementsByClassName(`${props.wrapper}`)
        elements2[0].classList.add(`${styles.wrapperSlideDown}`);
        elements2[0].classList.remove(`${styles.wrapperSlideUp}`);
    }

    return (
        <Link href="">
            <a href="#" onClick={(e) => handleClick(e)}>
                <p className={styles.crossText}>&#x2715;</p>
            </a>
        </Link>
    );
}

export default ExitCross