import roboto from '@/fonts/roboto'
import '@/global.sass'

const RootLayout: LC = ({ children }) => (
  <html lang="en" className={roboto.className}>
    <body>{children}</body>
  </html>
)

export default RootLayout
