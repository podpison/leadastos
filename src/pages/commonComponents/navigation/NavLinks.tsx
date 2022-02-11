import moon from "./../../../static/images/themeMoon.png";
import sun from "./../../../static/images/themeSun.png";
import { useState } from "react";
import "./navigation.scss";
import c from "./navigation.module.scss";
import { Switch } from "@mui/material";
import { Link } from "react-router-dom";
import triangle from "./../../../static/images/triangle.png";

type Props = {
    mainContainerClassName: string
    closeBurger?: () => void
}

export const NavLinks: React.FC<Props> = ({mainContainerClassName, closeBurger}) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const setNewTheme = () => {
        if (theme === 'light') setTheme('dark');
        if (theme === 'dark') setTheme('light');
    };
    return <div className={`${mainContainerClassName} ${c.navLinksContainer}`}>
        <Switch checked={theme === 'light'} onClick={setNewTheme} className={`navigation__themeChooserContainer ${theme === 'dark' && 'navigation__themeChooserContainerDark'}`} checkedIcon={<img src={sun} alt='' />} icon={<img src={moon} alt='moon' />} />
        <Link onClick={closeBurger} className={c.home} to='/'>Home</Link>
        <Link onClick={closeBurger} to='/about'>About</Link>
        <Link onClick={closeBurger} to='/works'>Works</Link>
        <Link onClick={closeBurger} to='/prices'>Prices</Link>
        <Link onClick={closeBurger} to='/forClients'>For clients</Link>
        <Link onClick={closeBurger} to='/contacts'>Contacts</Link>
        <a className={c.phone} href='tel: +1 (647)-563-9114'>+1 (647)-563-9114</a>
        <div onClick={closeBurger} className={c.startAProjectSign}>
            <p className={c.sign}>Start a project</p>
            <img className={c.triangle} src={triangle} alt='triangle' />
        </div>
    </div>
};