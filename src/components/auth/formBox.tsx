import classes from './styles.module.sass'

const AuthFormBox: LC<{ onSubmit: (e: SE) => void }> = ({ children, onSubmit }) => (
  <form className={classes.formBox} onSubmit={onSubmit}>
    {children}
  </form>
)

export default AuthFormBox
