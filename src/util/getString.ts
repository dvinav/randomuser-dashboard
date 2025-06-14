import enUS from '@/translations/en-US.json'

const getString = (key: keyof typeof enUS) => enUS[key]

export default getString
