'use client'

import { ContainerBox } from '@c'
import roboto from '@/fonts/roboto'
import '@/global.sass'

const RootLayout: LC = ({ children }) => (
  <html lang="en" className={roboto.className}>
    <head>
      <title>A Simple Login Page</title>
    </head>
    <body>{children}</body>
  </html>
)

export default RootLayout
