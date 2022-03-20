import c from "./../main.module.scss";
import { GoTo } from "../../../commonComponents/goTo/GoTo";
import { ScrollTo } from "../ScrollTo";
import { SocialNetworks } from "../SocialNetworks";

export const AboutSlide: React.FC = () => {
    return <div className={c.aboutSlide}>
        <p className={c.informationAboutSign}>Information about</p>
        <div className={c.informationAboutContainer}>
            <p className={c.informationAbout}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere non incidunt aliquid quos animi fugiat commodi obcaecati aperiam quidem ipsum repudiandae, laborum magni, reiciendis odio, at aut odit aspernatur officiis.
                Modi distinctio quisquam pariatur, dolor doloremque iure in? Beatae nihil maxime, ipsam voluptate quis, similique optio, quaerat hic voluptates culpa asperiores? Harum placeat eaque itaque modi nam a earum rem.
                Aliquam, suscipit hic nesciunt accusantium amet autem inventore est! Voluptatibus optio a facilis odit fugiat impedit consequatur incidunt</p>
            <GoTo className={c.goTo} variant='startProject' />
            <SocialNetworks className={c.socialNetworks} />
        </div>
        <div className={c.socialNetworksAndScrollDownSignContainer}>
            <SocialNetworks className={c.socialNetworks} />
            <ScrollTo scrollTo='down' className={c.scrollTo} />
        </div>
    </div>
};