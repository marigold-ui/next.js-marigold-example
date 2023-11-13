import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MarigoldProvider } from '@marigold/components';
import theme from "@marigold/theme-b2b";
import Link from 'next/link';
import '@marigold/theme-b2b/styles.css';

const Navbar = () => (
  <ul className='list-none flex gap-7 mb-6'>
    <Link href="/">
      home
    </Link>
    <Link href="/sports">
      sports
    </Link>
  </ul>
)



export default function App({ Component, pageProps }: AppProps) {
  return <MarigoldProvider theme={theme}>
    <div className='p-6'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  </MarigoldProvider >
}
