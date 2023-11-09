export default function Model() {
    const html = document.documentElement
    const canvas = document.getElementById('model')
    const context = canvas.getContext('2d')

    let currentFrame

    currentFrame = index => `https://we-generate.kairos-valley.net/wp-content/themes/neptune/images/model/${index.toString().padStart(3, '0')}.webp`

    const frameCount = 245

    const loader = document.getElementById('loader')
    const progressBar = document.querySelector('.progress-bar')

    document.body.classList.add('no-scroll')

    const updateProgressBar = loadedCount => {
        const progress = (loadedCount / (frameCount + 1)) * 100
        progressBar.style.width = `${progress}%`
    }

    const hideLoader = () => {
        loader.style.display = 'none'

        document.body.classList.remove('no-scroll')

        updateImage()
    }

    const countLoadedImages = () => {
        let loadedCount = 0
        return () => {
            loadedCount++
            updateProgressBar(loadedCount)
            if (loadedCount === frameCount + 1) {
                hideLoader()
            }
        }
    }

    const onImageLoad = countLoadedImages()

    const preloadImages = () => {
        const images = []
        for (let i = 0; i < frameCount; i++) {
            const img = new Image()
            img.src = currentFrame(i)
            img.onload = onImageLoad
            images.push(img)
        }
        return images
    }

    const images = preloadImages()
    const finalImage = new Image()
    finalImage.src = currentFrame(frameCount - 1)
    finalImage.onload = onImageLoad

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
        const maxScrollTop = document.querySelector('.slider').offsetTop - window.innerHeight
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

    images[frameCount - 1].onload = () => {
        hideLoader()
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

    if (frameIndex >= 14 && frameIndex <= 28) {
        const fraction = (frameIndex - 14) / (28 - 14)

        circleOpacity = fraction
        circleScale = 0.4 + fraction * 0.6
    } else if (frameIndex >= 28 && frameIndex <= 55) {
        circleOpacity = 1
        circleScale = 1
    } else if (frameIndex >= 55 && frameIndex <= 61) {
        const fraction = 1 - (frameIndex - 55) / (61 - 55)

        circleOpacity = fraction
        circleScale = 1
    } else if (frameIndex < 14 || frameIndex > 61) {
        circleOpacity = 0
        circleScale = 0.4
    }

    if (frameIndex >= 22 && frameIndex <= 28) {
        const fraction = (frameIndex - 22) / (28 - 22)

        text1Opacity = fraction
        text1Y = `${(1 - fraction) * 150}%`
    } else if (frameIndex >= 28 && frameIndex <= 55) {
        text1Opacity = 1
        text1Y = '0%'
    } else if (frameIndex >= 55 && frameIndex <= 61) {
        const fraction = 1 - (frameIndex - 55) / (61 - 55)

        text1Opacity = fraction
        text1Y = '0%'
    } else if (frameIndex < 22 || frameIndex > 61) {
        text1Opacity = 0
        text1Y = '150%'
    }

    if (frameIndex >= 28 && frameIndex <= 40) {
        const fraction = (frameIndex - 28) / (40 - 28)

        text1BorderScale = fraction
    } else if (frameIndex >= 40 && frameIndex <= 61) {
        text1BorderScale = 1
    } else if (frameIndex < 28 || frameIndex > 61) {
        text1BorderScale = 0
    }

    if (frameIndex >= 81 && frameIndex <= 89) {
        const fraction = (frameIndex - 81) / (89 - 81)

        text2Opacity = fraction
    } else if (frameIndex >= 89 && frameIndex <= 103) {
        text2Opacity = 1
    } else if (frameIndex >= 103 && frameIndex <= 109) {
        const fraction = 1 - (frameIndex - 103) / (109 - 103)

        text2Opacity = fraction
    } else if (frameIndex < 81 || frameIndex > 109) {
        text2Opacity = 0
    }

    if (frameIndex >= 202 && frameIndex <= 210) {
        const fraction = (frameIndex - 202) / (210 - 202)

        text3Opacity = fraction
    } else if (frameIndex >= 210 && frameIndex <= 236) {
        text3Opacity = 1
    } else if (frameIndex >= 236 && frameIndex <= 243) {
        const fraction = 1 - (frameIndex - 236) / (243 - 236)

        text3Opacity = fraction
    } else if (frameIndex < 202 || frameIndex > 243) {
        text3Opacity = 0
    }

    if (frameIndex >= 236 && frameIndex <= 243) {
        const fraction = (frameIndex - 236) / (243 - 236)

        gradientOpacity = fraction
    } else if (frameIndex >= 243) {
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
