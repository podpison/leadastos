import { SlideCreatorHOC } from "../commonComponents/slideCreatorHOC/SlideCreatorHOC";
import { PageCreatorHOC } from "../commonComponents/pageCreatorHOC/PageCreatorHOC";
import { PricesSlide } from "./slides/pricesSlide/PricesSlide";
import { ContactsSlide } from "../commonComponents/slides/contactsSlide/ContactsSlide";

export const PricesPage: React.FC = () => {
    return <PageCreatorHOC>
        <SlideCreatorHOC MainContentComponent={PricesSlide} slideName="prices" scrollTo="down" />
        <SlideCreatorHOC MainContentComponent={ContactsSlide} slideName="contacts" scrollTo="up" />
    </PageCreatorHOC>
};