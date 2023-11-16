import styles from "./styles.module.scss";

export function ProfileLink() {
    return (
        <a className={styles.ProfileLink}>
            <div className={styles.ProfileLinkInnerContainer}>
                <div className={styles.Avatar}></div>
                <span className={styles.Label}>Edit Your Profile</span>
            </div>
        </a>
    );
}