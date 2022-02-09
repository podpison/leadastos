import { CarouselInSlideHOC } from "../../commonComponents/carouselInSlideHOC/CarouselInSlideHOC";
import { OurCustomersSlideItem } from "./Item";
import c from "./ourCustomers.module.scss";
import "./ourCustomers.scss";

export const OurCustomersSlide: React.FC = () => {
    return <div className={c.ourCustomersSlide}>
        <h2 className={c.sign}>we have collaborated with brands such as</h2>
        <CarouselInSlideHOC ItemComponent={OurCustomersSlideItem} carouselClassName='ourCustomersSlide__carouselContainer' itemsCountInOneSlide={9} itemsContainerClassName={c.itemsContainer} itemsName="customerLogosItems" />
    </div>
};