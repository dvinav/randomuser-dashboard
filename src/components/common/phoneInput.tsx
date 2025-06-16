import { useEffect, useState } from 'react'
import LabelInput from './labelInput'
import getString from '@/util/getString'

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11)

  return digits.replace(/^(\d{4})(\d{0,3})(\d{0,4})$/, (_, p1, p2, p3) => [p1, p2, p3].filter(Boolean).join(' '))
}

const PhoneInput: FC<{ setDisabled: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setDisabled }) => {
  const [value, setValue] = useState('')

  const handleChange = (e: CE<IE>) => {
    const raw = e.target.value
    const formatted = formatPhone(raw)
    setValue(formatted)
  }

  useEffect(() => {
    if (value.length >= 13) setDisabled(false)
    else setDisabled(true)
  }, [value])

  return (
    <LabelInput
      label={getString('phoneNumber')}
      inputProps={{ value, maxLength: 14, onChange: handleChange, placeholder: '0912 345 6789', type: 'tel' }}
    />
  )
}

export default PhoneInput
