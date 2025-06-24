import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)


const Hero = () => {
    const videoRef = useRef(null)
    const isMobile = useMediaQuery({ maxWidth: 767 })

    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars,words' })
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' })

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05
        })

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1.2
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
            .to('.right-leaf', { y: 200 }, 0)
            .to('.left-leaf', { y: -200 }, 0)

        const startValue = isMobile ? 'top 50%' : 'center 60%'
        const endValue = isMobile ? '120% top' : 'bottom top'

        gsap.fromTo(videoRef.current,
            {
                opacity: 0.5,
                y: 90,
                scale: 1.1,
            },
            {
                opacity: 1,
                y: 60,
                scale: 1,
                duration: 1.5,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: 'video',
                    start: startValue,
                    end: endValue,
                    scrub: true,
                    pin: true,
                    toggleActions: 'play none none reverse',
                    onEnter: () => videoRef.current.play(),
                    onLeave: () => videoRef.current.pause(),
                    onEnterBack: () => videoRef.current.play(),
                    onLeaveBack: () => videoRef.current.pause(),
                },
            }
        )
    }, [])

    return (
        <>
            <section id="hero" className="noisy relative">
                <h1 className="title">MOJITO</h1>
                <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
                <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />
                <div className="body">
                    <div className="content">
                        <div className="space-y-5 md:block sm:hidden">
                            <p>Cool. Crisp. Classic</p>
                            <p className="subtitle">Sip The Spirit <br /> of Summer</p>
                        </div>
                        <div className="view-cocktails">
                            <p className="subtitle">
                                Every sip is a celebration of summer, a burst of flavor that dances on your palate. <br />
                                Join us in savoring the essence of summer with every mojito.
                            </p>
                            <a href="#cocktails">View Cocktails</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="video absolute inset-0">
                <video
                    ref={videoRef}
                    src="/videos/output.mp4"
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                />
            </div>
        </>
    )
}

export default Hero
