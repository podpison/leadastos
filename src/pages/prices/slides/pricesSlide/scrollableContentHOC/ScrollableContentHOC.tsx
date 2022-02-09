import { PricesItemSlideType } from "../../../../../redux/staticReducer";
import { Item } from "./Item";
import c from "./scrollableContentHOC.module.scss";
import Scrollbar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "./scrollableContentHOC.scss";

export const ScrollableContentHOC: React.FC<PricesItemSlideType> = ({name, items}) => {
    const Items = items.map((d, index) => <Item {...d} key={index} />);

    return <div className={c.scrollableContentHOCContainer}>
        <h2 className={c.sign}>{name}</h2>
        <Scrollbar autoHide={false}>
            <div className={c.itemsContianer}>
                {Items}
            </div>
        </Scrollbar>
    </div>
};