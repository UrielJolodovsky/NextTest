import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from './components/login'

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <div>
      <Head>
        <title>NextApp</title>
      </Head>
      <h1 id='titulo'>Apendiendo Next.js desde cero</h1>
      <Login />
    </div>
  )
}
export default Home;
