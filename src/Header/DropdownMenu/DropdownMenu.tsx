import { ProfileLink } from '../../common/components/ProfileLink/ProfileLink';
import { ShiningButton } from '../../common/components/ShiningButton/ShiningButton';
import { ThemeSwitch } from '../../common/components/ThemeSwitch/ThemeSwitch';
import styles from './DropdownMenu.module.scss';

function DropdownMenu() {
    return (
        <nav className={styles.Menu}>
            <div className={styles.NavLink}>
                <ProfileLink />
            </div>
            <div className={styles.ThemeSwitch}>
                <ThemeSwitch />
            </div>
            <div className={styles.ShiningButtonContainer}>
                <ShiningButton />
            </div>
        </nav>
    );
}

export default DropdownMenu;