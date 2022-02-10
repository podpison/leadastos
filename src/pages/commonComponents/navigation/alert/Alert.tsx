import { AlertTitle } from "@mui/material";
import MUIAlert from "@mui/material/Alert";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { customerActions } from "../../../../redux/customerReducer";
import c from "./alert.module.scss";

type Props = {
    operationStatus: boolean | null
}

export const Alert: React.FC<Props> = ({ operationStatus }) => {
    const dispatch = useDispatch();
    // useEffect(() => {
    //     setTimeout(() => dispatch(customerActions.changeOperationStatus(null)), 10000);
    // }, [dispatch, operationStatus]);
    return operationStatus == true
        ? <MUIAlert className={c.alert} security='success'>
            <AlertTitle>Success!</AlertTitle>
            The operation completed successfully!
        </MUIAlert>
        : <MUIAlert className={c.alert} severity="error">
            <AlertTitle>Error!</AlertTitle>
            An error was received during the operation!
        </MUIAlert>
};