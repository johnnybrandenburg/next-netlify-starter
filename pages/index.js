import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Days Since Last CSO Mole Attack!</title>
      </Head>

      <main>
        <Header title="Days Since Last CSO Mole Attack:" />

        <p> 0 </p>
      </main>

      <Footer />
    </div>
  )
}
