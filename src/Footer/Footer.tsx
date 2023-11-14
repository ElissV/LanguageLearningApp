import { ShiningButton } from "../common/components/ShiningButton/ShiningButton";
import styles from "./styles.module.scss";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.TeddyBear}></div>
            <ShiningButton />
            <div className={styles.SocialMediaContainer}>
                <a>
                    <TwitterIcon />
                </a>
                <a>
                    <FacebookIcon />
                </a>
                <a>
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    );
}