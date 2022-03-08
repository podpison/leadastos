import c from "./slideCreatorHOC.module.scss";
import { useTheme } from "./../../../static/hooks/useTheme";

type Props = {
    slideName: string
    MainContentComponent: React.FC
    scrollTo: 'down' | 'up' | null
    isSlideNameSmall?: boolean
    slideNameMobileStyles?: boolean //display: none to slide name in mobile version
    slideNameClassName?: string
}

export const SlideCreatorHOC: React.FC<Props> = ({ slideName, MainContentComponent, scrollTo, isSlideNameSmall, slideNameMobileStyles = true, slideNameClassName }) => {
    const { useThemeClasses } = useTheme();
    let stripClassNames = useThemeClasses(c.strip, c.stripDark, c.stripLight);
    return <div className={c.HOCContainer}>
        <p className={`${c.slideName} ${slideNameClassName} ${slideNameMobileStyles && c.slideNameMobileStyles} ${isSlideNameSmall !== undefined ? c.smallSlideName : undefined}`}>{slideName}</p>
        {scrollTo !== null ? <div className={c.scrollToSignContainer}>
            <div className={c.sign}>{`scroll ${scrollTo}`}</div>
            <div className={stripClassNames} />
        </div> : null}
        <div className={c.mainContainer}>
            <MainContentComponent />
        </div>
    </div>
};