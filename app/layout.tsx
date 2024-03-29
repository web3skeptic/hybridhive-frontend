"use client"

import './globals.css'

import { Inter } from 'next/font/google'

import { ConnectWallet, ThirdwebProvider } from "@thirdweb-dev/react";

import Link from 'next/link'
import Image from 'next/image'

import HHLogo from '@/public/hhlogo.svg'
//import HHLogo from '@/public/hybridhive-logo.png'

import { ArrowsRightLeftIcon, HomeIcon, UserCircleIcon, ShareIcon } from '@heroicons/react/20/solid'

import { Goerli, Gnosis } from '@thirdweb-dev/chains'
import Wrapper from "./wrapper";

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'HybridHive App',
  description: 'Manage accounts and send tokens through HybridHive',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>hybridhive</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/alpinejs" async></script>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tippy.js/6.3.7/tippy.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          src="https://unpkg.com/@ryangjchandler/alpine-tooltip@1.2.0/dist/cdn.min.js"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          async
        ></script>
      </head>
      <body className={inter.className}>
        <ThirdwebProvider
          activeChain={Goerli}
          supportedChains={[Goerli, Gnosis]}
          autoConnect={false}
        >
          <div className="flex flex-col flex-start min-h-screen">
            <header className="flex flex-row justify-center p-[50px] bg-[#151515] grow-0">
              <div className="flex flex-row justify-between align-center w-3/4 max-w-screen-lg">
                <div className="flex flex-row items-center">
                  <Image src={HHLogo} alt="" className="mr-4" width={100} />
                  <h1 className="text-5xl text-white">hybridhive</h1>
                </div>
                <ConnectWallet className="connect-wallet-button" />
              </div>
            </header>
            <nav className="flex flex-row justify-center bg-[#FFD12E] p-[25px] grow-0">
              <div className="flex flex-row w-3/4 max-w-screen-lg text-white nav-bar">
                <Link href="/">
                  <HomeIcon className="mr-2" width={25} height={25} />
                  Home
                </Link>
                <Link href="/account">
                  <UserCircleIcon className="mr-2" width={25} height={25} />
                  Account
                </Link>
                <Link href="/transfer">
                  <ArrowsRightLeftIcon className="mr-2" width={25} height={25} />
                  Transfer
                </Link>
                <Link href="/network">
                  <ShareIcon className="rotate-90 mr-2" width={25} height={25} />
                  Network
                </Link>
              </div>
            </nav>
            <section className="flex flex-row justify-center p-[50px] grow">
              <div className="main-section flex flex-col items-start w-3/4 max-w-screen-lg">
                <Wrapper>{children}</Wrapper>
              </div>
            </section>
            <footer className="flex flex-row justify-center bg-[#EEEEEE] py-[25px] grow-0">
              <p className="text-lg text-[#222]">© 2023 hybridhive</p>
            </footer>
          </div>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
