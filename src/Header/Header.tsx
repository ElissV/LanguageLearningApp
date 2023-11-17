import Button from '@mui/material/Button';
import styles from './styles.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import { useState } from 'react';
import { ShiningButton } from '../common/components/ShiningButton/ShiningButton';
import { ThemeSwitch } from '../common/components/ThemeSwitch/ThemeSwitch';
import { ProfileLink } from '../common/components/ProfileLink/ProfileLink';

function Header() {
    let [showDropdown, setShowDropdown] = useState(false);

    return (
        <>
            <header className={styles.Header}>
                <div className={styles.BigScreenView}>
                    <a className={styles.LogoContainer} href="#">
                        <div className={styles.Logo}></div>
                    </a>
                    <div className={styles.ButtonContainer}>
                        <ShiningButton />
                    </div>
                    <div className={styles.SettingsContainer}>
                        <ThemeSwitch />
                        <ProfileLink />
                    </div>
                </div>

                <div className={styles.SmallScreenView}>
                    <a className={styles.LogoContainer} href="#">
                        <div className={styles.Logo}></div>
                    </a>
                    <Button
                        className={styles.NavMenu}
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        <MenuIcon className={styles.MenuIcon} />
                    </Button>
                </div>
            </header>
            {showDropdown && <DropdownMenu />}
        </>
    );
}

export default Header;