import { PricesItemType } from "../../../../../redux/staticReducer";
import { customerActions } from "../../../../../redux/customerReducer";
import { GoTo } from "../../../../commonComponents/goTo/GoTo";
import c from "./scrollableContentHOC.module.scss";
import { useTheme } from "./../../../../../static/hooks/useTheme";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface Props extends PricesItemType {
    isChooserModeActive: boolean
} 

export const Item: React.FC<Props> = ({serviceName, description, price, isChooserModeActive}) => {
    const { useThemeClasses } = useTheme();

    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(false);
    const checkboxClickHandler = () => {
        dispatch(customerActions.addNewServiceForPaying({name: serviceName, price}));
        setIsChecked(!isChecked);
    }

    return <div className={c.itemContainer}>
        <div className={c.imgAndGoToContainer}>
            <div className={c.imgAndGoToContainer2}>
                <p className={c.serviceName}>{serviceName}</p>
                <GoTo variant="startProject" className={useThemeClasses(c.goTo, c.goToDark, c.goToLight)} />
            </div>
        </div>
        <div className={c.informationContainer}>
            <p className={c.serviceName}>{serviceName}</p>
            <p className={c.description}>{description}</p>
            <div className={c.priceAndCheckbox}>
                <p className={c.price}>{price} $</p>
                {isChooserModeActive && <FormGroup><FormControlLabel onClick={checkboxClickHandler} checked={isChecked} label='add this service to the list' control={<Checkbox />} /></FormGroup>}
            </div>
        </div>
    </div>
};