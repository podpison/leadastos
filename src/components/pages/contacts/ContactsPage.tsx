import { PageCreatorHOC } from "../../commonComponents/pageCreatorHOC/PageCreatorHOC";
import { SlideCreatorHOC } from "../../commonComponents/slideCreatorHOC/SlideCreatorHOC";
import { ContactsSlide } from "../../commonComponents/slides/contactsSlide/ContactsSlide";

export const ContactsPage: React.FC = () => {
    return <PageCreatorHOC>
        <SlideCreatorHOC MainContentComponent={ContactsSlide} scrollTo={null} slideName='contacts' />
    </PageCreatorHOC>
};