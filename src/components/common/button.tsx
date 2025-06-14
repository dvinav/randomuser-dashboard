import type { ButtonHTMLAttributes } from 'react'
import classes from './styles.module.sass'
import clsx from 'clsx'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: true
}

const Button: LC<Props> = props => <button {...props} className={clsx(classes.button, props.fullWidth && classes.button__fullWidth)} />

export default Button
