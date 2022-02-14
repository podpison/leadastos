import { Button } from "@mui/material";
import c from "./../forClientsPage.module.scss";
import { Formik } from "formik";
import { subscribeCustomer } from "../../../redux/customerReducer";
import { useDispatch } from "react-redux";
import { TextField } from "./../../commonComponents/textField/TextField";

const initialValues = {firstName: '', lastName: '', servicesYouPayFor: '', email: '', amount: '' };

export const ForClientsSlide: React.FC = () => {
    const dispatch = useDispatch();

    const validator = (value: string, fieldToErrors: string, errors: any, regExp: RegExp) => {
        if (value === '') {
            errors[fieldToErrors] = 'Required';
        } else if (!regExp.test(value)) {
            errors[fieldToErrors] = 'Invalid property';
        };
    };
    return <div className={c.forClientsSlide}>
        <p className={c.sign}>if you are an exiting customer and would like to pay the invoice, pleace follow the steps bellow</p>
        <Formik
            initialValues={initialValues}
            validate={(values) => {
                const errors = {} as any;
                values.firstName && validator(values.firstName, 'firstName', errors, /\p{L}/gu);
                values.lastName && validator(values.lastName, 'lastName', errors, /\p{L}/gu);
                values.email && validator(values.email, 'email', errors, /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
                values.servicesYouPayFor && validator(values.servicesYouPayFor, 'servicesYouPayFor', errors, /\p{L}/gu);
                values.amount && validator(values.amount, 'amount', errors, /\d+/);
                return errors;
            }}
            onSubmit={(values, {resetForm}) => {
                dispatch(subscribeCustomer(values));
                // resetForm(initialValues);
            }}
        >
            {({ handleSubmit, handleChange, values, errors, isSubmitting, setSubmitting }) => {
                return <>
                    <form className={c.form} onSubmit={handleSubmit}>
                        <TextField value={values.firstName} errorMessage={errors.firstName} label='First name' placeholder='Enter your first name' typeAndName='firstName' onChange={handleChange} />
                        <TextField value={values.lastName} errorMessage={errors.lastName} label='Last name' placeholder='Enter your last name' typeAndName='lastName' onChange={handleChange} />
                        <TextField value={values.email} errorMessage={errors.email} label='email' placeholder='Enter your email' typeAndName='email' onChange={handleChange} />
                        <TextField value={values.servicesYouPayFor} errorMessage={errors.servicesYouPayFor} label='Services you pay for' placeholder='Services you pay for' typeAndName='servicesYouPayFor' onChange={handleChange} />
                        <TextField value={values.amount} errorMessage={errors.amount} label='Amonut' placeholder='Amount' typeAndName='amount' onChange={handleChange} />
                        <Button className={c.button} type='submit' >Subscribe</Button>
                    </form>
                </>
            }}
        </Formik>
    </div>
};