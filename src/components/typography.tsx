import type { HTMLAttributes } from 'react'
import classes from './styles.module.sass'

const Typography: FC<{ variant?: 'title' | 'span' } & HTMLAttributes<HTMLElement>> = props => (
  <span className={classes[props.variant || 'span']} {...props} />
)

export default Typography
