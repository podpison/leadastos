import { GoTo } from "../../../commonComponents/goTo/GoTo";
import c from "./../about.module.scss";
import { useTheme } from "../../../../static/hooks/useTheme";
 
export const OurAdvantagesSlide: React.FC = () => {
    const { useThemeClasses } = useTheme();
    return <div className={c.ourAdvantagesSlide}>
        <h2 className={c.sign}>speed, quality and modernity</h2>
        <div className={c.textAndGoToContainer}>
            <GoTo className={c.goTo} variant="startProject" />
            <div className={useThemeClasses(c.textContainer, c.textContainerDark, c.textContainerLight)}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro consequatur, vel repellat veniam dicta voluptatibus tenetur aliquam nihil rem incidunt</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro consequatur, vel repellat veniam dicta voluptatibus tenetur aliquam nihil rem incidunt</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro consequatur, vel repellat veniam dicta voluptatibus tenetur aliquam nihil rem incidunt</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro consequatur, vel repellat veniam dicta voluptatibus tenetur aliquam nihil rem incidunt</p>
            </div>
        </div>
    </div>
};