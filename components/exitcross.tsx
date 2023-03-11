import { useState, useRef, useEffect  } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/MobileBars.module.css'

function ExitCross(props) {
  const router = useRouter();
  const [isLinkClicked, setIsLinkClicked] = useState(false);
  function handleClick(event) {
    event.preventDefault();
    setIsLinkClicked(true);
    const elements = document.getElementsByClassName(`${props.slideClass}`)
    elements[props.index].classList.add(`${styles.slideDown}`)
    elements[props.index].classList.remove(`${styles.slideUp}`)
    const elements2 = document.getElementsByClassName(`${props.wrapper}`)
    elements2[0].classList.add(`${styles.wrapperSlideDown}`);
    elements2[0].classList.remove(`${styles.wrapperSlideUp}`);
  }
  return (
    <Link href="">
      <a onClick={handleClick} className={styles.adisable}>
        <p className={styles.crossText}>&#x2715;</p>
      </a>
    </Link>
  );
}

export default ExitCross