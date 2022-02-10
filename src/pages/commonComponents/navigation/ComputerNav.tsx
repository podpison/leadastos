import { Hidden, Switch, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/MenuOutlined";
import logoLight from "./../../../static/images/logoLight.png";
import moon from "./../../../static/images/themeMoon.png";
import sun from "./../../../static/images/themeSun.png";
import triangle from "./../../../static/images/triangle.png";
import c from "./navigation.module.scss";
import "./navigation.scss";
import { useState } from "react";

type Props = {
    setBurgerStatus: (status: boolean) => void
}

export const ComputerNav: React.FC<Props> = ({ setBurgerStatus }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const setNewTheme = () => {
        if (theme === 'light') setTheme('dark');
        if (theme === 'dark') setTheme('light');
    };
    return <Toolbar>
        <div className={c.computerMainContainer}>
            <Link to='/' className={c.logoContainer}>
                <img src={logoLight} alt='logo' />
            </Link>
            <Hidden mdDown>
                <div className={c.navContainer}>
                    <Switch checked={theme === 'light'} onClick={setNewTheme} className={`computerNav__themeChooserContainer ${theme === 'dark' && 'computerNav__themeChooserContainerDark'}`} checkedIcon={<img src={sun} alt='' />} icon={<img src={moon} alt='moon' />} />
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
            </Hidden>
            <Hidden mdUp>
                <div className={c.burgerContainer} onClick={() => setBurgerStatus(true)}>
                    <MenuIcon className={c.burger} />
                </div>
                <img src={triangle} alt='triangle' />
            </Hidden>
        </div>
    </Toolbar>
};