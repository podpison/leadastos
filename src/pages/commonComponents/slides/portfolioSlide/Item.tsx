import { PortfolioItemType } from "../../../../redux/staticReducer";
import c from "./portfolioSlide.module.scss";

export const PortfolioItem: React.FC<PortfolioItemType> = ({name, link, image}) => {
    return <a href={link} className={c.itemContainer}>
        <img className={c.img} src={image} alt='portfolio item' />
        <p className={c.name}>{name}</p>
    </a>
};