import { Hidden, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import BurgerIcon from "@mui/icons-material/MenuOutlined";
import c from "./navigation.module.scss";
import "./navigation.scss";
import triangle from "./../../../static/images/triangle.png";
import { NavLinks } from "./NavLinks";
import { useTheme } from "../../../static/hooks/useTheme";
import logoLight from "./../../../static/images/logoLight.png";
import logoDark from "./../../../static/images/logoDark.jpg";

type Props = {
    setBurgerStatus: (status: boolean) => void
}

export const ComputerNav: React.FC<Props> = ({ setBurgerStatus }) => {
    const { theme, useThemeClasses } = useTheme();
    return <Toolbar>
        <div className={c.computerMainContainer}>
            <Link to='/' className={c.logoContainer}>
                {theme === 'light' ? <img alt='logo' src={logoLight} /> : <img alt='logo' src={logoDark} />}
            </Link>
            <Hidden mdDown>
                <NavLinks mainContainerClassName={c.navContainer} />
            </Hidden>
            <Hidden mdUp>
                <BurgerIcon onClick={() => setBurgerStatus(true)} className={useThemeClasses(c.burger, c.burgerDark)} />
                <Link className={c.mobileTriangleContainer} to='/forClients'>
                    <img className={c.mobileTriangle} src={triangle} alt='triangle' />
                </Link>
            </Hidden>
        </div>
    </Toolbar>
};