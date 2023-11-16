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
                <a className={styles.Logo} href="#"></a>
                <ShiningButton />
                <div>
                    <ThemeSwitch />
                    <ProfileLink />
                </div>
                
                <Button
                    className={styles.NavMenu}
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    <MenuIcon className={styles.MenuIcon} />
                </Button>
            </header>
            {showDropdown && <DropdownMenu />}
        </>
    );
}

export default Header;