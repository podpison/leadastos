import { TextField as MUITextField } from '@mui/material';
import c from "./textField.module.scss";
import { useTheme } from "./../../../static/hooks/useTheme";

type Props = {
    value: string | number
    errorMessage?: string | undefined
    label: string
    placeholder?: string
    typeAndName?: string
    className?: string
    onChange?: any
    disabled?: boolean
}

export const TextField: React.FC<Props> = ({value, errorMessage, label, placeholder, typeAndName, className, onChange, disabled}) => {
    const { useThemeClasses } = useTheme();
    return <MUITextField value={value} onChange={onChange} className={`${c.textField} ${className}`} error={errorMessage !== undefined} helperText={errorMessage} InputProps={{className: useThemeClasses(c.textFieldInput, c.textFieldInputDark)}} InputLabelProps={{shrink: true, className: useThemeClasses(c.textFieldLabel, c.textFieldLabelDark)}} label={label} placeholder={placeholder} name={typeAndName} type={typeAndName} disabled={disabled} />
};