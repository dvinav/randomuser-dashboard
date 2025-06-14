'use client'

import validatePhone from '@u/validatePhone'
import { parse } from 'cookie'
import { UnsecuredJWT } from 'jose'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const RedirectBasedOnAuthStatus = () => {
  const router = useRouter()

  useEffect(() => {
    const cookies = parse(document.cookie)

    let payload

    try {
      payload = cookies.token ? UnsecuredJWT.decode(cookies.token).payload : undefined
    } catch {
      console.error('Error reading token')
    }

    const phone = payload?.phone as string

    if (phone && validatePhone(phone)) router.push('/dashboard')
    else router.push('/auth')
  }, [])

  return <></>
}

export default RedirectBasedOnAuthStatus
