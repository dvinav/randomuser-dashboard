import { describe, it, expect } from 'bun:test'
import { middleware } from '@/middleware'
import { NextRequest } from 'next/server'
import { UnsecuredJWT } from 'jose'

const appUrl = (path?: TemplateStringsArray) => `http://localhost/${path || ''}`

const createMockRequest = (cookieValue: string | null, httpOnly: boolean = true) =>
  ({
    url: new URL(appUrl()),
    cookies: {
      get: (_key: string) => ({
        value: cookieValue,
        httpOnly: httpOnly
      })
    }
  } as unknown as NextRequest)

describe('middleware', () => {
  it('redirects to /auth if no cookie exists', async () => {
    const req = createMockRequest(null)
    const res = await middleware(req)
    expect(res.headers.get('location')).toBe(appUrl`auth`)
  })

  it('redirects to /auth and clears cookie if phone number is invalid', async () => {
    const JWT = new UnsecuredJWT({ phone: '0' })
    const req = createMockRequest(JWT.encode(), true)
    const res = await middleware(req)
    expect(res.headers.get('location')).toBe(appUrl`auth`)
  })

  it('redirects to /dashboard if valid httponly iran phone number exists', async () => {
    const JWT = new UnsecuredJWT({ phone: '09020092004' })
    const req = createMockRequest(JWT.encode(), true)
    const res = await middleware(req)
    expect(res.headers.get('location')).toBe(appUrl`dashboard`)
  })
})
