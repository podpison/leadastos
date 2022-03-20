import { useLocation } from "react-router-dom";
import c from "./../../main.module.scss";

type Props = {
    src: string
    text: string
}

export const ServiceInfo: React.FC<Props> = ({src, text}) => {
    const {pathname} = useLocation();
    let serviceName = pathname === '/' ? 'design' : pathname.split(' ').pop()!.replace(/\//gm, '')

    return <div className={c.serviseInfoContainer}>
        <div className={c.imgAndName}>
            <img src={src} alt='service' />
            <div className={c.BlackAndWhiteImgAndName}>
                <img src={src} className={c.imgBlackAndWhite} alt='service' />
                <p className={c.serviceName}>{serviceName}</p>
            </div>
        </div>
        <p className={c.text}>{text}</p>
    </div>
};