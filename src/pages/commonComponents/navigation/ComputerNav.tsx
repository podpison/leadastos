import { Hidden, Switch, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/MenuOutlined";
import logoLight from "./../../../static/images/logoLight.png";
import moon from "./../../../static/images/themeMoon.png";
import sun from "./../../../static/images/themeSun.png";
import triangle from "./../../../static/images/triangle.png";
import c from "./navigation.module.scss";

type Props = {
    setBurgerStatus: (status: boolean) => void
}

export const ComputerNav: React.FC<Props> = ({setBurgerStatus}) => {
    return <Toolbar>
        <div className={c.computerMainContainer}>
            <div className={c.logoContainer}>
                <img src={logoLight} alt='logo' />
            </div>
            <Hidden smDown>
                <div className={c.navContainer}>
                    <Switch className={c.themeChooser} checkedIcon={<img src={sun} alt='' />} icon={<img src={moon} alt='moon' />} />
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/works'>Works</Link>
                    <Link to='/prices'>Prices</Link>
                    <Link to='/forClients'>For clients</Link>
                    <Link to='/contacts'>Contacts</Link>
                    <a href='tel: +1 (647)-563-9114'>+1 (647)-563-9114</a>
                    <div className={c.startAProjectSign}>
                        <p className={c.sign}>Start a project</p>
                        <img src={triangle} alt='triangle' />
                    </div>
                </div>
            </Hidden>
            <Hidden smUp>
                <div onClick={() => setBurgerStatus(true)}>
                    <MenuIcon />
                </div>
            </Hidden>
        </div>
    </Toolbar>
};