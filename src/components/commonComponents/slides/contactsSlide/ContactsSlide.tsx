import { Button } from "@mui/material";
import { TextField } from "../../textField/TextField";
import c from "./contactsSlide.module.scss";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import LocationIcon from "@mui/icons-material/LocationOn";
import { Link } from "./Link";
import { SocialNetworks } from "../../../pages/main/SocialNetworks";
import { Formik } from "formik";
import * as Yup from "yup";
import { useTheme } from "../../../../static/hooks/useTheme";
import { useDispatch } from "react-redux";
import { subscribeCustomer } from "../../../../redux/customerReducer";

export const ContactsSlide: React.FC = () => {
    const { theme, useThemeClasses } = useTheme();
    const dispatch = useDispatch();

    const initialValues = {fullName: '', email: '', howCanWeHelpYou: ''};
    const validateSchema = Yup.object().shape({
        fullName: Yup.string().min(1, 'Too short!').max(20, 'Too long').required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        howCanWeHelpYou: Yup.string().min(1, 'Too short!').max(200, 'Too long')
    });
    return <div className={c.contactsSlide}>
        <div className={c.rightSide}>
            <div className={c.signs}>
                <h3 className={c.sign1}>Contact us</h3>
                <p className={c.sign2}>Let's get to the next level together</p>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validateSchema}
                validateOnBlur={false}
                validateOnChange={false}
                onSubmit={(values, { resetForm, validateForm }) => {
                    validateForm();
                    dispatch(subscribeCustomer(values));
                    resetForm();
                }}
            >
                {({ values, errors, handleChange, handleSubmit}) => {
                    return <form className={c.formContainer} onSubmit={handleSubmit}>
                        <TextField className={c.textfield0} value={values.fullName} errorMessage={errors.fullName} label='Full name' placeholder='Enter your full name' typeAndName="fullName" onChange={handleChange} />
                        <TextField className={c.textfield1} value={values.email} errorMessage={errors.email} label='Email' placeholder='Enter your email' typeAndName="email" onChange={handleChange} />
                        <TextField className={c.textfield2} value={values.howCanWeHelpYou} errorMessage={errors.howCanWeHelpYou} label='How can we help you' placeholder='Enter how we can help you' typeAndName="howCanWeHelpYou" onChange={handleChange} />
                        <Button className={c.button} type='submit' variant='contained'>Send</Button>
                    </form>
                }}
            </Formik>
        </div>
        <div className={c.leftSide}>
            <div className={useThemeClasses(c.contactInformation, c.contactInformationDark, c.contactInformationLight)}>
                <a href='tel: +1 (647)-563-9114' className={c.contactContainer}>
                    <PhoneIcon />
                    <p>+1 (647)-563-9114</p>
                </a>
                <a href='mailto:lead@gmail.com?subject=Feel free to contact us!' className={c.contactContainer}>
                    <EmailIcon />
                    <p>lead@gmail.com</p>
                </a>
                <a href='https://maps.app.goo.gl/sB8R1rzpRw1Eke5H7' className={c.contactContainer}>
                    <LocationIcon />
                    <p>Margaretenstrabe 70/3, 1050 Vienna, Austria</p>
                </a>
            </div>
            <div className={useThemeClasses(c.usefulLinks, c.usefulLinksDark, c.usefulLinksLight)}>
                <Link name='Become a client' theme={theme} />
                <SocialNetworks className={c.socialNetworks} />
                <Link name='Become a partner' theme={theme === 'light' ? 'dark' : 'light'} />
                <Link name='Join lead team' theme={theme} />
            </div>
        </div>
    </div>
};