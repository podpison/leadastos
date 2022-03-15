import { CarouselInSlideHOC } from "../../../commonComponents/carouselInSlideHOC/CarouselInSlideHOC";
import { ScrollableContentHOC } from "./scrollableContentHOC/ScrollableContentHOC";

export const PricesSlide: React.FC = () => {
    return <CarouselInSlideHOC autoplay={false} ItemComponent={ScrollableContentHOC} itemsCountInOneSlide={0} itemsName='pricesItems' arrayDividingIsNotRequired />
};