import { TextField as MUITextField } from '@mui/material';
import c from "./textField.module.scss";
import { useTheme } from "./../../../static/hooks/useTheme";
import { useDispatch } from "react-redux";
import { customerActions } from "./../../../redux/customerReducer";

type Props = {
    value: string
    errorMessage?: string | undefined
    label: string
    placeholder?: string
    typeAndName?: string
    className?: string
    onChange?: any
    disabled?: boolean
    reduxName?: 'firstName' | 'lastName' | 'email' //to save field values after recreating the for clients form
}

export const TextField: React.FC<Props> = ({value, errorMessage, label, placeholder, typeAndName, className, onChange, disabled, reduxName}) => {
    const { useThemeClasses } = useTheme();
    const dispatch = useDispatch();
    const changeValue = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        onChange(e);
        if (reduxName) {
            dispatch(customerActions.changeFieldValue(reduxName, e.target.value));
        }
    }
    return <MUITextField variant='outlined' value={value} onChange={changeValue} className={`${c.textField} ${className}`} error={errorMessage !== undefined} helperText={errorMessage} InputProps={{className: useThemeClasses(c.textFieldInput, c.textFieldInputDark), classes: { notchedOutline: useThemeClasses('', c.textFieldBorderDark) }}} InputLabelProps={{shrink: true, className: useThemeClasses(c.textFieldLabel, c.textFieldLabelDark)}} label={label} placeholder={placeholder} name={typeAndName} type={typeAndName} disabled={disabled} />
};