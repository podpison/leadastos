import { PricesItemSlideType } from "../../../../../redux/staticReducer";
import { Item } from "./Item";
import c from "./scrollableContentHOC.module.scss";
import Scrollbar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "./scrollableContentHOC.scss";
import { useTheme } from "./../../../../../static/hooks/useTheme";
import { useLocation } from "react-router-dom";
import { ChoosenCervicesMenu } from "./ChoosenCervicesMenu";

export const ScrollableContentHOC: React.FC<PricesItemSlideType> = ({ name, items }) => {
    const { pathname } = useLocation();
    let isChooserModeActive = pathname === '/prices/chooserMode'
    const Items = items.map((d, index) => <Item isChooserModeActive={isChooserModeActive} {...d} key={index} />);
    const { useThemeClasses } = useTheme();

    return <div className={c.scrollableContentHOCContainer}>
        <h2 className={c.sign}>{name}</h2>
        <Scrollbar className={useThemeClasses('', 'scrollableContentHOC_scrollbarDark', 'scrollableContentHOC_scrollbarLight')} autoHide={false}>
            <div className={c.itemsContianer}>
                {Items}
            </div>
        </Scrollbar>
        {isChooserModeActive && <ChoosenCervicesMenu />}
    </div>
};