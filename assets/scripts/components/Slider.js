export default class Slider {
    constructor() {
        this.slides = document.querySelectorAll('.slide')
        this.dots = document.querySelectorAll('.dots span')
        this.slidesContainer = document.querySelector('.slides')

        this.currentSlideIndex = 0
        this.currentFrame = index => `https://we-generate.kairos-valley.net/wp-content/themes/neptune/images/loop/${index.toString().padStart(3, '0')}.webp`
        this.frameCount = 283
        this.currentImage = 0
        this.images = []

        // this.setupEventListeners()
        this.startAutoSlide()
        this.preloadImages()
        this.setupCanvasAnimation1()
    }

    setupEventListeners() {
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.showSlide(index)
                this.resetAutoSlide()
            })
        })
    }

    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => {
            this.showNextSlide()
        }, 6600)
    }

    resetAutoSlide() {
        clearInterval(this.autoSlideInterval)
        this.startAutoSlide()
    }

    showSlide(index) {
        if (index === this.currentSlideIndex) {
            return
        }

        this.slides[this.currentSlideIndex].classList.remove('active')

        setTimeout(() => {
            this.slides[index].classList.add('active')
        }, 600)

        this.currentSlideIndex = index

        this.dots.forEach((dot, dotIndex) => {
            if (dotIndex === index) {
                dot.classList.add('active')
            } else {
                dot.classList.remove('active')
            }
        })
    }

    showNextSlide() {
        const nextSlideIndex = (this.currentSlideIndex + 1) % this.slides.length
        this.showSlide(nextSlideIndex)

        if (this.currentSlideIndex === 0) {
            this.setupCanvasAnimation1()
        } else if (this.currentSlideIndex === 1) {
            this.setupCanvasAnimation2()
        } else if (this.currentSlideIndex === 2) {
            this.setupCanvasAnimation3()
        }
    }

    resetCanvasAnimation1() {
        clearInterval(this.canvasIntervalId1)
        this.setupCanvasAnimation1()
    }

    resetCanvasAnimation2() {
        clearInterval(this.canvasIntervalId2)
        this.setupCanvasAnimation2()
    }

    resetCanvasAnimation3() {
        clearInterval(this.canvasIntervalId3)
        this.setupCanvasAnimation3()
    }

    preloadImages() {
        const imgs = []

        for (let i = 0; i < this.frameCount; i++) {
            const img = new Image()
            img.src = this.currentFrame(i)
            imgs.push(img)
        }

        this.images = imgs
    }

    drawImage(canvas) {
        const context = canvas.getContext('2d')

        if (this.images[this.currentImage]) {
            context.clearRect(0, 0, canvas.width, canvas.height)
            context.drawImage(this.images[this.currentImage], 0, 0)
        } else {
            context.clearRect(0, 0, canvas.width, canvas.height)
            context.drawImage(finalImage, 0, 0)
        }
    }

    setupCanvasAnimation1() {
        const canvas = document.getElementById('loop1')

        const finalImage = new Image()
        finalImage.src = this.currentFrame(this.frameCount - 1)

        canvas.width = 1920
        canvas.height = 1080

        let count = 0

        this.canvasIntervalId1 = setInterval(() => {
            if (count < this.frameCount) {
                this.currentImage = count
                this.drawImage(canvas)

                count++
            } else {
                this.currentImage = 0
                this.drawImage(canvas)

                clearInterval(this.canvasIntervalId1)
            }
        }, 25)

        this.images[0].onload = () => {
            this.drawImage(canvas)
        }
    }

    setupCanvasAnimation2() {
        const canvas = document.getElementById('loop2')

        const finalImage = new Image()
        finalImage.src = this.currentFrame(this.frameCount - 1)

        canvas.width = 1920
        canvas.height = 1080

        let count = 0

        this.canvasIntervalId2 = setInterval(() => {
            if (count < this.frameCount) {
                this.currentImage = count
                this.drawImage(canvas)

                count++
            } else {
                this.currentImage = 0
                this.drawImage(canvas)

                clearInterval(this.canvasIntervalId2)
            }
        }, 25)

        this.images[0].onload = () => {
            this.drawImage(canvas)
        }
    }

    setupCanvasAnimation3() {
        const canvas = document.getElementById('loop3')

        const finalImage = new Image()
        finalImage.src = this.currentFrame(this.frameCount - 1)

        canvas.width = 1920
        canvas.height = 1080

        let count = 0

        this.canvasIntervalId3 = setInterval(() => {
            if (count < this.frameCount) {
                this.currentImage = count
                this.drawImage(canvas)

                count++
            } else {
                this.currentImage = 0
                this.drawImage(canvas)

                clearInterval(this.canvasIntervalId3)
            }
        }, 25)

        this.images[0].onload = () => {
            this.drawImage(canvas)
        }
    }
}
