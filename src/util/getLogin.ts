import validatePhone from '@u/validatePhone'
import { parse } from 'cookie'
import { UnsecuredJWT } from 'jose'

const getLogin = () => {
  const cookies = parse(document.cookie)

  let payload

  try {
    payload = cookies.token ? UnsecuredJWT.decode(cookies.token).payload : undefined
  } catch {
    console.error('Error reading token')
  }

  const phone = payload?.phone as string

  return phone && validatePhone(phone.replaceAll(' ', ''))
}

export default getLogin
