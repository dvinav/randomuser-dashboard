'use client'

import getLogin from '@u/getLogin'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const RedirectBasedOnAuthStatus = () => {
  const router = useRouter()

  useEffect(() => {
    if (getLogin()) router.push('/dashboard')
    else router.push('/auth')
  }, [])

  return <></>
}

export default RedirectBasedOnAuthStatus
