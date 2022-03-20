import c from "./../main.module.scss";
import { GoTo } from "../../../commonComponents/goTo/GoTo";
import { Particles } from "../../../commonComponents/particles/Particles";

export const MainSlide: React.FC = () => {
    return <div className={c.mainSlide}>
        <ul className={c.aboutSignContainer}>
            <li className={c.aboutSign}>Leadastos is a digital innovation studio that leverages best-in-class stratery, design and development</li>
        </ul>
        <div>
            <p className={c.weRethinkSign}>WE RETHINK</p>
            <p className={c.theWebSign}>THE WEB</p>
            <GoTo className={c.goTo} variant='consultation' />
        </div>
        <Particles particlesId="mainSlideParticles" />
    </div>
};