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
        setImageAnimationHero()
        setImageAnimation()
    }
})

function setImageAnimationHero() {
    document.querySelectorAll('.js-image-hero').forEach(element => {
        const gridImage = element.querySelector('.grid_image')
        const top = gridImage.offsetTop

        ScrollTrigger.create({
            trigger: element,
            onUpdate: self => {
                const progress = self.progress

                if (gridImage.getBoundingClientRect().top < window.innerHeight / 2 - gridImage.offsetHeight / 2) {
                    gridImage.classList.add('sticky')
                }

                if (gridImage.offsetTop < top + 224) {
                    gridImage.classList.remove('sticky')
                }

                gsap.to(element.querySelector('.grid'), { y: -progress * 400 })

                gsap.to(element.querySelector('.image .image_paralax'), { scale: 1 + (1.7 - 1) * progress })
                gsap.to(element.querySelector('.image .image_paralax img:nth-of-type(2)'), { y: -progress * 40 })
                gsap.to(element.querySelector('.image .image_paralax img:last-of-type'), {
                    scale: 1 + (1.3 - 1) * progress,
                    y: -progress * 50
                })

                gsap.to(element.querySelector('.image div:nth-of-type(2)'), { scale: 1 + (1.8 - 1) * progress * 1.05 })
                gsap.to(element.querySelector('.image div:nth-of-type(3)'), { scale: 1 + (1.9 - 1) * progress * 1.1 })
                gsap.to(element.querySelector('.image div:nth-of-type(4)'), { scale: 1 + (2 - 1) * progress * 1.15 })
                gsap.to(element.querySelector('.image div:nth-of-type(5)'), { scale: 1 + (2.1 - 1) * progress * 1.2 })
                gsap.to(element.querySelector('.image div:nth-of-type(6)'), { scale: 1 + (2.2 - 1) * progress * 1.25 })
                gsap.to(element.querySelector('.image div:nth-of-type(7)'), { scale: 1 + (2.3 - 1) * progress * 1.3 })
                gsap.to(element.querySelector('.image div:nth-of-type(8)'), { scale: 1 + (2.4 - 1) * progress * 1.35 })
            },
            start: 'top top',
            end: 'bottom top'
        })
    })
}

function setImageAnimation() {
    document.querySelectorAll('.js-image').forEach(element => {
        const gridImage = element.querySelector('.grid_image')
        const top = gridImage.offsetTop

        ScrollTrigger.create({
            trigger: element,
            onUpdate: self => {
                const progress = self.progress

                if (gridImage.getBoundingClientRect().top < window.innerHeight / 2 - gridImage.offsetHeight / 2) {
                    gridImage.classList.add('sticky')
                }

                if (gridImage.offsetTop < top + 224) {
                    gridImage.classList.remove('sticky')
                }

                gsap.to(element.querySelector('.grid'), { y: -progress * 400 })

                gsap.to(element.querySelector('.image .image_paralax'), { scale: 1 + (1.7 - 1) * progress })

                gsap.to(element.querySelector('.image div:nth-of-type(2)'), { scale: 1 + (1.8 - 1) * progress * 1.05 })
                gsap.to(element.querySelector('.image div:nth-of-type(3)'), { scale: 1 + (1.9 - 1) * progress * 1.1 })
                gsap.to(element.querySelector('.image div:nth-of-type(4)'), { scale: 1 + (2 - 1) * progress * 1.15 })
                gsap.to(element.querySelector('.image div:nth-of-type(5)'), { scale: 1 + (2.1 - 1) * progress * 1.2 })
                gsap.to(element.querySelector('.image div:nth-of-type(6)'), { scale: 1 + (2.2 - 1) * progress * 1.25 })
                gsap.to(element.querySelector('.image div:nth-of-type(7)'), { scale: 1 + (2.3 - 1) * progress * 1.3 })
                gsap.to(element.querySelector('.image div:nth-of-type(8)'), { scale: 1 + (2.4 - 1) * progress * 1.35 })
            },
            start: 'top top',
            end: 'bottom top'
        })
    })
}
