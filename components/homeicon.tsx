import {useState} from 'react';
import {removeIdsFromWindow} from "../utils/RemoveIds";
import Link from 'next/link';
import {useRouter} from 'next/router';

function MyLink(props) {
    const router = useRouter();
    const [setIsLinkClicked] = useState(false);

    function handleClick(event) {
        event.preventDefault();
        setIsLinkClicked(true);
        if (!props.desktop) {
            return router.push('../');
        }
        removeIdsFromWindow();
        setTimeout(() => {
            setIsLinkClicked(false);
            router.push('../');// Navigate to the new page
        }, 2000); // Change 2000 to the number of milliseconds you want the delay to be
    }

    return (
        <Link href="../">
            <a onClick={handleClick}>
                {props.desktop ?
                    <svg className={props.iconStyle} width="144" height="135" viewBox="0 0 144 135" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M140.617 60.7547L119.096 39.2339V14.3738C119.096 9.87873 115.453 6.23585 110.951 6.23585C106.46 6.23585 102.818 9.87873 102.818 14.3738V22.956L86.7936 6.93152C78.8712 -0.986578 65.0968 -0.972533 57.1924 6.94585L3.38239 60.7547C0.205869 63.9376 0.205869 69.0876 3.38239 72.2656C6.56035 75.4475 11.7204 75.4475 14.8972 72.2656L68.7021 18.4552C70.4549 16.7116 73.5443 16.7116 75.2879 18.4501L129.102 72.2656C130.698 73.8567 132.778 74.6481 134.858 74.6481C136.942 74.6481 139.026 73.8558 140.617 72.2656C143.794 69.0879 143.794 63.9379 140.617 60.7547Z"
                            fill="#F8C8DC" stroke="#F8C8DC" strokeWidth="1.61486"/>
                        <path
                            d="M74.8267 33.903C73.2634 32.3406 70.7321 32.3406 69.1733 33.903L21.8419 81.2205C21.0946 81.9675 20.671 82.9873 20.671 84.0516V118.563C20.671 126.662 27.2373 133.228 35.3354 133.228H58.7692V96.9363H85.2256V133.228H108.66C116.758 133.228 123.324 126.662 123.324 118.563V84.0516C123.324 82.9873 122.904 81.9675 122.153 81.2205L74.8267 33.903Z"
                            fill="#F8C8DC" stroke="#F8C8DC" strokeWidth="1.61486"/>
                    </svg> : <svg className={props.iconStyle} width="138" height="118" viewBox="0 0 138 118" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                        <path d="M58.3055 114L4.83325 59M4.83325 59L58.3055 4M4.83325 59H133.167" stroke="white"
                              strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>}
            </a>
        </Link>
    );
}

export default MyLink