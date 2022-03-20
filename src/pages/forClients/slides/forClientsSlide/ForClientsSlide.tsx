import { Button } from "@mui/material";
import c from "./../../forClientsPage.module.scss";
import { Formik } from "formik";
import { subscribeCustomer } from "../../../../redux/customerReducer";
import { getServicesYouPayForSelector, getContactUsFormData } from "../../../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "../../../commonComponents/textField/TextField";
import * as Yup from "yup";
import { ServicesYouPayFor } from "./ServicesYouPayFor";

export const ForClientsSlide: React.FC = () => {
    const dispatch = useDispatch();
    let servicesYouPayFor = useSelector(getServicesYouPayForSelector);
    let totalAmount = servicesYouPayFor.reduce((sum, currentService) => sum + currentService.price, 0);

    const initialValues = useSelector(getContactUsFormData);
    const validateSchema = Yup.object().shape({
        firstName: Yup.string().min(1, 'Too short!').max(15, 'Too long').required('Required'),
        lastName: Yup.string().min(1, 'Too short!').max(15, 'Too long').required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        servicesYouPayFor: Yup.array().of(Yup.object().shape({
            name: Yup.string(),
            price: Yup.number()
        })).test('servicesYouPayFor', 'the array must have at least 1 object', value => {
            return servicesYouPayFor.length !== 0 ? true : false;
        })
    });

    return <div className={c.forClientsSlide}>
        <p className={c.sign}>if you are an exiting customer and would like to pay the invoice, pleace follow the steps bellow</p>
        <Formik
            initialValues={initialValues}
            validationSchema={validateSchema}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={(values, { resetForm, validateForm }) => {
                validateForm();
                dispatch(subscribeCustomer({ ...values, servicesYouPayFor, amount: totalAmount }));
                resetForm();
            }}
        >
            {({ handleSubmit, handleChange, values, errors }) => {
                return <>
                    <form className={c.form} onSubmit={handleSubmit}>
                        <div className={c.textFieldsAndButton}>
                            <TextField className={c.textField0} value={values.firstName} reduxName='firstName' errorMessage={errors.firstName} label='First name' placeholder='Enter your first name' typeAndName='firstName' onChange={handleChange} />
                            <TextField className={c.textField1} value={values.lastName} reduxName='lastName' errorMessage={errors.lastName} label='Last name' placeholder='Enter your last name' typeAndName='lastName' onChange={handleChange} />
                            <TextField className={c.textField2} value={values.email} reduxName='email' errorMessage={errors.email} label='email' placeholder='Enter your email' typeAndName='email' onChange={handleChange} />
                            <div className={c.buttonAndTotalAmount}>
                                <Button className={c.button} type='submit' >Subscribe</Button>
                                <p className={c.totalAmount}>Total: {totalAmount} $</p>
                            </div>
                        </div>
                        <ServicesYouPayFor />
                    </form>
                </>
            }}
        </Formik>
    </div>
};