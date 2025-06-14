import type { InputHTMLAttributes } from 'react'
import classes from './styles.module.sass'

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = props => <input {...props} className={classes.input} />

export default Input
