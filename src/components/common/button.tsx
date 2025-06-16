import type { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.sass'
import clsx from 'clsx'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullwidth?: boolean
  loading?: boolean
}

const Button: LC<Props> = props => (
  <button {...props} disabled={props.loading || props.disabled} className={clsx(styles.button, props.fullwidth && styles.button__fullwidth)}>
    {props.loading ? (
      <svg className={styles.spinner} viewBox="0 0 100 100" width="28" height="28">
        <path className={styles.thumb} d="M50,10 A40,40 0 0,1 85.64,31.64" fill="none" />
      </svg>
    ) : (
      props.children
    )}
  </button>
)

export default Button
