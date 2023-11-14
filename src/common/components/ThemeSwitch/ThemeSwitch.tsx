import Switch from '@mui/material/Switch';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import styles from "./styles.module.scss";

export function ThemeSwitch() {
    return (
        <>
            <div className={styles.MainContainer}>
                <LightModeIcon />
                <Switch />
                <ModeNightIcon />
            </div>
        </>
    );
}