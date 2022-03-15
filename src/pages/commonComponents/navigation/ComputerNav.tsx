import { Hidden, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import BurgerIcon from "@mui/icons-material/MenuOutlined";
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
                <BurgerIcon onClick={() => setBurgerStatus(true)} className={useThemeClasses(c.burger, c.burgerDark)} />
                <Link to='/forClients'>
                    <img className={c.mobileTriangle} src={triangle} alt='triangle' />
                </Link>
            </Hidden>
        </div>
    </Toolbar>
};