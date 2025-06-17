import type { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.sass'
import clsx from 'clsx'
import Spinner from './spinner'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullwidth?: boolean
  loading?: boolean
  color?: 'primary' | 'danger'
}

const Button: LC<Props> = props => (
  <button
    {...props}
    disabled={props.loading || props.disabled}
    className={clsx(styles.button, props.fullwidth && styles.button__fullwidth, props.color === 'danger' && styles.dangerBtn)}
  >
    {props.loading ? <Spinner /> : props.children}
  </button>
)

export default Button
