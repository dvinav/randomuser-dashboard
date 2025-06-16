import type { ButtonHTMLAttributes } from 'react'
import classes from './styles.module.sass'
import clsx from 'clsx'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullwidth?: true
}

const Button: LC<Props> = props => <button {...props} className={clsx(classes.button, props.fullwidth && classes.button__fullwidth)} />

export default Button
