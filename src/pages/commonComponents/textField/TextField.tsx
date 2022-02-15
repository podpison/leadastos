import { TextField as MUITextField } from '@mui/material';
import c from "./textField.module.scss";

type Props = {
    value: string
    errorMessage: string | undefined
    label: string
    placeholder: string
    typeAndName: string
    onChange: any
}

export const TextField: React.FC<Props> = ({value, errorMessage, label, placeholder, typeAndName, onChange}) => {
    return <MUITextField value={value} onChange={onChange} className={c.textField} error={errorMessage !== undefined} helperText={errorMessage} InputProps={{className: c.textFieldInput}} InputLabelProps={{shrink: true, className: c.textFieldLabel}} label={label} placeholder={placeholder} name={typeAndName} type={typeAndName} />
};