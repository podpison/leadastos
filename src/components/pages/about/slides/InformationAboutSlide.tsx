import { GoTo } from "../../../commonComponents/goTo/GoTo";
import c from "./../about.module.scss";

export const InformationAboutSlide: React.FC = () => {
    return <div className={c.informationAboutSlide}>
        <h2 className={c.sign}>want a unique design? we will help you!</h2>
        <div className={c.textsAndGoToContainer}>
            <GoTo className={c.goTo} variant="startProject" />
            <div className={c.textsContainer}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur praesentium nobis eum modi eligendi eos itaque recusandae voluptate.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur praesentium nobis eum modi eligendi eos itaque recusandae voluptate.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur praesentium nobis eum modi eligendi eos itaque recusandae voluptate.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur praesentium nobis eum modi eligendi eos itaque recusandae voluptate.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur praesentium nobis eum modi eligendi eos itaque recusandae voluptate.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur praesentium nobis eum modi eligendi eos itaque recusandae voluptate.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur praesentium nobis eum modi eligendi eos itaque recusandae voluptate.Lorem ipsum dolor sit, amet </p>
            </div>
        </div>
    </div>
};