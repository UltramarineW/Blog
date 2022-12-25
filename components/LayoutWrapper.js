import { useState, useRef, useEffect } from 'react'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import NowPlaying from './NowPlaying'
import Typewriter from 'typewriter-effect'
import { useRouter } from 'next/router'
import { twemoji } from 'twemoji'

const LayoutWrapper = ({ children }) => {
  const router = useRouter()
  return (
    <>
      <header className="sticky top-0 flex-none py-3 backdrop-blur z-40 bg-white/75 dark:bg-black/10">
        <div className="mx-auto max-w-3xl xl:max-w-5xl flex items-center justify-between px-3 xl:px-0">
          <div>
            <Link href="/" aria-label="Ultramarine's website">
              <div className="flex items-center justify-between text-xl font-semibold text-primary-color dark:text-primary-color-dark">
                {`~${router.asPath}`}{' '}
                <Typewriter
                  options={{
                    strings: [],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100 hover:dark:text-primary-color-dark hover:text-primary-color"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>
      </header>
      <div className="max-w-3xl px-3 xl:px-0 mx-auto sm:px-6 xl:max-w-5xl">
        <div className="flex flex-col justify-between h-screen">
          <main className="relative mb-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default LayoutWrapper
