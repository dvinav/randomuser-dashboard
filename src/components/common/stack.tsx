import styles from './styles.module.sass'

const Stack: LC<{ gap?: number }> = ({ children, gap }) => (
  <div className={styles.stack} style={{ gap: `${gap}px` }}>
    {children}
  </div>
)

export default Stack
