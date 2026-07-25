import './globals.css'

export const metadata = {
  title: 'Scarcity Engine',
  description: 'High-intent execution environment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
