import { SwipeableDrawer } from "@mui/material";
import c from "./navigation.module.scss";
import { NavLinks } from "./NavLinks";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "./../../../static/hooks/useTheme";
import "./navigation.scss";

type Props = {
    burgerStatus: boolean
    setBurgerStatus: (status: boolean) => void
}

export const PhoneNav: React.FC<Props> = ({ burgerStatus, setBurgerStatus }) => {
    const closeBurger = () => setBurgerStatus(false);
    const openBurger = () => setBurgerStatus(true);
    const { useThemeClasses } = useTheme();
    return <SwipeableDrawer className={useThemeClasses('phoneNav_swipeableDrawer', 'phoneNav_swipeableDrawerDark')} anchor="left" open={burgerStatus} onClose={closeBurger} onOpen={openBurger}>
        <NavLinks closeBurger={closeBurger} mainContainerClassName={c.mobileMainContainer} />
        <CloseIcon onClick={closeBurger} className={c.closeIcon} />
    </SwipeableDrawer>
};