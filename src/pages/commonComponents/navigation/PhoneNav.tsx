import { SwipeableDrawer } from "@mui/material";
import c from "./navigation.module.scss";
import { NavLinks } from "./NavLinks";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
    burgerStatus: boolean
    setBurgerStatus: (status: boolean) => void
}

export const PhoneNav: React.FC<Props> = ({ burgerStatus, setBurgerStatus }) => {
    const closeBurger = () => setBurgerStatus(false);
    const openBurger = () => setBurgerStatus(true);
    return <SwipeableDrawer className={c.swipeableDrawer} anchor="left" open={burgerStatus} onClose={closeBurger} onOpen={openBurger}>
        <NavLinks closeBurger={closeBurger} mainContainerClassName={c.mobileMainContainer} />
        <CloseIcon onClick={closeBurger} className={c.closeIcon} />
    </SwipeableDrawer>
};