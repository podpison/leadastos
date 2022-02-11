import { Hidden, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/MenuOutlined";
import logoLight from "./../../../static/images/logoLight.png";
import c from "./navigation.module.scss";
import "./navigation.scss";
import triangle from "./../../../static/images/triangle.png";
import { NavLinks } from "./NavLinks";

type Props = {
    setBurgerStatus: (status: boolean) => void
}

export const ComputerNav: React.FC<Props> = ({ setBurgerStatus }) => {
    return <Toolbar>
        <div className={c.computerMainContainer}>
            <Link to='/' className={c.logoContainer}>
                <img src={logoLight} alt='logo' />
            </Link>
            <Hidden mdDown>
                <NavLinks mainContainerClassName={c.navContainer} />
            </Hidden>
            <Hidden mdUp>
                <div className={c.burgerContainer} onClick={() => setBurgerStatus(true)}>
                    <MenuIcon className={c.burger} />
                </div>
                <img className={c.mobileTriangle} src={triangle} alt='triangle' />
            </Hidden>
        </div>
    </Toolbar>
};