import '../styles/index.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia('(min-width: 700px)').matches) {
        ScrollTrigger.create({
            trigger: '.hero .image',
            onUpdate: self => {
                const progress = self.progress

                const scaleValue1 = 1 + (1.6 - 1) * progress
                const scaleValue2 = 1 + (1.7 - 1) * progress
                const scaleValue3 = 1 + (1.8 - 1) * progress
                const scaleValue4 = 1 + (1.9 - 1) * progress
                const scaleValue5 = 1 + (2 - 1) * progress
                const scaleValue6 = 1 + (2.1 - 1) * progress
                const scaleValue7 = 1 + (2.2 - 1) * progress

                const opacity2 = 0.8 * (1 - progress)
                const opacity3 = 0.6 * (1 - progress)
                const opacity4 = 0.4 * (1 - progress)
                const opacity5 = 0.2 * (1 - progress)
                const opacity6 = 0.1 * (1 - progress)
                const opacity7 = 0.05 * (1 - progress)

                gsap.to('.image div:first-of-type', { scale: scaleValue1 })
                gsap.to('.image div:nth-of-type(2)', { scale: scaleValue2, autoAlpha: opacity2 })
                gsap.to('.image div:nth-of-type(3)', { scale: scaleValue3, autoAlpha: opacity3 })
                gsap.to('.image div:nth-of-type(4)', { scale: scaleValue4, autoAlpha: opacity4 })
                gsap.to('.image div:nth-of-type(5)', { scale: scaleValue5, autoAlpha: opacity5 })
                gsap.to('.image div:nth-of-type(6)', { scale: scaleValue6, autoAlpha: opacity6 })
                gsap.to('.image div:nth-of-type(7)', { scale: scaleValue7, autoAlpha: opacity7 })
            },
            start: `center center`,
            end: 'bottom center',
            pin: true
        })
    }
})
