import clsx from 'clsx'
import styles from './styles.module.sass'

interface Props {
  color?: 'primary' | 'danger'
}

const Spinner: FC<Props> = ({ color = 'primary' }) => (
  <svg className={styles.spinner} viewBox="0 0 100 100" width="28" height="28">
    <path className={clsx(styles.thumb, color === 'danger' && styles.dangerThumb)} d="M50,10 A40,40 0 0,1 85.64,31.64" fill="none" />
  </svg>
)

export default Spinner
