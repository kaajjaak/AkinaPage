import styles from '../styles/Unsupported.module.css'

function Unsupported() {
    return (
        <p className={styles.unsupportedText}>Your screen size is currently not supported!<br/>Please consider
            flipping your device!</p>
        );
}

export default Unsupported
