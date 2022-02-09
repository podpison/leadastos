import { Button, TextField } from "@mui/material";
import c from "./../forClientsPage.module.scss";
import { Formik } from "formik";
import { subscribeCustomer } from "../../../redux/customerReducer";
import { useDispatch } from "react-redux";

export const ForClientsSlide: React.FC = () => {
    const dispatch = useDispatch();

    const validator = (value: string | number, fieldToErrors: string, errors: any, regExp: RegExp) => {
        if (!value) {
            errors[fieldToErrors] = 'Required';
        } else if (!regExp.test(value.toString())) {
            errors[fieldToErrors] = 'Invalid property';
        };
    }
    return <div className={c.forClientsSlide}>
        <p className={c.sign}>if you are an exiting customer and would like to pay the invoice, pleace follow the steps bellow</p>
        <Formik
            initialValues={{ firstName: '', lastName: '', servicesYouPayFor: '', email: '', amount: 0 }}
            validate={(values) => {
                const errors = {} as any;
                validator(values.firstName, 'firstName', errors, /\p{L}/gu);
                validator(values.lastName, 'lastName', errors, /\p{L}/gu);
                validator(values.email, 'email', errors, /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
                validator(values.servicesYouPayFor, 'servicesYouPayFor', errors, /\p{L}/gu);
                validator(values.amount, 'amount', errors, /\d+/);
                return errors;
            }}
            onSubmit={(values) => {
                dispatch(subscribeCustomer(values));
            }}
        >
            {({ handleSubmit, handleChange, handleBlur, values, errors, isSubmitting }) => (
                <>
                    <form className={c.form} onSubmit={handleSubmit}>
                        <TextField className={c.textField} error={errors.firstName !== undefined} helperText={errors.firstName} InputProps={{className: c.textFieldInput}} InputLabelProps={{shrink: true, className: c.textFieldLabel}} label='First name' placeholder='Enter your first name' type='firstName' name='firstName' onChange={handleChange} onBlur={handleBlur} value={values.firstName} />
                        <TextField className={c.textField} error={errors.lastName !== undefined} helperText={errors.lastName} InputProps={{className: c.textFieldInput}} InputLabelProps={{shrink: true, className: c.textFieldLabel}} label='Last name' placeholder='Enter your last name' type='lastName' name='lastName' onChange={handleChange} onBlur={handleBlur} value={values.lastName} />
                        <TextField className={c.textField} error={errors.email !== undefined} helperText={errors.email} InputProps={{className: c.textFieldInput}} InputLabelProps={{shrink: true, className: c.textFieldLabel}} label='Email' placeholder='Enter your email' type='email' name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} />
                        <TextField className={c.textField} error={errors.servicesYouPayFor !== undefined} helperText={errors.servicesYouPayFor} InputProps={{className: c.textFieldInput}} InputLabelProps={{shrink: true, className: c.textFieldLabel}} label='Services you pay for' placeholder='Services you pay for' type='servicesYouPayFor' name='servicesYouPayFor' onChange={handleChange} onBlur={handleBlur} value={values.servicesYouPayFor} />
                        <TextField className={c.textField} error={errors.amount !== undefined} helperText={errors.amount} InputProps={{className: c.textFieldInput}} InputLabelProps={{shrink: true, className: c.textFieldLabel}} label='Amonut' placeholder='Amount' type='amount' name='amount' onChange={handleChange} onBlur={handleBlur} value={values.amount} />
                        <Button className={c.button} type='submit' disabled={isSubmitting}>Subscribe</Button>
                    </form>
                </>
            )}
        </Formik>
    </div>
};