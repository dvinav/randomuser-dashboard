const validatePhone = (phone: string): boolean => {
  return /^(\+98|0)?9\d{9}$/.test(phone)
}

export default validatePhone
