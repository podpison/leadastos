import { Checkbox as MuiCheckbox, FormGroup, FormControlLabel } from "@mui/material";
import { useTheme } from "./../../../../../static/hooks/useTheme";
import c from "./scrollableContentHOC.module.scss";
import { customerActions } from "../../../../../redux/customerReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getServicesYouPayForSelector } from "../../../../../redux/selectors";

type Props = {
    serviceName: string
    price: number
}

export const Checkbox: React.FC<Props> = ({serviceName, price}) => {
    let thisServiceInTheList = useSelector(getServicesYouPayForSelector).filter(s => s.name === serviceName);

    const { useThemeClasses } = useTheme();
    const [isChecked, setIsChecked] = useState(thisServiceInTheList.length !== 0);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsChecked(thisServiceInTheList.length !== 0);
    }, [thisServiceInTheList]);

    const checkboxClickHandler = () => {
        !isChecked ? dispatch(customerActions.addNewServiceForPaying({name: serviceName, price}))
        : dispatch(customerActions.deleteServiceForPaying({name: serviceName, price}));
        setIsChecked(!isChecked);
    }
    return <FormGroup className={useThemeClasses(c.checkbox, c.checkboxDark, c.checkboxLight)}><FormControlLabel onClick={checkboxClickHandler} checked={isChecked} label='add this service to the list' control={<MuiCheckbox />} /></FormGroup>
}