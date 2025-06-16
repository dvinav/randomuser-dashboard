'use client'

import { Button, Typography } from '@c/common'
import getString from '@/util/getString'
import { AuthContainer, AuthFormBox } from '@c/auth'
import PhoneInput from '@/components/common/phoneInput'
import Stack from '@/components/common/stack'

const AuthPage = () => {
  return (
    <AuthContainer>
      <AuthFormBox>
        <Stack>
          <Typography variant="title">{getString('welcome')}</Typography>
          <Typography>{getString('loginDesc')}</Typography>
        </Stack>
        <PhoneInput />
        <Button fullwidth>{getString('login')}</Button>
      </AuthFormBox>
    </AuthContainer>
  )
}

export default AuthPage
