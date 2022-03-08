import { AppBar } from "@mui/material";
import { useState } from "react";
import { ComputerNav } from "./ComputerNav";
import { PhoneNav } from "./PhoneNav";
import c from "./navigation.module.scss";
import { useSelector } from "react-redux";
import { getOperationStatusSelector } from "./../../../redux/selectors";
import { Alert } from "./alert/Alert";
import { useTheme } from "../../../static/hooks/useTheme";

export const Navigation: React.FC = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
    let operationStatus = useSelector(getOperationStatusSelector);
    const {useThemeClasses} = useTheme();

    return <>
        <AppBar position='relative' className={useThemeClasses(c.appBar, c.appBarDark, c.appBarLight)}>
            <ComputerNav setBurgerStatus={setBurgerStatus} />
            <PhoneNav burgerStatus={burgerStatus} setBurgerStatus={setBurgerStatus} />
        </AppBar>
        {operationStatus === null ? null : <Alert operationStatus={operationStatus} /> }
    </>
};