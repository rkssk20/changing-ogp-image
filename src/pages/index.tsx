import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export const getStaticProps = async() => {
  const time = new Date()

  return {
    props: {
      time: String(time)
    },
    revalidate: 15,
  }
}

type Props = {
  time: string
}

const Home: NextPage<Props> = ({ time }) => {
  const base_time = new Date(time)
  const result_time = base_time.getMonth() + '月' + base_time.getDate() + '日 ' + base_time.getHours() + ':' + base_time.getMinutes() + ':' + base_time.getSeconds()

  return (
    <div className={styles.container}>
      <Head>
        <title>{ result_time }</title>
        <meta property="og:url" content="/" />
        <meta property="og:image" content="ページのアイキャッチ画像のURL" />
        <meta property="og:title" content="ページのタイトル" />
        <meta property="og:description" content={ result_time } />

        <meta name="twitter:card" content="summary_large_image" />

        <meta property="fb:app_id" content="" />
        <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
      </Head>

      <h3>{ result_time }</h3>
    </div>
  )
}

export default Home
