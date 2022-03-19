import { PageCreatorHOC } from "../commonComponents/pageCreatorHOC/PageCreatorHOC";
import { SlideCreatorHOC } from "../commonComponents/slideCreatorHOC/SlideCreatorHOC";
import { ContactsSlide } from "../commonComponents/slides/contactsSlide/ContactsSlide";
import { PortfolioSlide } from "../commonComponents/slides/portfolioSlide/PortfolioSlide";
import { OurCustomersSlide } from "./slides/OurCustomersSlide";

export const WorksPage: React.FC = () => {
    return <PageCreatorHOC>
        <SlideCreatorHOC slideName='portfolio' MainContentComponent={PortfolioSlide} scrollTo='down' />
        <SlideCreatorHOC slideName='our customers' MainContentComponent={OurCustomersSlide} scrollTo='down' />
        <SlideCreatorHOC MainContentComponent={ContactsSlide} slideName="contacts" scrollTo="up" />
    </PageCreatorHOC>
};