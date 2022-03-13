import c from "./../../forClientsPage.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { customerActions, ServiceYouPayForType } from "../../../../redux/customerReducer";

export const ServiceYouPayFor: React.FC<ServiceYouPayForType> = ({name, price}) => {
    const dispatch = useDispatch();
    const deleteServiceHandler = () => dispatch(customerActions.deleteServiceForPaying({name, price}));
    return <div className={c.serviceYouPayFor}>
        <div className={c.serviceData}>
            <p className={c.name}>{name}</p>
            <p className={c.price}>{price} $</p>
        </div>
        <CloseIcon className={c.closeIcon} onClick={deleteServiceHandler} />
    </div>
};