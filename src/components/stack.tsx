import clsx from 'clsx'
import styles from './styles.module.sass'
import { CSSProperties } from 'react'

const Stack: LC<{ gap?: number; direction?: 'row' | 'column'; style?: CSSProperties }> = ({ children, gap, direction = 'column', style }) => (
  <div className={clsx(styles.stack, direction === 'row' && styles.rowStack)} style={{ gap: `${gap}px`, ...style }}>
    {children}
  </div>
)

export default Stack
