import { CustomerLogosItemType } from "../../../../redux/staticReducer";

export const OurCustomersSlideItem: React.FC<CustomerLogosItemType> = ({logo, linkToWebsite}) => {
    return <a href={linkToWebsite}>
        <img src={logo} alt='logo' />
    </a>
};