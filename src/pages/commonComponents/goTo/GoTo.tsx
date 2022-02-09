import c from "./goTo.module.scss";

type Props = {
    variant: 'consultation' | 'startProject'
    className?: string
}

export const GoTo: React.FC<Props> = ({variant, className}) => {
    return <div className={variant === 'consultation' ? `${c.mainContainer} ${className} ${c.consultationContainer}` : `${c.mainContainer} ${className} ${c.startProjectContainer}`}>
        {variant === 'consultation' ? <p>Consultation</p> : <p>Start<br />project</p>}
        <img alt='arrow' src='https://i.postimg.cc/x16VVjKH/Arrow-1.png' />
    </div>
};