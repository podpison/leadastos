import { PricesItemType } from "../../../../../redux/staticReducer";
import { GoTo } from "../../../../commonComponents/goTo/GoTo";
import c from "./scrollableContentHOC.module.scss";

export const Item: React.FC<PricesItemType> = ({serviceName, description, price}) => {
    return <div className={c.itemContainer}>
        <div className={c.imgAndGoToContainer}>
            <div className={c.imgAndGoToContainer2}>
                <p className={c.serviceName}>{serviceName}</p>
                <GoTo variant="startProject" className={c.goTo} />
            </div>
        </div>
        <div className={c.informationContainer}>
            <p className={c.serviceName}>{serviceName}</p>
            <p className={c.description}>{description}</p>
            <p className={c.price}>{price} $</p>
        </div>
    </div>
};