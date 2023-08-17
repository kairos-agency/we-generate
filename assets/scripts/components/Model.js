export default function Model() {
    const html = document.documentElement
    const canvas = document.getElementById('model')
    const context = canvas.getContext('2d')

    let currentFrame

    currentFrame = index => `http://localhost:8888/we-generate/wp-content/themes/neptune/images/model/${index.toString().padStart(3, '0')}.webp`

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

        currentImage = frameIndex
        requestAnimationFrame(drawImage)

        animObject(frameIndex)

        if (scrollTop >= maxScrollTop && !isAnimationComplete) {
            isAnimationComplete = true
            drawImage()
        }
    }

    window.addEventListener('scroll', updateImage)

    images[0].onload = () => {
        drawImage()
    }
}

function animObject(frameIndex) {
    const circle = document.querySelector('.model .circle')
    const text1 = document.querySelector('.model .text1')
    const text1Border = document.querySelector('.model .text1 span')
    const text2 = document.querySelector('.model .text2')
    const text3 = document.querySelector('.model .text3')
    const gradient = document.querySelector('.model .gradient')

    let circleOpacity = 0
    let circleScale = 0.4

    let text1Opacity = 0
    let text1Y = '150%'

    let text1BorderScale = 0

    let text2Opacity = 0

    let text3Opacity = 0

    let gradientOpacity = 0

    if (frameIndex >= 35 && frameIndex <= 70) {
        const fraction = (frameIndex - 35) / (70 - 35)

        circleOpacity = fraction
        circleScale = 0.4 + fraction * 0.6
    } else if (frameIndex >= 70 && frameIndex <= 135) {
        circleOpacity = 1
        circleScale = 1
    } else if (frameIndex >= 135 && frameIndex <= 150) {
        const fraction = 1 - (frameIndex - 135) / (150 - 135)

        circleOpacity = fraction
        circleScale = 1
    } else if (frameIndex < 35 || frameIndex > 150) {
        circleOpacity = 0
        circleScale = 0.4
    }

    if (frameIndex >= 55 && frameIndex <= 70) {
        const fraction = (frameIndex - 55) / (70 - 55)

        text1Opacity = fraction
        text1Y = `${(1 - fraction) * 150}%`
    } else if (frameIndex >= 70 && frameIndex <= 135) {
        text1Opacity = 1
        text1Y = '0%'
    } else if (frameIndex >= 135 && frameIndex <= 150) {
        const fraction = 1 - (frameIndex - 135) / (150 - 135)

        text1Opacity = fraction
        text1Y = '0%'
    } else if (frameIndex < 55 || frameIndex > 150) {
        text1Opacity = 0
        text1Y = '150%'
    }

    if (frameIndex >= 70 && frameIndex <= 100) {
        const fraction = (frameIndex - 70) / (100 - 70)

        text1BorderScale = fraction
    } else if (frameIndex >= 100 && frameIndex <= 150) {
        text1BorderScale = 1
    } else if (frameIndex < 70 || frameIndex > 150) {
        text1BorderScale = 0
    }

    if (frameIndex >= 200 && frameIndex <= 220) {
        const fraction = (frameIndex - 200) / (220 - 200)

        text2Opacity = fraction
    } else if (frameIndex >= 220 && frameIndex <= 255) {
        text2Opacity = 1
    } else if (frameIndex >= 255 && frameIndex <= 270) {
        const fraction = 1 - (frameIndex - 255) / (270 - 255)

        text2Opacity = fraction
    } else if (frameIndex < 200 || frameIndex > 270) {
        text2Opacity = 0
    }

    if (frameIndex >= 500 && frameIndex <= 520) {
        const fraction = (frameIndex - 500) / (520 - 500)

        text3Opacity = fraction
    } else if (frameIndex >= 520 && frameIndex <= 585) {
        text3Opacity = 1
    } else if (frameIndex >= 585 && frameIndex <= 600) {
        const fraction = 1 - (frameIndex - 585) / (600 - 585)

        text3Opacity = fraction
    } else if (frameIndex < 500 || frameIndex > 600) {
        text3Opacity = 0
    }

    if (frameIndex >= 585 && frameIndex <= 600) {
        const fraction = (frameIndex - 585) / (600 - 585)

        gradientOpacity = fraction
    } else if (frameIndex >= 600) {
        gradientOpacity = 1
    }

    circle.style.opacity = circleOpacity
    circle.style.transform = `translate(-50%, -50%) scale(${circleScale})`

    text1.style.opacity = text1Opacity
    text1.style.transform = `translateY(${text1Y})`

    text1Border.style.transform = `scaleY(${text1BorderScale})`

    text2.style.opacity = text2Opacity

    text3.style.opacity = text3Opacity

    gradient.style.opacity = gradientOpacity
}
