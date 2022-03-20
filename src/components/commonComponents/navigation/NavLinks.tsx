import moon from "./../../../static/images/themeMoon.png";
import sun from "./../../../static/images/themeSun.png";
import "./navigation.scss";
import c from "./navigation.module.scss";
import { Switch } from "@mui/material";
import { NavLink as RouterDomNavLink, Link as RouterDomLink } from "react-router-dom";
import triangle from "./../../../static/images/triangle.png";
import { useTheme } from "../../../static/hooks/useTheme";

type Props = {
    mainContainerClassName: string
    closeBurger?: () => void
}

export const NavLinks: React.FC<Props> = ({mainContainerClassName, closeBurger}) => {
    const {theme, updateTheme, useThemeClasses} = useTheme();

    return <div className={useThemeClasses([mainContainerClassName, c.navLinksContainer], c.navLinksContainerDark, c.navLinksContainerLight)}>
        <Switch data-testid='themeChooser' checked={theme === 'light'} onClick={updateTheme} className={`navigation__themeChooserContainer ${theme === 'dark' && 'navigation__themeChooserContainerDark'}`} checkedIcon={<img src={sun} alt='' />} icon={<img src={moon} alt='moon' />} />
        <RouterDomNavLink className={({isActive}) => `${isActive ? c.activeLink : ''}  ${c.home}`} onClick={closeBurger} to='/'>Home</RouterDomNavLink>
        <RouterDomNavLink className={({isActive}) => isActive ? c.activeLink : ''} onClick={closeBurger} to='/about'>About</RouterDomNavLink>
        <RouterDomNavLink className={({isActive}) => isActive ? c.activeLink : ''} onClick={closeBurger} to='/works'>Works</RouterDomNavLink>
        <RouterDomNavLink className={({isActive}) => isActive ? c.activeLink : ''} onClick={closeBurger} to='/prices'>Prices</RouterDomNavLink>
        <RouterDomNavLink className={({isActive}) => isActive ? c.activeLink : ''} onClick={closeBurger} to='/forClients'>For clients</RouterDomNavLink>
        <RouterDomNavLink className={({isActive}) => isActive ? c.activeLink : ''} onClick={closeBurger} to='/contacts'>Contacts</RouterDomNavLink>
        <a className={c.phone} href='tel: +1 (647)-563-9114'>+1 (647)-563-9114</a>
        <RouterDomLink to='/forClients' onClick={closeBurger} className={c.startAProjectSign}>
            <p className={c.sign}>Start a project</p>
            <img className={c.triangle} src={triangle} alt='triangle' />
        </RouterDomLink>
    </div>
};