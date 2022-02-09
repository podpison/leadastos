import { Link, Route, Routes } from "react-router-dom";
import { GoTo } from "../../../commonComponents/goTo/GoTo";
import c from "./../../main.module.scss";
import { ServiceInfo } from "./ServiceInfo";
import { useLocation } from "react-router-dom";

export const ServicesSlide: React.FC = () => {
    const {pathname} = useLocation();

    const isLinkActiveChecker = (pathToCheck: string) => pathname === pathToCheck ? c.active : undefined;

    return <div className={c.servicesSlide}>
        <div className={c.linksContainer}>
            <Link className={isLinkActiveChecker('/')} to='/'>DESIGN</Link>
            <Link className={isLinkActiveChecker('/technology')} to='/technology'>TECHNOLOGY</Link>
            <Link className={isLinkActiveChecker('/marketing')} to='/marketing'>MARKETING</Link>
            <Link className={isLinkActiveChecker('/research')} to='/research'>RESEARCH</Link>
            <GoTo className={c.goTo} variant="startProject" />
        </div>
        <Routes>
            <Route path='/' element={<ServiceInfo src='https://i.postimg.cc/GmZs4XKQ/adrien-converse-xz-H7-K6n-VVg-l-unsplash-1.png' text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eligendi explicabo ipsa? Voluptatum excepturi, sequi fugit aut id iusto! Cumque culpa hic molestias id saepe, ipsam dolores veniam mollitia consectetur.
            Corporis modi suscipit eveniet enim, illum similique beatae minima commodi omnis exercitationem. Officiis eos nostrum esse, necessitatibus architecto quae non dolor quaerat ut, culpa enim ab facilis! Maiores, assumenda voluptatibus!" />} />
            <Route path='/design' element={<ServiceInfo src='https://i.postimg.cc/GmZs4XKQ/adrien-converse-xz-H7-K6n-VVg-l-unsplash-1.png' text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eligendi explicabo ipsa? Voluptatum excepturi, sequi fugit aut id iusto! Cumque culpa hic molestias id saepe, ipsam dolores veniam mollitia consectetur.
            Corporis modi suscipit eveniet enim, illum similique beatae minima commodi omnis exercitationem. Officiis eos nostrum esse, necessitatibus architecto quae non dolor quaerat ut, culpa enim ab facilis! Maiores, assumenda voluptatibus!" />} />
            <Route path='/technology' element={<ServiceInfo src='https://i.postimg.cc/GmZs4XKQ/adrien-converse-xz-H7-K6n-VVg-l-unsplash-1.png' text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eligendi explicabo ipsa? Voluptatum excepturi, sequi fugit aut id iusto! Cumque culpa hic molestias id saepe, ipsam dolores veniam mollitia consectetur.
            Corporis modi suscipit eveniet enim, illum similique beatae minima commodi omnis exercitationem. Officiis eos nostrum esse, necessitatibus architecto quae non dolor quaerat ut, culpa enim ab facilis! Maiores, assumenda voluptatibus!" />} />
        </Routes>
    </div>
};