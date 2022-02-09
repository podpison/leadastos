import { PageCreatorHOC } from "../commonComponents/pageCreatorHOC/PageCreatorHOC";
import { SlideCreatorHOC } from "../commonComponents/slideCreatorHOC/SlideCreatorHOC";
import { ContactsSlide } from "../commonComponents/slides/contactsSlide/ContactsSlide";
import { ForClientsSlide } from "./slides/ForClientsSlide";

export const ForClientsPage: React.FC = () => {
    return <PageCreatorHOC>
        <SlideCreatorHOC scrollTo='down' slideName="for clients" MainContentComponent={ForClientsSlide} />
        <SlideCreatorHOC MainContentComponent={ContactsSlide} slideName="contacts" scrollTo="up" />
    </PageCreatorHOC>
};