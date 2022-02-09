import { SwipeableDrawer } from "@mui/material";

type Props = {
    burgerStatus: boolean
    setBurgerStatus: (status: boolean) => void
}

export const PhoneNav: React.FC<Props> = ({burgerStatus, setBurgerStatus}) => {
    return <SwipeableDrawer anchor="top" open={burgerStatus} onClose={() => setBurgerStatus(false)} onOpen={() => setBurgerStatus(true)}>
        <div>Abobaaadsasdasdasdasdasfaf</div>
    </SwipeableDrawer>
};