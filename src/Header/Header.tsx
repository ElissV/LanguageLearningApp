import Button from '@mui/material/Button';
import styles from './Header.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import { useState } from 'react';

function Header() {
    let [showDropdown, setShowDropdown] = useState(false);

    return (
        <>
            <header className={styles.Header}>
                <a className={styles.Logo} href="#"></a>
                <Button onClick={() => setShowDropdown(!showDropdown)}>
                    <MenuIcon className={styles.MenuIcon} />
                </Button>
            </header>
            {showDropdown && <DropdownMenu />}
        </>
    );
}

export default Header;