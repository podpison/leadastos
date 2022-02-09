import { Button, TextField } from "@mui/material";
import c from "./contactsSlide.module.scss";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import LocationIcon from "@mui/icons-material/LocationOn";
import { Link } from "./Link";
import { SocialNetworks } from "../../../main/SocialNetworks";

export const ContactsSlide: React.FC = () => {
    return <div className={c.contactsSlide}>
        <div className={c.rightSide}>
            <div className={c.signs}>
                <h3 className={c.sign1}>Contact us</h3>
                <p className={c.sign2}>Let's get to the next level together</p>
            </div>
            <div className={c.formContainer}>
                <TextField className={c.textField} label='Full name' placeholder='Enter your first name' />
                <TextField className={c.textField} label='Email' placeholder='Enter your email' />
                <TextField className={`${c.textField} ${c.bigTextField}`} label='How can we help you?' placeholder='Your message' />
                <Button className={c.button} variant='contained'>Send</Button>
            </div>
        </div>
        <div className={c.leftSide}>
            <div className={c.contactInformation}>
                <div className={c.contactContainer}>
                    <PhoneIcon/>
                    <p>+1 (647)-563-9114</p>
                </div>
                <div className={c.contactContainer}>
                    <EmailIcon/>
                    <p>lead@gmail.com</p>
                </div>
                <div className={c.contactContainer}>
                    <LocationIcon/>
                    <p>Margaretenstrabe 70/3, 1050 Vienna, Austria</p>
                </div>
            </div>
            <div className={c.usefulLinks}>
                <Link name='become a client' contact='business@LEAD.com' />
                <SocialNetworks />
                <Link name='become a partner' contact='business@LEAD.com' theme='black' />
                <Link name='join lead team' contact='business@LEAD.com' />
            </div>
        </div>
    </div>
};