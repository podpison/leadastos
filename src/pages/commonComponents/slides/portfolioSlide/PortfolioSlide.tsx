import c from "./portfolioSlide.module.scss";
import { PortfolioItem } from "./Item";
import { CarouselInSlideHOC } from "./../../carouselInSlideHOC/CarouselInSlideHOC";

export const PortfolioSlide: React.FC = () => {
    return <CarouselInSlideHOC ItemComponent={PortfolioItem} itemsCountInOneSlide={4} itemsContainerClassName={c.itemsContainer} carouselClassName={c.portfolioSlide} itemsName="portfolioItems" />
}