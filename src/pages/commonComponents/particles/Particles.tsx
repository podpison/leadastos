import * as particlesLight from "./particlesLight.json";
import * as particlesDark from "./particlesDark.json";
import { useEffect } from "react";
import c from "./particles.module.scss";
import { useTheme } from "../../../static/hooks/useTheme";

declare var particlesJS: any;

type Props = {
    particlesId: string
    particlesClassName?: string
}

export const Particles: React.FC<Props> = ({particlesId, particlesClassName}) => {
    const { theme } = useTheme();
    const currentParticlesSettings =  theme === 'light' ? particlesLight : particlesDark;
    useEffect(() => {
        particlesJS(particlesId, currentParticlesSettings, null);
    }, [currentParticlesSettings, particlesId]);
    return <div className={`${c.particles} ${particlesClassName}`} id={particlesId} /> 
};