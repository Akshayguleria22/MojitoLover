import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { cocktailLists, mockTailLists } from '../../constants/index.js'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Cocktails = () => {
    useGSAP(() => {
        const paralax = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        })
        paralax
            .from('#c-left-leaf', { x: -100, y: -100 })
            .from('#c-right-leaf', { x: 100, y: 100 })
    }, [])

        return (
            <section id="cocktails" className="noisy">
                <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
                <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />
                <div className="list">
                    <div className="popular m-3">
                        <h2 className="text-2xl font-modern-negra">Most Popular Cocktails</h2>
                        <ul>
                            {cocktailLists.map((drink) => (
                                <li key={drink.name}>
                                    <div className="md:me-28">
                                        <h3>{drink.name}</h3>
                                        <p>{drink.country} | {drink.detail}</p>
                                    </div>
                                    <span>- {drink.price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="Loved m-3">
                        <h2 className="pb-7 text-2xl font-modern-negra">Most Loved Mocktails</h2>
                        <ul>
                            {mockTailLists.map((drink) => (
                                <li key={drink.name}>
                                    <div className="me-28">
                                        <h3>{drink.name}</h3>
                                        <p>{drink.country} | {drink.detail}</p>
                                    </div>
                                    <span>- {drink.price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </section>
        )
    }

export default Cocktails
