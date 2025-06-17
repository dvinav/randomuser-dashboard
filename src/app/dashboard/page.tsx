'use client'

import getLogin from '@u/getLogin'
import { Button, ContainerBox, ProfilePicture, Stack, Typography } from '@c'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import useUser from '@h/useUser'
import getString from '@/util/getString'

const DashboardPage = () => {
  const [show, setShow] = useState(true)
  const { push } = useRouter()
  const { user, clearUser } = useUser()

  useEffect(() => {
    if (show && !getLogin()) push('/auth')
  }, [])

  const handleLogout = () => {
    setShow(false)
    setTimeout(() => {
      clearUser()
      document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
      push('/auth')
    }, 300)
  }

  return (
    <ContainerBox show={show}>
      <Stack gap={48}>
        <Stack direction="row" style={{ alignItems: 'center' }} gap={32}>
          {user && (
            <>
              <ProfilePicture src={user.picture.large} width="20%" />
              <Typography variant="title">Welcome {user.name.first}!</Typography>
            </>
          )}
        </Stack>
        <Button color="danger" onClick={handleLogout}>
          {getString('logout')}
        </Button>
      </Stack>
    </ContainerBox>
  )
}

export default DashboardPage
