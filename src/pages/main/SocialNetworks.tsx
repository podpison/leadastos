import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import c from "./main.module.scss"

type Props = {
    className?: string
}

export const SocialNetworks: React.FC<Props> = ({className}) => {
    return <div className={`${c.socialNetworks} ${className}`}>
        <p className={c.followSign}>FOLLOW US</p>
        <a href="https://m.facebook.com"><FacebookIcon /></a>
        <a href="https://www.instagram.com"><InstagramIcon /></a>
    </div>
};