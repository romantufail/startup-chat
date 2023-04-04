import { Button, Space } from 'antd'
import Head from 'next/head'
import Image from 'next/image'
import TreeRender from '../components/TreeRender'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <main>
        <div className='text-3xl text-green-400'>
          hello world
        </div>
      </main>
    </div>
  )
}