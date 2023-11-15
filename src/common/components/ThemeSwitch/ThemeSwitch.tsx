import Switch from '@mui/material/Switch';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import styles from "./styles.module.scss";
import { createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';

export function ThemeSwitch() {

    const [isLightThemeOn, setLightThemeOn] = useState(true);

    const theme = createTheme({
        components: {
            MuiSwitch: {
                styleOverrides: {
                    colorPrimary: {
                        "&.Mui-checked": {
                            color: "#fff",
                        }
                    },
                    track: {
                        backgroundColor: "#375705",
                        opacity: 0.6,
                        ".Mui-checked.Mui-checked + &": {
                          backgroundColor: "#375705",
                          opacity: 0.6
                        }
                    }
                }
            }
        }
    });

    return (
        <>
            <div className={styles.MainContainer}>
                <LightModeIcon className={isLightThemeOn ? styles.IsChosen : ''} />
                <ThemeProvider theme={theme}>
                    <Switch onChange={() => setLightThemeOn(!isLightThemeOn)} />
                </ThemeProvider>
                <ModeNightIcon className={isLightThemeOn ? '' : styles.IsChosen} />
            </div>
        </>
    );
}