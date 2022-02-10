import { SwipeableDrawer } from "@mui/material";
import moon from "./../../../static/images/themeMoon.png";
import sun from "./../../../static/images/themeSun.png";
import triangle from "./../../../static/images/triangle.png";
import c from "./navigation.module.scss";
import { Link } from "react-router-dom";
import { Switch } from "@mui/material";
import { useState } from "react";

type Props = {
    burgerStatus: boolean
    setBurgerStatus: (status: boolean) => void
}

export const PhoneNav: React.FC<Props> = ({ burgerStatus, setBurgerStatus }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const setNewTheme = () => {
        if (theme === 'light') setTheme('dark');
        if (theme === 'dark') setTheme('light');
    };
    return <SwipeableDrawer anchor="left" open={burgerStatus} onClose={() => setBurgerStatus(false)} onOpen={() => setBurgerStatus(true)}>
        <div className={c.mobileMainContainer}>
            <Switch checked={theme === 'light'} onClick={setNewTheme} className={`mobileNav__themeChooserContainer ${theme === 'dark' && 'computerNav__themeChooserContainerDark'}`} checkedIcon={<img src={sun} alt='' />} icon={<img src={moon} alt='moon' />} />
            <Link className={c.home} to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/works'>Works</Link>
            <Link to='/prices'>Prices</Link>
            <Link to='/forClients'>For clients</Link>
            <Link to='/contacts'>Contacts</Link>
            <a href='tel: +1 (647)-563-9114'>+1 (647)-563-9114</a>
            <div className={c.startAProjectSign}>
                <p className={c.sign}>Start a project</p>
                <img className={c.triangle} src={triangle} alt='triangle' />
            </div>
        </div>
    </SwipeableDrawer>
};