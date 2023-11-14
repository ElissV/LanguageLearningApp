import styles from "./styles.module.scss";

export function ShiningButton() {
    return (
        <div className={styles.ButtonContainer}>
            <a className={styles.StartNowLink}>
                Start Now
                <div className={styles.Shine}></div>
            </a>
        </div>
    );
}