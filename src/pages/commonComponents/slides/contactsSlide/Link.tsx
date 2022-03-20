import c from "./contactsSlide.module.scss";

type Props = {
    name: string
    theme: 'dark' | 'light' 
}

export const Link: React.FC<Props> = ({name, theme}) => {
    return <a href={`mailto:business@lead.com?subject=${name}`} className={`${c.linkContainer} ${theme === 'light' ? c.lightTheme : c.darkTheme}`}>
        <div className={c.content}>
            <p className={c.name}>{name}</p>
            <p className={c.contact}>business@lead.com</p>
            <img className={c.arrow} alt='arrow' src='https://i.postimg.cc/x16VVjKH/Arrow-1.png' />
        </div>
    </a>
};