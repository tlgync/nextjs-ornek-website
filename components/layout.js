import Head from 'next/head'

import Navigation from '../components/navigation'

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Tolga Yonca Web Site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer>design by Tolga Yonca</footer>
    </div>
  )
}

export default Layout
