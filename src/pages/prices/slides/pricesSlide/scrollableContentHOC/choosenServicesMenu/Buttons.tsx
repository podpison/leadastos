import { useTheme } from "../../../../../../static/hooks/useTheme";
import { useDispatch } from "react-redux";
import { customerActions } from "../../../../../../redux/customerReducer";
import c from "./choosenServicesMenu.module.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
    closeModal?: () => void
}

export const Buttons: React.FC<Props> = ({closeModal}) => {
    const dispatch = useDispatch();
    const { useThemeClasses } = useTheme();
    const resetButtonHandler = () => dispatch(customerActions.deleteAllServicesForPaying());

    return <div className={useThemeClasses(c.buttons, c.buttonsDark, c.buttonsLight)}>
        <Link onClick={closeModal} to='/forClients'>
            <Button>Save</Button>
        </Link>
        <Button onClick={resetButtonHandler}>Reset</Button>
    </div>
};