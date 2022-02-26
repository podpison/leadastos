import c from "./contactsSlide.module.scss";

type Props = {
    name: string
    contact: string
    theme?: 'black' | 'white'   
}

export const Link: React.FC<Props> = ({name, contact, theme = 'white'}) => {
    return <div className={`${c.linkContainer} ${theme === 'white' ? c.lightTheme : c.darkTheme}`}>
        <div className={c.content}>
            <p className={c.name}>{name}</p>
            <p className={c.contact}>{contact}</p>
            <img className={c.arrow} alt='arrow' src='https://i.postimg.cc/x16VVjKH/Arrow-1.png' />
        </div>
    </div>
};