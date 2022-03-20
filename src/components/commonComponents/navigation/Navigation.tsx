import { AppBar } from "@mui/material";
import { useState } from "react";
import { ComputerNav } from "./ComputerNav";
import { PhoneNav } from "./PhoneNav";
import c from "./navigation.module.scss";
import { Alert } from "./alert/Alert";
import { useTheme } from "../../../static/hooks/useTheme";
import { useSelector } from "react-redux";
import { getAlertInformationSelector } from "../../../redux/selectors";

export const Navigation: React.FC = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const {useThemeClasses} = useTheme();
    let { isOpen } = useSelector(getAlertInformationSelector);

    return <>
        <AppBar position='relative' className={useThemeClasses(c.appBar, c.appBarDark, c.appBarLight)}>
            <ComputerNav setBurgerStatus={setBurgerStatus} />
            <PhoneNav burgerStatus={burgerStatus} setBurgerStatus={setBurgerStatus} />
        </AppBar>
        {isOpen !== null && <Alert />}
    </>
};