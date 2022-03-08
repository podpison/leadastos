import { Hidden, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/MenuOutlined";
import c from "./navigation.module.scss";
import "./navigation.scss";
import triangle from "./../../../static/images/triangle.png";
import { NavLinks } from "./NavLinks";
import { useTheme } from "../../../static/hooks/useTheme";

type Props = {
    setBurgerStatus: (status: boolean) => void
}

export const ComputerNav: React.FC<Props> = ({ setBurgerStatus }) => {
    const {useThemeClasses} = useTheme();
    return <Toolbar>
        <div className={c.computerMainContainer}>
            <Link to='/' className={c.logoContainer}>
                <div className={useThemeClasses(c.logo, c.logoDark, c.logoLight)} />
            </Link>
            <Hidden mdDown>
                <NavLinks mainContainerClassName={c.navContainer} />
            </Hidden>
            <Hidden mdUp>
                <div className={c.burgerContainer} onClick={() => setBurgerStatus(true)}>
                    <MenuIcon className={useThemeClasses(c.burger, c.burgerDark)} />
                </div>
                <img className={c.mobileTriangle} src={triangle} alt='triangle' />
            </Hidden>
        </div>
    </Toolbar>
};