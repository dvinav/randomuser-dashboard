import Image from 'next/image'
import styles from './styles.module.sass'

interface Props {
  src: string
  width: string
}

const ProfilePicture: FC<Props> = ({ src, width }) => (
  <div className={styles.pfp} style={{ width }}>
    <Image src={src} alt="user" fill style={{ objectFit: 'cover' }} />
  </div>
)

export default ProfilePicture
