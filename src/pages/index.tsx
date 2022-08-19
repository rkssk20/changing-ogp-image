import { useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import crypto from 'crypto'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export const getStaticProps = async() => {
  const time = new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000))
  const base_time = new Date(time)
  const result_time = (base_time.getMonth() + 1) + '/' + base_time.getDate() + ' ' + base_time.getHours() + ':' + base_time.getMinutes() + ':' + base_time.getSeconds()

  if(typeof process.env.NEXT_PUBLIC_KEY !== 'string') return { notFound: true }

  const cipher = crypto.createCipheriv("aes-256-cbc", process.env.NEXT_PUBLIC_KEY, crypto.randomBytes(16))
  const crypted = cipher.update(result_time, 'utf-8', 'hex')
  const crypted_text = crypted + cipher.final('hex')

  return {
    props: {
      time: String(result_time),
      ct: crypted_text
    },
    revalidate: 15,
  }
}

type Props = {
  time: string
  ct: string
}

const Home: NextPage<Props> = ({ time, ct }) => {
  const router = useRouter()

  const url = process.env.NEXT_PUBLIC_URL + router.asPath

  useEffect(() =>{
    router.push({
      pathname: router.pathname,
      query: { ct }
    }, undefined, {
      shallow: true
    });
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{ time }</title>
        <meta property="og:url" content="/" />
        <meta property="og:image" content={ `https://og-image-rust-eta.vercel.app/${ time }.png` } />
        <meta property="og:title" content="ページのタイトル" />
        <meta property="og:description" content={ time } />

        <meta name="twitter:card" content="summary_large_image" />

        <meta property="fb:app_id" content="" />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
      </Head>

      <h2 className={ styles.title }>{ 'Cache time: ' + time }</h2>

      <h4 className={ styles.title }>15秒おきのISRでキャッシュした時間を表示します。</h4>

      <h5 className={ styles.sub_title }>このページを共有してOGPを確認する。</h5>

      <div className={ styles.button_field }>
        <button className={ styles.button } onClick={ handleCopy }>URLをコピー</button>

        <a
          href={ `https://twitter.com/share?url=${ url }` }
          target='_blank'
          rel='nofollow noopener noreferrer'
        >
          <button className={ styles.button }>Twitterでツイート</button>
        </a>
      </div>


      <div className={ styles.image_field }>
        <Image
          src={ `https://og-image-rust-eta.vercel.app/${ time }.png` }
          alt='現在時刻'
          layout="fill"
          objectFit="cover"
          placeholder='blur'
          blurDataURL='/CutePet.png'
        />
      </div>
    </div>
  )
}

export default Home
