import c from "./goTo.module.scss";
import { Link } from "react-router-dom";

type Props = {
    variant: 'consultation' | 'startProject'
    className?: string
}

export const GoTo: React.FC<Props> = ({variant, className}) => {
    return <Link to={variant === 'consultation' ? '/contacts' : '/forClients'} className={variant === 'consultation' ? `${c.mainContainer} ${className} ${c.consultationContainer}` : `${c.mainContainer} ${className} ${c.startProjectContainer}`}>
        <div className={c.content}>
            {variant === 'consultation' ? <p>Consultation</p> : <p>Start<br />project</p>}
            <img alt='arrow' src='https://i.postimg.cc/x16VVjKH/Arrow-1.png' />
        </div>
    </Link>
};