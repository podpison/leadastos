import { PricesItemType } from "../../../../../redux/staticReducer";
import { GoTo } from "../../../../commonComponents/goTo/GoTo";
import c from "./scrollableContentHOC.module.scss";
import { useTheme } from "./../../../../../static/hooks/useTheme";
import { Checkbox } from "./Checkbox";

interface Props extends PricesItemType {
    isChooserModeActive: boolean
} 

export const Item: React.FC<Props> = ({serviceName, description, price, isChooserModeActive}) => {
    const { useThemeClasses } = useTheme();
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
                {isChooserModeActive && <Checkbox serviceName={serviceName} price={price} />}
            </div>
        </div>
    </div>
};