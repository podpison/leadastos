import c from "./main.module.scss";

type Props = {
    scrollTo: 'down' | 'up'
    className: string
}

export const ScrollTo: React.FC<Props> = ({scrollTo, className}) => {
    return <div className={`${c.scrollToSignContainer} ${className}`}>
        <div className={c.sign}>{`scroll ${scrollTo}`}</div>
        <div className={c.strip} />
    </div>
};