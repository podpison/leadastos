import { GoTo } from "../../commonComponents/goTo/GoTo";
import c from "./../about.module.scss";

export const OurAdvantagesSlide: React.FC = () => {
    return <div className={c.ourAdvantagesSlide}>
        <h2 className={c.sign}>speed, quality and modernity</h2>
        <div className={c.textAndGoToContainer}>
            <div className={c.textContainer}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro consequatur, vel repellat veniam dicta voluptatibus tenetur aliquam nihil rem incidunt</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro consequatur, vel repellat veniam dicta voluptatibus tenetur aliquam nihil rem incidunt</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro consequatur, vel repellat veniam dicta voluptatibus tenetur aliquam nihil rem incidunt</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro consequatur, vel repellat veniam dicta voluptatibus tenetur aliquam nihil rem incidunt</p>
            </div>
            <GoTo className={c.goTo} variant="startProject" />
        </div>
    </div>
};