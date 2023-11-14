import { ShiningButton } from '../../common/components/ShiningButton/ShiningButton';
import styles from './DropdownMenu.module.scss';

function DropdownMenu() {
    return (
        <nav className={styles.Menu}>
            <a className={styles.NavLink}>
                Profile
            </a>
            <div className={styles.ThemeSwitch}>
                Theme Switch
            </div>
            <div className={styles.ShiningButtonContainer}>
                <ShiningButton />
            </div>
        </nav>
    );
}

export default DropdownMenu;