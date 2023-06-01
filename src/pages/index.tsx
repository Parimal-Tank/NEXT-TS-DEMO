import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import User from '@/components/User'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  const userData = {
    Firstname: 'Parimal',
    LastName: 'Tank'
  }

  return (
    <>
      <div>
        <User user={userData} />
      </div>
    </>
  )
}
