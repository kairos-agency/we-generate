import '../styles/index.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia('(min-width: 700px)').matches) {
        setHeightOfImage()
        setImageAnimation()

        window.addEventListener('resize', setHeightOfImage)
    }
})

function getAbsoluteHeight(el) {
    el = typeof el === 'string' ? document.querySelector(el) : el

    var styles = window.getComputedStyle(el)
    var margin = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom'])

    return Math.ceil(el.offsetHeight + margin)
}

function setHeightOfImage() {
    const heroGridHeight = getAbsoluteHeight('.hero .grid')
    document.querySelector('.hero .grid_image').style.height = `calc(100% - ${heroGridHeight}px)`
}

function setImageAnimation() {
    ScrollTrigger.create({
        trigger: '.hero',
        onUpdate: self => {
            const progress = self.progress

            gsap.to('.hero .grid', { y: -progress * 400, autoAlpha: 1 * (1 - progress * 2) })
            gsap.to('.hero .image div:first-of-type', { scale: 1 + (1.6 - 1) * progress })
            gsap.to('.hero .image div:nth-of-type(2)', {
                scale: 1 + (1.7 - 1) * progress,
                autoAlpha: 0.8 * (1 - progress)
            })
            gsap.to('.hero .image div:nth-of-type(3)', {
                scale: 1 + (1.8 - 1) * progress,
                autoAlpha: 0.6 * (1 - progress)
            })
            gsap.to('.hero .image div:nth-of-type(4)', {
                scale: 1 + (1.9 - 1) * progress,
                autoAlpha: 0.4 * (1 - progress)
            })
            gsap.to('.hero .image div:nth-of-type(5)', {
                scale: 1 + (2 - 1) * progress,
                autoAlpha: 0.2 * (1 - progress)
            })
            gsap.to('.hero .image div:nth-of-type(6)', {
                scale: 1 + (2.1 - 1) * progress,
                autoAlpha: 0.1 * (1 - progress)
            })
            gsap.to('.hero .image div:nth-of-type(7)', {
                scale: 1 + (2.2 - 1) * progress,
                autoAlpha: 0.05 * (1 - progress)
            })
        },
        start: 'top top',
        end: 'bottom top',
        pin: true
    })
}
