import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
  const [session, loading] = useSession()
  console.log('sestion nhan :', session);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Test đăng nhập google</h1>
      <main className={styles.main}>
        <div>
          <button onClick={() => signIn()}>SIGN IN</button>
          <button onClick={() => signOut()}>SIGN OUT</button>
        </div>
        <div>
          <Link href='/form'>
            <button>Form test</button>
          </Link>
        </div>
      </main>
    </div>
  )
}
