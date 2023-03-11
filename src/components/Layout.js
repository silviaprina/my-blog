import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import PortfolioHeadshot from '../images/headshots/Silvia-Prina-6.jpg';
import Navbar from './NavBar';

const inter = Inter({ subsets: ['latin'] });

const Layout=({ children }) => {
    return (
        <>
            <Head>
                <title>Silvia Prina</title>
                <meta name="description" content="Silvia Prina Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className={inter.className}>
                <div className="relative">
                    <div className="relative md:fixed md:w-4/12 w-0 inset-0">
                        <h1 className="absolute top-0 right-0 p-20 text-yellow text-6xl font-light text-right">
                            SILVIA
                            <br />
                            <span className="font-semibold">PRINA</span>
                        </h1>
                        <Image
                            src={PortfolioHeadshot}
                            className="object-cover w-full h-full"
                            priority
                            alt="Portfolio Headshot" />
                    </div>
                    <div className='w-full md:h-0 md:w-0 md:p-0 bg-dark-grey text-2xl p-2 font-light text-yellow px-6 md:px-16'>
                        SILVIA <span className="font-semibold">PRINA</span>
                    </div>
                    <div className="w-full md:ml-[33.33%] md:w-8/12 bg-grey-yellow min-h-screen">
                        <Navbar/>
                        <div className="pt-6 px-6 md:px-16">
                        {children}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Layout;