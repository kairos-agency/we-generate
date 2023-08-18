import '../styles/index.scss'
import Model from './components/Model'
import Slider from './components/Slider'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('model')) new Model()
    if (document.querySelector('.slides')) new Slider()

    if (window.matchMedia('(min-width: 700px)').matches && document.querySelectorAll('.js-image')) {
        setHeightOfImage()

        setImageAnimationHero()
        setImageAnimation()

        window.addEventListener('resize', setHeightOfImage)
    }

    setVisible('.js-page-eco-1', 0)
    setVisible('.js-page-eco-2', 0.2)
    setVisible('.js-page-eco-3', 0.2)
    setVisible('.js-page-eco-4', 0.2)
    setVisible('.js-page-eco-5', 0.2)
    setVisible('.js-page-eco-6', 0.2)
    setVisible('.js-page-eco-7', 0.2)

    setVisible('.js-page-contact', 0)

    setVisible('.js-page-home-1', 0)
    setVisible('.js-page-home-2', 0.2)
    setVisible('.js-page-home-3', 0.2)
    setVisible('.js-page-home-4', 0.2)
    setVisible('.js-page-home-5', 0.2)
    setVisible('.js-page-home-6', 0.2)
    setVisible('.js-page-home-7', 0.2)
    setVisible('.js-page-home-8', 0.2)
    setVisible('.js-page-home-9', 0.2)
})

function getAbsoluteHeight(el) {
    el = typeof el === 'string' ? document.querySelector(el) : el

    let styles = window.getComputedStyle(el)
    let margin = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom'])

    return Math.ceil(el.offsetHeight + margin)
}

function setHeightOfImage() {
    document.querySelectorAll('.js-image').forEach(element => {
        const heroGridHeight = getAbsoluteHeight(element.querySelector('.grid'))
        element.querySelector('.grid_image').style.height = `calc(100% - ${heroGridHeight}px)`
    })
    document.querySelectorAll('.js-image-hero').forEach(element => {
        const heroGridHeight = getAbsoluteHeight(element.querySelector('.grid'))
        element.querySelector('.grid_image').style.height = `calc(100% - ${heroGridHeight}px)`
    })
}

function setImageAnimation() {
    document.querySelectorAll('.js-image').forEach(element => {
        ScrollTrigger.create({
            trigger: element,
            onUpdate: self => {
                const progress = self.progress

                gsap.to(element.querySelector('.grid'), { y: -progress * 400, autoAlpha: 1 * (1 - progress * 2) })

                gsap.to(element.querySelector('.image .image_paralax'), { scale: 1 + (1.6 - 1) * progress })

                gsap.to(element.querySelector('.image div:nth-of-type(2)'), { scale: 1 + (1.7 - 1) * progress * 1.05 })
                gsap.to(element.querySelector('.image div:nth-of-type(3)'), { scale: 1 + (1.8 - 1) * progress * 1.1 })
                gsap.to(element.querySelector('.image div:nth-of-type(4)'), { scale: 1 + (1.9 - 1) * progress * 1.15 })
                gsap.to(element.querySelector('.image div:nth-of-type(5)'), { scale: 1 + (2 - 1) * progress * 1.2 })
                gsap.to(element.querySelector('.image div:nth-of-type(6)'), { scale: 1 + (2.1 - 1) * progress * 1.25 })
                gsap.to(element.querySelector('.image div:nth-of-type(7)'), { scale: 1 + (2.2 - 1) * progress * 1.3 })
                gsap.to(element.querySelector('.image div:nth-of-type(8)'), { scale: 1 + (2.3 - 1) * progress * 1.35 })
            },
            start: '75% 75%',
            end: 'bottom top',
            pin: true
        })
    })
}

function setImageAnimationHero() {
    document.querySelectorAll('.js-image-hero').forEach(element => {
        ScrollTrigger.create({
            trigger: element,
            onUpdate: self => {
                const progress = self.progress

                gsap.to(element.querySelector('.grid'), { y: -progress * 400, autoAlpha: 1 * (1 - progress * 2) })

                gsap.to(element.querySelector('.image .image_paralax'), { scale: 1 + (1.6 - 1) * progress })
                gsap.to(element.querySelector('.image .image_paralax img:nth-of-type(2)'), { y: -progress * 40 })
                gsap.to(element.querySelector('.image .image_paralax img:last-of-type'), {
                    scale: 1 + (1.3 - 1) * progress,
                    y: -progress * 50
                })

                gsap.to(element.querySelector('.image div:nth-of-type(2)'), { scale: 1 + (1.7 - 1) * progress * 1.05 })
                gsap.to(element.querySelector('.image div:nth-of-type(3)'), { scale: 1 + (1.8 - 1) * progress * 1.1 })
                gsap.to(element.querySelector('.image div:nth-of-type(4)'), { scale: 1 + (1.9 - 1) * progress * 1.15 })
                gsap.to(element.querySelector('.image div:nth-of-type(5)'), { scale: 1 + (2 - 1) * progress * 1.2 })
                gsap.to(element.querySelector('.image div:nth-of-type(6)'), { scale: 1 + (2.1 - 1) * progress * 1.25 })
                gsap.to(element.querySelector('.image div:nth-of-type(7)'), { scale: 1 + (2.2 - 1) * progress * 1.3 })
                gsap.to(element.querySelector('.image div:nth-of-type(8)'), { scale: 1 + (2.3 - 1) * progress * 1.35 })
            },
            start: '25% 25%',
            end: 'bottom top',
            pin: true
        })
    })
}

function setVisible(element, delay) {
    const item = document.querySelector(element)
    if (item) {
        function callback(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('visible')
                    item.classList.add('visible')
                }
            })
        }

        function createObserver(item, callback) {
            const options = {
                root: null,
                threshold: delay
            }
            const observer = new IntersectionObserver(callback, options)
            observer.observe(item)
        }

        createObserver(item, callback)
    }
}
