import React from 'react'
import { socials } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText.js'
import gsap from 'gsap'
gsap.registerPlugin(SplitText)
const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', { type: 'word' });
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: 'power1.inOut'
        })
        timeline
            .from(titleSplit.words, {
                opacity: 0, yPercent: 100, stagger: 0.02
            })
            .from('#contact h2', {
                opacity: 0, yPercent: 100, stagger: 0.02
            })
            .to('#f-right-leaf', {
                y: '-50', duration: 1, ease: 'power1.inOut'
            })
            .to('#f-left-leaf', {
                y: '-70', duration: 1, ease: 'power1.inOut'
            })
    })
    return (
        <footer id="contact">
            <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
            <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />
            <div className="content">
                <h2>Contact With Me</h2>

                <div>
                    <h3>About me</h3>
                    <p>Hi, I'm Akshay Guleria.</p>
                    <p>A developer who Develop By Mind,</p>
                    <p>Design Through Heart,</p>
                    <p>and Code From Soul.</p>
                </div>

                <div>
                    <h3>Contact Me</h3>
                    <p>+91 9654868917</p>
                    <p>akshayguleria700@gmail.com</p>
                </div>

                <div>
                    <h3>See More By Me</h3>
                    <h2><a href="https://github.com/Akshayguleria22" target="_blank">GitHub</a></h2>
                </div>

                <div>
                    <h3>Socials</h3>

                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                            >
                                <img className="h-10" src={social.icon} />
                            </a>
                        ))}
                    </div>
                </div>
                </div>
        </footer>
    )
}

export default Contact
