import clsx from 'clsx'
import styles from './styles.module.sass'

interface Props {
  show: boolean
  onSubmit?: (e: SE) => void
  component?: 'div' | 'form'
}

const ContainerBox: LC<Props> = ({ children, show, onSubmit, component = 'div' }) => {
  const Comp = component

  return (
    <Comp className={clsx(styles.containerBox, !show && styles.hide)} onSubmit={onSubmit}>
      {children}
    </Comp>
  )
}

export default ContainerBox
