import React from 'react'
import { navLinks } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top'
      }
    })
    navTween.fromTo('nav', {backgroundColor: 'transparent'}, {backgroundColor:'#00000050',backgroundFilter:'blur(10px)', duration: 1, ease: 'power1.inOut'})
    return () => {
      navTween.kill()
    }
  }, [])
  return (
    <div className="flex flex-row items-center justify-around p-4 shadow-md">
      <a href="/" className="flex items-center gap-2">
        <img src="/images/logo.png" alt="logo" />
        <p>Velvet Pour</p>
      </a>
      <ul className="flex flex-row gap-4">
        {navLinks.map((link) => (
          <li key={link.id}  className="text-white hover:text-gray-600">
            <a href={`#${link.id}`}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div> 
  )
}

export default Navbar
