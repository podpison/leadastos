import { PortfolioItemType } from "../../../../redux/staticReducer";
import c from "./portfolioSlide.module.scss";
import { useTheme } from "./../../../../static/hooks/useTheme";

export const PortfolioItem: React.FC<PortfolioItemType> = ({name, link, image}) => {
    const {useThemeClasses} = useTheme();
    return <a href={link} className={c.itemContainer}>
        <img className={c.img} src={image} alt='portfolio item' />
        <p className={useThemeClasses(c.name, c.nameDark, c.nameLight)}>{name}</p>
    </a>
};