import { PricesItemSlideType } from "../../../../../redux/staticReducer";
import { Item } from "./Item";
import c from "./scrollableContentHOC.module.scss";
import Scrollbar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "./scrollableContentHOC.scss";
import { useTheme } from "./../../../../../static/hooks/useTheme";
import { useLocation } from "react-router-dom";
import { ChoosenServicesMenu } from "./choosenServicesMenu/ChoosenServicesMenu";

export const ScrollableContentHOC: React.FC<PricesItemSlideType> = ({ name, items }) => {
    const { pathname } = useLocation();
    let isChooserModeActive = pathname === '/prices/chooserMode'
    const Items = items.map((d, index) => <Item isChooserModeActive={isChooserModeActive} {...d} key={index} />);
    const { useThemeClasses } = useTheme();

    return <div className={c.scrollableContentHOCContainer}>
        <div className={c.signAndChoosenServicesMenu}>
            <h2 className={c.sign}>{name}</h2>
            {isChooserModeActive && <ChoosenServicesMenu />}
        </div>
        <Scrollbar className={useThemeClasses('', 'scrollableContentHOC_scrollbarDark', 'scrollableContentHOC_scrollbarLight')} autoHide={false}>
            <div className={c.itemsContianer}>
                {Items}
            </div>
        </Scrollbar>
    </div>
};