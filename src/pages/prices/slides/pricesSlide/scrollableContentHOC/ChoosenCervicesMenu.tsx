import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { customerActions } from "../../../../../redux/customerReducer";
import { getServicesYouPayForSelector } from "../../../../../redux/selectors";
import { ServiceYouPayFor } from "../../../../forClients/slides/forClientsSlide/ServiceYouPayFor";
import c from "./scrollableContentHOC.module.scss";

export const ChoosenCervicesMenu: React.FC = () => {
    const dispatch = useDispatch();
    let servicesYouPayFor = useSelector(getServicesYouPayForSelector).map((s, index) => <ServiceYouPayFor {...s} key={index} />);
    
    const resetButtonHandler = () => dispatch(customerActions.deleteAllServicesForPaying());
    return <div className={c.choosenCervicesMenu}>
        <div>
            {servicesYouPayFor}
        </div>
        <div>
            <Link to='/forClients'>
                <Button>Save</Button>
            </Link>
            <Button onClick={resetButtonHandler}>Reset</Button>
        </div>
    </div>
};