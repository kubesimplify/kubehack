import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 min-h-screen text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
