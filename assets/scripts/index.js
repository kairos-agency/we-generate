import '../styles/index.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', () => {
    updateHeroSize()

    window.addEventListener('resize', () => {
        updateHeroSize()
    })

    ScrollTrigger.create({
        trigger: '.hero .image',
        onUpdate: self => {
            const progress = self.progress

            const scaleValue1 = 1 + (1.56 - 1) * progress
            const scaleValue2 = 1 + (1.66 - 1) * progress
            const scaleValue3 = 1 + (1.76 - 1) * progress
            const scaleValue4 = 1 + (1.86 - 1) * progress
            const scaleValue5 = 1 + (1.96 - 1) * progress
            const scaleValue6 = 1 + (2.06 - 1) * progress
            const scaleValue7 = 1 + (2.16 - 1) * progress

            gsap.to('.image div:first-of-type', { scale: scaleValue1 })
            gsap.to('.image div:nth-of-type(2)', { scale: scaleValue2 })
            gsap.to('.image div:nth-of-type(3)', { scale: scaleValue3 })
            gsap.to('.image div:nth-of-type(4)', { scale: scaleValue4 })
            gsap.to('.image div:nth-of-type(5)', { scale: scaleValue5 })
            gsap.to('.image div:nth-of-type(6)', { scale: scaleValue6 })
            gsap.to('.image div:nth-of-type(7)', { scale: scaleValue7 })
        },
        start: `0% center`,
        end: 'bottom top'
    })
})

function getHeight(el) {
    el = typeof el === 'string' ? document.querySelector(el) : el

    const styles = window.getComputedStyle(el)
    const margin = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom'])

    return Math.ceil(el.offsetHeight + margin)
}

function updateHeroSize() {
    const height = window.innerHeight
    const hero = document.querySelector('.hero .grid')
    const heroHeight = getHeight(hero)
    document.querySelector('.hero .grid_image').style.height = `${height - heroHeight}px`
    if (window.matchMedia('(min-width: 700px)').matches) {
        document.querySelector('.hero .grid_image').style.top = `${heroHeight}px`
    }
}
