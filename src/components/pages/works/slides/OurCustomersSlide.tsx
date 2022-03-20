import { CarouselInSlideHOC } from "../../../commonComponents/carouselInSlideHOC/CarouselInSlideHOC";
import { OurCustomersSlideItem } from "./Item";
import c from "./ourCustomers.module.scss";
import "./ourCustomers.scss";
import { useTheme } from "../../../../static/hooks/useTheme";

export const OurCustomersSlide: React.FC = () => {
    const { useThemeClasses } = useTheme();
    return <div className={c.ourCustomersSlide}>
        <h2 className={c.sign}>we have collaborated with brands such as</h2>
        <CarouselInSlideHOC ItemComponent={OurCustomersSlideItem} carouselClassName='ourCustomersSlide__carouselContainer' itemsCountInOneSlide={9} itemsContainerClassName={useThemeClasses(c.itemsContainer, c.itemsContainerDark)} itemsName="customerLogosItems" />
    </div>
};