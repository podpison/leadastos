import { Button } from "@mui/material";
import c from "./../forClientsPage.module.scss";
import { Formik } from "formik";
import { subscribeCustomer, customerActions } from "../../../../redux/customerReducer";
import { getServicesYouPayForSelector } from "../../../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "../../../commonComponents/textField/TextField";
import * as Yup from "yup";
import { ServicesYouPayFor } from "./ServicesYouPayFor";

const initialValues = {firstName: '', lastName: '', email: ''};
const validateSchema = Yup.object().shape({
    firstName: Yup.string().min(1, 'Too short!').max(15, 'Too long').required('Required'),
    lastName: Yup.string().min(1, 'Too short!').max(15, 'Too long').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

export const ForClientsSlide: React.FC = () => {
    const dispatch = useDispatch();
    let servicesYouPayFor = useSelector(getServicesYouPayForSelector);
    let totalAmount = servicesYouPayFor.reduce((sum, currentService) => sum + currentService.price, 0);

    return <div className={c.forClientsSlide}>
        <p className={c.sign}>if you are an exiting customer and would like to pay the invoice, pleace follow the steps bellow</p>
        <Formik
            initialValues={initialValues}
            validationSchema={validateSchema}
            onSubmit={(values, {resetForm}) => {
                dispatch(subscribeCustomer({...values, servicesYouPayFor, amount: totalAmount }));
                dispatch(customerActions.deleteAllServicesForPaying());
                resetForm();
            }}
        >
            {({ handleSubmit, handleChange, values, errors, isSubmitting }) => {
                return <>
                    <form className={c.form} onSubmit={handleSubmit}>
                        <TextField className={c.textField1} value={values.firstName} errorMessage={errors.firstName} label='First name' placeholder='Enter your first name' typeAndName='firstName' onChange={handleChange} />
                        <TextField className={c.textField2} value={values.lastName} errorMessage={errors.lastName} label='Last name' placeholder='Enter your last name' typeAndName='lastName' onChange={handleChange} />
                        <TextField className={c.textField3} value={values.email} errorMessage={errors.email} label='email' placeholder='Enter your email' typeAndName='email' onChange={handleChange} />
                        <ServicesYouPayFor />
                        <TextField disabled={true} className={c.textField5} value={totalAmount} label='Amonut' />
                        <Button className={c.button} disabled={isSubmitting} type='submit' >Subscribe</Button>
                    </form>
                </>
            }}
        </Formik>
    </div>
};