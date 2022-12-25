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
import Image from '@/components/Image'

const LayoutWrapper = ({ children }) => {
  const router = useRouter()
  let HEADER_HEIGHT = '69px'
  let FOOTER_HEIGHT = '100px'
  let MAIN_CONTENT_MIN_HEIGHT = `calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`
  return (
    <>
      <header className="md:sticky top-0 md:overflow-x-hidden flex-none pb-4 pt-4 supports-backdrop-blur:bg-white/95 backdrop-blur z-40 bg-white/75 dark:bg-[#111827]/60">
        <div className=" mx-auto max-w-3xl xl:max-w-5xl flex items-center justify-between px-3 xl:px-0">
          <div>
            <Link href="/" aria-label="Ultramarine's website">
              <div className="flex items-center justify-between text-2xl font-semibold text-primary-color dark:text-primary-color-dark">
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
                  className="p-1 font-medium text-lg text-gray-900 sm:p-4 dark:text-gray-100 hover:dark:text-primary-color-dark hover:text-primary-color"
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
        <div className="flex flex-col justify-between">
          <main style={{ minHeight: MAIN_CONTENT_MIN_HEIGHT }}>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default LayoutWrapper
