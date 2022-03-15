import c from "./contactsSlide.module.scss";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { alertActions } from "./../../../../redux/alertReducer";

type Props = {
    name: string
    contact: string
    theme: 'dark' | 'light'   
}

export const Link: React.FC<Props> = ({name, contact, theme}) => {
    const useLinkToChecker = () => {
        const { pathname } = useLocation();
        const dispatch = useDispatch();
        if (pathname === '/forClients') {
            dispatch(alertActions.setAlertInformation({severity: 'warning', data: {
                title: 'Warning',
                message: 'You are already here.'
            }}))
        }
    };
    return <ReactRouterLink onClick={useLinkToChecker} to='/forClients' className={`${c.linkContainer} ${theme === 'light' ? c.lightTheme : c.darkTheme}`}>
        <div className={c.content}>
            <p className={c.name}>{name}</p>
            <p className={c.contact}>{contact}</p>
            <img className={c.arrow} alt='arrow' src='https://i.postimg.cc/x16VVjKH/Arrow-1.png' />
        </div>
    </ReactRouterLink>
};