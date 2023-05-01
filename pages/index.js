import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ResponsiveCalendar } from '@nivo/calendar'


export default function Home() {

  const data = [
    {
      "value": 299,
      "day": "2023-08-28"
    }
  ]
  return (
    <div className={styles.container}>
      <Head>
        <title>Yearly Review</title>
        <meta name="description" content="My Yearly Review" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ResponsiveCalendar
          data={data}
          from="2023-01-01"
          to="2023-12-31"
          emptyColor="#eeeeee"
          colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          yearSpacing={40}
          monthBorderColor="#ffffff"
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'row',
              translateY: 36,
              itemCount: 4,
              itemWidth: 42,
              itemHeight: 36,
              itemsSpacing: 14,
              itemDirection: 'right-to-left'
            }
          ]}
        />

      </main>
    </div>
  )
}
