import { MainSlide } from "./slides/MainSlide";
import { AboutSlide } from "./slides/AboutSlide";
import { ServicesSlide } from "./slides/servicesSlide/ServicesSlide";
import { PortfolioSlide } from "../commonComponents/slides/portfolioSlide/PortfolioSlide";
import { SlideCreatorHOC } from "../commonComponents/slideCreatorHOC/SlideCreatorHOC";
import { PageCreatorHOC } from "../commonComponents/pageCreatorHOC/PageCreatorHOC";
import { ContactsSlide } from "../commonComponents/slides/contactsSlide/ContactsSlide";

export const MainPage: React.FC = () => {
    return <PageCreatorHOC>
        <MainSlide />
        <AboutSlide />
        <SlideCreatorHOC slideName='services' MainContentComponent={ServicesSlide} scrollTo='down' />
        <SlideCreatorHOC slideName='portfolio' MainContentComponent={PortfolioSlide} scrollTo='down' />
        <SlideCreatorHOC slideName='contacts' MainContentComponent={ContactsSlide} scrollTo='up' />
    </PageCreatorHOC>
};