import { ShiningButton } from '../../common/components/ShiningButton/ShiningButton';
import styles from './DropdownMenu.module.scss';

function DropdownMenu() {
    return (
        <nav className={styles.Menu}>
            <a className={styles.NavLink}>
                Profile
            </a>
            <a className={styles.NavLink}>
                Start Now
            </a>
            <div>
                Theme Switch
            </div>
            <div className={styles.ShiningButtonContainer}>
                <ShiningButton />
            </div>
        </nav>
    );
}

export default DropdownMenu;