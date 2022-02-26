import { PageCreatorHOC } from "../commonComponents/pageCreatorHOC/PageCreatorHOC";
import { SlideCreatorHOC } from "../commonComponents/slideCreatorHOC/SlideCreatorHOC";
import { InformationAboutSlide } from "./slides/InformationAboutSlide";
import { OurAdvantagesSlide } from "./slides/OurAdvantagesSlide";
import { ContactsSlide } from "../commonComponents/slides/contactsSlide/ContactsSlide";
import c from "./about.module.scss";

export const AboutPage: React.FC = () => {
    return <PageCreatorHOC>
        <SlideCreatorHOC slideNameClassName={c.mobileSlideName} slideNameMobileStyles={false} isSlideNameSmall MainContentComponent={InformationAboutSlide} slideName="information about" scrollTo="down" />
        <SlideCreatorHOC slideNameClassName={c.mobileSlideName} slideNameMobileStyles={false} isSlideNameSmall MainContentComponent={OurAdvantagesSlide} slideName="our advantages" scrollTo="down" />
        <SlideCreatorHOC MainContentComponent={ContactsSlide} slideName="contacts" scrollTo="up" />
    </PageCreatorHOC>
};
