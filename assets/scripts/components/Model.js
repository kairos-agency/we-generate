import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Model() {
    const html = document.documentElement
    const canvas = document.getElementById('model')
    const modelContainer = document.querySelector('.model div')
    const circle = document.querySelector('.model .circle')
    const context = canvas.getContext('2d')

    let currentFrame

    currentFrame = index =>
        `http://localhost:8888/we-generate/wp-content/themes/neptune/images/model/${index
            .toString()
            .padStart(3, '0')}.webp`

    const frameCount = 605

    const preloadImages = () => {
        const images = []
        for (let i = 0; i < frameCount; i++) {
            const img = new Image()
            img.src = currentFrame(i)
            images.push(img)
        }
        return images
    }

    const images = preloadImages()
    const finalImage = new Image()
    finalImage.src = currentFrame(frameCount - 1)

    let currentImage = 0
    let isAnimationComplete = false

    canvas.width = 1920
    canvas.height = 1080

    const drawImage = () => {
        if (images[currentImage]) {
            context.clearRect(0, 0, canvas.width, canvas.height)
            context.drawImage(images[currentImage], 0, 0)
        } else {
            context.clearRect(0, 0, canvas.width, canvas.height)
            context.drawImage(finalImage, 0, 0)
        }
    }

    const updateImage = () => {
        const scrollTop = html.scrollTop
        const maxScrollTop = document.querySelector('.section').offsetTop - window.innerHeight
        const scrollFraction = scrollTop / maxScrollTop
        let frameIndex = Math.max(0, Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount)))

        if (modelContainer.getBoundingClientRect().top < window.innerHeight / 2 - modelContainer.offsetHeight / 2) {
            modelContainer.classList.add('sticky')
        }

        if (modelContainer.offsetTop - modelContainer.offsetHeight / 2 < 0) {
            modelContainer.classList.remove('sticky')
        }

        currentImage = frameIndex
        requestAnimationFrame(drawImage)

        if (scrollTop >= maxScrollTop && !isAnimationComplete) {
            isAnimationComplete = true
            drawImage()
        }
    }

    window.addEventListener('scroll', updateImage)

    images[0].onload = () => {
        drawImage()
    }

    // ScrollTrigger.create({
    //     trigger: '.model',
    //     onUpdate: self => {
    //         const progress = self.progress
    //         console.log(progress)

    //         // gsap.to(element.querySelector('.grid'), { y: -progress * 400, autoAlpha: 1 * (1 - progress * 2) })
    //     },
    //     start: 'top top',
    //     end: 'bottom top',
    //     pin: true,
    //     markers: true
    // })
}
