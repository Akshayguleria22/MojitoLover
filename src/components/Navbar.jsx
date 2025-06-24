import React, { useRef } from 'react'
import { navLinks } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
  const navRef = useRef(null)

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: navRef.current,
        start: 'bottom top',
        scrub: true,
      },
    })

    navTween.fromTo(
      navRef.current,
      { backgroundColor: 'transparent' },
      {
        backgroundColor: '#00000050',
        backdropFilter: 'blur(10px)',
        duration: 1,
        ease: 'power1.inOut',
      }
    )

    return () => {
      navTween.kill()
    }
  }, [])

  return (
    <nav
      ref={navRef}
      className="flex flex-row items-center justify-around p-4 shadow-md fixed w-full top-0 z-50 transition-all"
    >
      <a href="/" className="flex cursor-pointer items-center gap-2">
        <img src="/images/logo.png" alt="logo" />
        <p>Velvet Pour</p>
      </a>
      <ul className="flex flex-row gap-4">
        {navLinks.map((link) => (
          <li key={link.id} className="text-white hover:text-gray-600">
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
