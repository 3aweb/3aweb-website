import { nunito } from '@/app/fonts'
import '../styles/common.scss'

export const metadata = {
  title: '3aweb',
  description: 'Визная карточка 3aweb. Ссылки и соц сетки'
}

export default function RootLayout({ children }) {
  return (
    <html lang='ru'
      style={{
        '--font-nunito': nunito.style.fontFamily
      }}
    >
    <body>
    {children}
    </body>
    </html>
  )
}
