import LabelInput from './labelInput'
import getString from '@/util/getString'

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11)

  return digits.replace(/^(\d{4})(\d{0,3})(\d{0,4})$/, (_, p1, p2, p3) => [p1, p2, p3].filter(Boolean).join(' '))
}

const PhoneInput: FC<{ value: string; setValue: React.Dispatch<React.SetStateAction<string>> }> = ({ value, setValue }) => {
  const handleChange = (e: CE<IE>) => {
    const raw = e.target.value
    const formatted = formatPhone(raw)
    setValue(formatted)
  }

  return (
    <LabelInput
      label={getString('phoneNumber')}
      inputProps={{ value, maxLength: 14, onChange: handleChange, placeholder: '0912 345 6789', type: 'tel' }}
    />
  )
}

export default PhoneInput
