import Carousel from "react-slick";
import "./pageCreatorHOC.scss";

export const PageCreatorHOC: React.FC = ({ children }) => {
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
        <Carousel responsive={responsive} vertical verticalSwiping dotsClass='slick-dots mainCarousel__dotsContainer' infinite={false} dots>
            {children}
        </Carousel>
    </div>
};