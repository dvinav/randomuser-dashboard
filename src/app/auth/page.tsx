'use client'

import { Button, ErrorText, Typography } from '@c/common'
import getString from '@/util/getString'
import { AuthContainer, AuthFormBox } from '@c/auth'
import PhoneInput from '@/components/common/phoneInput'
import Stack from '@/components/common/stack'
import useUser from '@/hooks/useUser'
import { useState } from 'react'

const AuthPage = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [show, setShow] = useState(true)
  const { setUserInfo } = useUser()

  const handleSubmit = async (e: SE) => {
    e.preventDefault()
    setError(false)
    setLoading(true)
    const res = await fetch('https://randomuser.me/api/?results=1&nat=us')
    if (res) {
      setLoading(false)
      if (!res.ok) setError(true)
      else {
        try {
          const json = await res.json()
          setUserInfo(json)
          setDisabled(true)
          setShow(false)
        } catch (e) {
          setError(true)
        }
      }
    }
  }

  return (
    <AuthContainer show={show}>
      <AuthFormBox onSubmit={handleSubmit}>
        <Stack>
          <Typography variant="title">{getString('welcome')}</Typography>
          <Typography>{getString('loginDesc')}</Typography>
        </Stack>
        <Stack gap={0}>
          <PhoneInput setDisabled={setDisabled} />
          {error && <ErrorText />}
        </Stack>
        <Button fullwidth type="submit" disabled={disabled} loading={loading}>
          {getString('login')}
        </Button>
      </AuthFormBox>
    </AuthContainer>
  )
}

export default AuthPage
