import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Content from '../components/Content'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <Content />
      </main>

      <div>
        {/* Music Player */}
      </div>

    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  return {
    props: {
      session
    }
  }
}
