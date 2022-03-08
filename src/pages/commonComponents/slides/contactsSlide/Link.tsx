import c from "./contactsSlide.module.scss";
import { Link as ReactRouterLink } from "react-router-dom";

type Props = {
    name: string
    contact: string
    theme: 'dark' | 'light'   
}

export const Link: React.FC<Props> = ({name, contact, theme}) => {
    return <ReactRouterLink to='/forClients' className={`${c.linkContainer} ${theme === 'light' ? c.lightTheme : c.darkTheme}`}>
        <div className={c.content}>
            <p className={c.name}>{name}</p>
            <p className={c.contact}>{contact}</p>
            <img className={c.arrow} alt='arrow' src='https://i.postimg.cc/x16VVjKH/Arrow-1.png' />
        </div>
    </ReactRouterLink>
};