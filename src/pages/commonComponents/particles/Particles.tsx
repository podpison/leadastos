import * as particles from "./particles.json";
import { useEffect } from "react";
import c from "./particles.module.scss";

declare var particlesJS: any;

type Props = {
    particlesId: string
    particlesClassName?: string
}

export const Particles: React.FC<Props> = ({particlesId, particlesClassName}) => {
    useEffect(() => {
        particlesJS(particlesId, particles, null);
    }, []);
    return <div className={`${c.particles} ${particlesClassName}`} id={particlesId} /> 
};