import Head from 'next/head'
import Banner from '../components/banner'

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full">
        <Banner />
      </main>

     
    </div>
  )
}
