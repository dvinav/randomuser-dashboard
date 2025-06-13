import { NextRequest, NextResponse } from 'next/server'
import { UnsecuredJWT } from 'jose'
import isValidPhoneNumber from './util/isValidPhoneNumber'

const redirectRes = (path?: TemplateStringsArray) => NextResponse.redirect(new URL(`http://localhost:3000/${path || ''}`))

const clearAccessRes = () => {
  const res = redirectRes`auth`
  res.cookies.set({
    name: 'access',
    value: '',
    path: '/',
    maxAge: 0
  })
  return res
}

export const middleware = async (req: NextRequest) => {
  const accessToken = req.cookies.get('access')

  if (!accessToken) {
    return redirectRes`auth`
  }

  let payload
  try {
    payload = UnsecuredJWT.decode(accessToken.value).payload
  } catch {
    return clearAccessRes()
  }

  if (!isValidPhoneNumber(payload?.phone as string)) return clearAccessRes()

  return redirectRes`dashboard`
}

export const config = {
  matcher: ['/']
}
