import { AlertTitle } from "@mui/material";
import MUIAlert from "@mui/material/Alert";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alertActions } from "../../../../redux/alertReducer";
import { getAlertInformationSelector } from "../../../../redux/selectors";
import c from "./alert.module.scss";

export const Alert: React.FC = () => {
    let { isOpen, severity, data} = useSelector(getAlertInformationSelector);

    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => dispatch(alertActions.closeAlert()), 10000);
    }, [dispatch, isOpen]);

    return <MUIAlert className={c.alert} severity={severity}>
        <AlertTitle>{data.title}</AlertTitle>
        {data.message}
    </MUIAlert>
};