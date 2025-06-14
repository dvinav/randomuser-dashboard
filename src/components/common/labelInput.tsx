import { InputHTMLAttributes } from 'react'
import classes from './styles.module.sass'
import Typography from './typography'
import Input from './input'

interface Props {
  label: string
  inputProps: InputHTMLAttributes<HTMLInputElement>
}

const LabelInput: FC<Props> = ({ label, inputProps }) => {
  return (
    <div className={classes.labelInput__container}>
      <Typography>{label}</Typography>
      <Input {...inputProps} />
    </div>
  )
}

export default LabelInput
