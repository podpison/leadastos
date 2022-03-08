import { useItems } from "../../../static/hooks/useItems";
import "./carouselInSlideHOC.scss";
import Carousel from "react-slick";
import { PortfolioItemType, CustomerLogosItemType, PricesItemSlideType } from "./../../../redux/staticReducer";
import { useTheme } from "../../../static/hooks/useTheme";

type Props = {
    itemsName: 'portfolioItems' | 'customerLogosItems' | 'pricesItems'
    ItemComponent: React.FC<PortfolioItemType> | React.FC<CustomerLogosItemType> | React.FC<PricesItemSlideType>
    itemsCountInOneSlide: number
    carouselClassName?: string
    itemsContainerClassName?: string
    arrayDividingIsNotRequired?: boolean
}

export const CarouselInSlideHOC: React.FC<Props> = ({itemsName, ItemComponent, itemsCountInOneSlide, carouselClassName, itemsContainerClassName, arrayDividingIsNotRequired = false}) => {
    //@ts-ignore fix is requierd
    let items = useItems(itemsName)?.map((i, index) => <ItemComponent key={index} {...i} />);
    let Items = [] as JSX.Element[];
    if (items && !arrayDividingIsNotRequired) {
        let subArray = [] as JSX.Element[][];
        for (let i = 0; i < Math.ceil(items.length / itemsCountInOneSlide); i++) {
            subArray[i] = items.slice((i * itemsCountInOneSlide), (i * itemsCountInOneSlide) + itemsCountInOneSlide);
        };
        subArray.forEach((a, index) => Items.push(<div key={index} className={itemsContainerClassName}>{a}</div>))
    } else items !== undefined ? Items = items : Items = [];
    //autoplay

    const { useThemeClasses } = useTheme();
    return <Carousel arrows={false} swipe={false} className={`carouselInSlideHOC__mainContainer ${carouselClassName}`} dotsClass={useThemeClasses(['slick-dots', 'carouselInSlideHOC__dotsContainer'], 'carouselInSlideHOC__dotsContainerDark', 'carouselInSlideHOC__dotsContainerLight')} dots>
        {Items}
    </Carousel>
};