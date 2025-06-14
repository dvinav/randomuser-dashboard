import { Button, Input, Typography } from '@c/common'
import getString from '@/util/getString'
import { AuthContainer, AuthFormBox } from '@c/auth'

const AuthPage = () => {
  return (
    <AuthContainer>
      <AuthFormBox>
        <Typography variant="title">{getString('welcome')}</Typography>
        <Input />
        <Button fullWidth>{getString('login')}</Button>
      </AuthFormBox>
    </AuthContainer>
  )
}

export default AuthPage
