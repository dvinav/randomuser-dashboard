import classes from './styles.module.sass'

const Container: LC<{ show: boolean }> = ({ children, show }) => (
  <div className={classes.container} style={{ opacity: show ? 1 : 0 }}>
    {children}
  </div>
)

export default Container
