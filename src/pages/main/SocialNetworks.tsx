import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import c from "./main.module.scss"
import { useTheme } from "./../../static/hooks/useTheme";

type Props = {
    className?: string
}

export const SocialNetworks: React.FC<Props> = ({className}) => {
    const {useThemeClasses} = useTheme();
    return <div className={useThemeClasses([c.socialNetworks, className], c.socialNetworksDark, c.socialNetworksLight)}>
        <p className={c.followSign}>FOLLOW US</p>
        <a href="https://m.facebook.com"><FacebookIcon /></a>
        <a href="https://www.instagram.com"><InstagramIcon /></a>
    </div>
};