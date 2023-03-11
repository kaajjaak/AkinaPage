import { useState, useRef, useEffect  } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/MobileBars.module.css'

function SlideButton(props) {
  const router = useRouter();
  const [isLinkClicked, setIsLinkClicked] = useState(false);
  function handleClick(event) {
    event.preventDefault();
    setIsLinkClicked(true);
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
      <a onClick={handleClick} className={`${props.pageButton} ${props.hidePhone}`} >
        {props.text}
      </a>
    </Link>
  );
}

export default SlideButton