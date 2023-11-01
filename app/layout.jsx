
import './globals.css'

export const metadata = {
  title: 'complaint',
  description: 'complaintz management systenm',
}

export default function RootLayout({ children }) {
  return (
    <html className='bg-black' lang="en">
      <body>
        <main className={"app"}>{children}</main>
        </body>
      
    </html>
  )
}