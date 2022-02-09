import Carousel from "react-slick";
import "./pageCreatorHOC.scss";

export const PageCreatorHOC: React.FC = ({ children }) => {
    return <div className='pageCreatorHOC__carousel'>
        <Carousel vertical verticalSwiping dotsClass='slick-dots mainCarousel__dotsContainer' infinite={false} dots>
            {children}
        </Carousel>
    </div>
};