import Head from 'next/head';
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css';
import About from "./About";


export default function Home() {
  return (
    <div>
      <Head>
        <title>ZonoWorks</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </div>
  )
}
