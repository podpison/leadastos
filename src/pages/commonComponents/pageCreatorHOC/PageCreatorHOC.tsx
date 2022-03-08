import Carousel from "react-slick";
import "./pageCreatorHOC.scss";
import { useTheme } from "./../../../static/hooks/useTheme";

export const PageCreatorHOC: React.FC = ({ children }) => {
    const { useThemeClasses } = useTheme();
    const responsive = [
        {
            breakpoint: 899,
            settings: {
                dots: false,
                swipe: false
            }
        }
    ]
    return <div className='pageCreatorHOC__carousel'>
        <Carousel arrows={false} responsive={responsive} vertical verticalSwiping dotsClass={useThemeClasses(['slick-dots', 'mainCarousel__dotsContainer'], 'mainCarousel__dotsContainerDark')} infinite={false} dots>
            {children}
        </Carousel>
    </div>
};