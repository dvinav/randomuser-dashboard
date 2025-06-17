import styles from './styles.module.sass'
import { Typography } from '.'
import getString from '@/util/getString'

const ErrorText = () => {
  return <Typography className={styles.error}>{getString('errorOccured')}</Typography>
}

export default ErrorText
