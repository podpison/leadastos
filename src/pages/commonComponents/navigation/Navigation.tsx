import { AppBar } from "@mui/material";
import { useState } from "react";
import { ComputerNav } from "./ComputerNav";
import { PhoneNav } from "./PhoneNav";
import c from "./navigation.module.scss";
import { useSelector } from "react-redux";
import { getOperationStatusSelector } from "./../../../redux/selectors";
import { Alert } from "./alert/Alert";

export const Navigation: React.FC = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
    let operationStatus = useSelector(getOperationStatusSelector);

    return <>
        <AppBar className={c.appBar}>
            <ComputerNav setBurgerStatus={setBurgerStatus} />
            <PhoneNav burgerStatus={burgerStatus} setBurgerStatus={setBurgerStatus} />
        </AppBar>

        {operationStatus === null ? null : <Alert operationStatus={operationStatus} /> }
    </>
};