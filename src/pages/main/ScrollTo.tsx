import c from "./main.module.scss";
import { useTheme } from "./../../static/hooks/useTheme";

type Props = {
    scrollTo: 'down' | 'up'
    className: string
}

export const ScrollTo: React.FC<Props> = ({scrollTo, className}) => {
    const { useThemeClasses } = useTheme();
    return <div className={`${c.scrollToSignContainer} ${className}`}>
        <div className={c.sign}>{`scroll ${scrollTo}`}</div>
        <div className={useThemeClasses(c.strip, c.stripDark, c.stipLight)} />
    </div>
};