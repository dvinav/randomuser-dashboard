'use client'

import roboto from '@/fonts/roboto'
import '@/global.sass'
import { UserProvider } from '@/providers/user'

const RootLayout: LC = ({ children }) => (
  <html lang="en" className={roboto.className}>
    <body>
      <UserProvider>{children}</UserProvider>
    </body>
  </html>
)

export default RootLayout
