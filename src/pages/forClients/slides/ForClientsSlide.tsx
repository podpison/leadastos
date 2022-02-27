import { Button } from "@mui/material";
import c from "./../forClientsPage.module.scss";
import { Formik } from "formik";
import { subscribeCustomer } from "../../../redux/customerReducer";
import { useDispatch } from "react-redux";
import { TextField } from "./../../commonComponents/textField/TextField";
import * as Yup from "yup";

const initialValues = {firstName: '', lastName: '', servicesYouPayFor: '', email: '', amount: '' };
const validateSchema = Yup.object().shape({
    firstName: Yup.string().min(1, 'Too short!').max(15, 'Too long').required('Required'),
    lastName: Yup.string().min(1, 'Too short!').max(15, 'Too long').required('Required'),
    servicesYouPayFor: Yup.string().min(5, 'Too short').max(100, 'Too long').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    amount: Yup.string().min(1, 'Too short!').max(8, 'Too long').required('Required'),
});

export const ForClientsSlide: React.FC = () => {
    const dispatch = useDispatch();

    return <div className={c.forClientsSlide}>
        <p className={c.sign}>if you are an exiting customer and would like to pay the invoice, pleace follow the steps bellow</p>
        <Formik
            initialValues={initialValues}
            validationSchema={validateSchema}
            onSubmit={(values, {resetForm}) => {
                dispatch(subscribeCustomer(values));
                resetForm();
            }}
        >
            {({ handleSubmit, handleChange, values, errors, isSubmitting }) => {
                return <>
                    <form className={c.form} onSubmit={handleSubmit}>
                        <TextField className={c.textField1} value={values.firstName} errorMessage={errors.firstName} label='First name' placeholder='Enter your first name' typeAndName='firstName' onChange={handleChange} />
                        <TextField className={c.textField2} value={values.lastName} errorMessage={errors.lastName} label='Last name' placeholder='Enter your last name' typeAndName='lastName' onChange={handleChange} />
                        <TextField className={c.textField3} value={values.email} errorMessage={errors.email} label='email' placeholder='Enter your email' typeAndName='email' onChange={handleChange} />
                        <TextField className={c.textField4} value={values.servicesYouPayFor} errorMessage={errors.servicesYouPayFor} label='Services you pay for' placeholder='Services you pay for' typeAndName='servicesYouPayFor' onChange={handleChange} />
                        <TextField className={c.textField5} value={values.amount} errorMessage={errors.amount} label='Amonut' placeholder='Amount' typeAndName='amount' onChange={handleChange} />
                        <Button className={c.button} disabled={isSubmitting} type='submit' >Subscribe</Button>
                    </form>
                </>
            }}
        </Formik>
    </div>
};