'use client'

import { Button, ErrorText, Typography, ContainerBox, PhoneInput, Stack } from '@c'
import getString from '@u/getString'
import useUser from '@h/useUser'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { serialize } from 'cookie'
import { UnsecuredJWT } from 'jose'
import getLogin from '@/util/getLogin'

const AuthPage = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [value, setValue] = useState('')
  const [show, setShow] = useState(true)
  const { setUser } = useUser()
  const { push } = useRouter()

  useEffect(() => {
    if (getLogin()) push('/dashboard')
  }, [])

  const handleSubmit = async (e: SE) => {
    e.preventDefault()
    setError(false)
    setLoading(true)
    const res = await fetch('https://randomuser.me/api/?results=1&nat=us')
    if (res) {
      if (!res.ok) setError(true)
      else {
        try {
          const json = await res.json()
          setUser(json.results[0])
          setDisabled(true)
          const jwt = new UnsecuredJWT({ phone: value })
          const cookieStr = serialize('token', jwt.encode(), {
            path: '/',
            maxAge: 60 * 60 * 24
          })
          document.cookie = cookieStr
          setLoading(false)
          setShow(false)
          setTimeout(() => push('/dashboard'), 200)
        } catch (e) {
          setLoading(false)
          setError(true)
        }
      }
    }
  }

  useEffect(() => {
    if (value.length >= 13) setDisabled(false)
    else setDisabled(true)
  }, [value])

  return (
    <ContainerBox show={show} onSubmit={handleSubmit} component="form">
      <Stack>
        <Typography variant="title">{getString('welcome')}</Typography>
        <Typography>{getString('loginDesc')}</Typography>
      </Stack>
      <Stack gap={0}>
        <PhoneInput setValue={setValue} value={value} />
        {error && <ErrorText />}
      </Stack>
      <Button fullwidth type="submit" disabled={disabled} loading={loading}>
        {getString('login')}
      </Button>
    </ContainerBox>
  )
}

export default AuthPage
