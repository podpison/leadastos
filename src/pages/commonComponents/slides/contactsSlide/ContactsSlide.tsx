import { Button } from "@mui/material";
import { TextField } from "./../../textField/TextField";
import c from "./contactsSlide.module.scss";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import LocationIcon from "@mui/icons-material/LocationOn";
import { Link } from "./Link";
import { SocialNetworks } from "../../../main/SocialNetworks";
import { Formik } from "formik";
import { useValidator } from "./../../../../static/hooks/useValidator";

const initialValues = { fullName: '', email: '', howCanWeHelpYou: '' };

export const ContactsSlide: React.FC = () => {
    return <div className={c.contactsSlide}>
        <div className={c.rightSide}>
            <div className={c.signs}>
                <h3 className={c.sign1}>Contact us</h3>
                <p className={c.sign2}>Let's get to the next level together</p>
            </div>
            <Formik
                initialValues={initialValues}
                validate={({ fullName, email, howCanWeHelpYou }) => {
                    const errors = {} as any;
                    fullName && useValidator(fullName, 'fullName', errors, /\p{L}/gu);
                    email && useValidator(email, 'email', errors, /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
                    howCanWeHelpYou && useValidator(howCanWeHelpYou, 'howCanWeHelpYou', errors, /\p{L}/gu);
                    return errors;
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ values, errors, handleChange }) => {
                    return <form className={c.formContainer}>
                        <TextField value={values.fullName} errorMessage={errors.fullName} label='Full name' placeholder='Enter your full name' typeAndName="fullName" onChange={handleChange} />
                        <TextField value={values.email} errorMessage={errors.email} label='Email' placeholder='Enter your email' typeAndName="email" onChange={handleChange} />
                        <TextField value={values.howCanWeHelpYou} errorMessage={errors.howCanWeHelpYou} label='How can we help you' placeholder='Enter how we can help you' typeAndName="howWeCanHelpYou" onChange={handleChange} />
                        <Button className={c.button} type='submit' variant='contained'>Send</Button>
                    </form>
                }}
            </Formik>
        </div>
        <div className={c.leftSide}>
            <div className={c.contactInformation}>
                <div className={c.contactContainer}>
                    <PhoneIcon />
                    <p>+1 (647)-563-9114</p>
                </div>
                <div className={c.contactContainer}>
                    <EmailIcon />
                    <p>lead@gmail.com</p>
                </div>
                <div className={c.contactContainer}>
                    <LocationIcon />
                    <p>Margaretenstrabe 70/3, 1050 Vienna, Austria</p>
                </div>
            </div>
            <div className={c.usefulLinks}>
                <Link name='become a client' contact='business@LEAD.com' />
                <SocialNetworks className={c.socialNetworks} />
                <Link name='become a partner' contact='business@LEAD.com' theme='black' />
                <Link name='join lead team' contact='business@LEAD.com' />
            </div>
        </div>
    </div>
};