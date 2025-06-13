import isValidPhoneNumber from '@/util/isValidPhoneNumber'
import { describe, it } from 'bun:test'

describe('phone number validation', () => {
  it('should return true if in 09XXXXXXXX format', () => isValidPhoneNumber('09020092004'))
  it('should return true if in +989XXXXXXXX format', () => isValidPhoneNumber('+989020092004'))
  it('should return false if incorrect format', () => isValidPhoneNumber('0'))
})
