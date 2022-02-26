export const useValidator = (value: string, fieldToErrors: string, errors: any, regExp: RegExp) => {
    if (value === '') {
        errors[fieldToErrors] = 'Required';
    } else if (!regExp.test(value)) {
        errors[fieldToErrors] = 'Invalid property';
    };
};