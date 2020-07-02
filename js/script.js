const entities = [
    {
        text: 'Rostov-on-Don, Admiral',
        img: '../img/image2.1.jpg'
    },
    {
        text: 'Sochi Thieves',
        img: '../img/image2.jpg'
    },
    {
        text: 'Rostov-on-Don Patriotic',
        img: '../img/image3.jpg'
    }
]

const text = document.querySelector('.projects-nav__a')
const img = document.querySelector('.image')

const setEntity = (index) => {
    text.innerText = entities[index].text
    img.style.backgroundImage = `url(${entities[index].img})`
}

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
let currentIndex = 0

prev.addEventListener('click', () => {
    setEntity(currentIndex - 1);
    currentIndex -= 1;
})

next.addEventListener('click', () => {
    setEntity(currentIndex + 1);
    currentIndex += 1;
})