const entities = [
    {
        text: 'Rostov-on-Don, Admiral',
        img: 'img/image2.1.jpg'
    },
    {
        text: 'Sochi Thieves',
        img: 'img/image2.jpg'
    },
    {
        text: 'Rostov-on-Don Patriotic',
        img: 'img/image3.jpg'
    }
]

const text = document.querySelector('.projects-nav__a');
const img = document.querySelector('.image');
const sochi = document.getElementById('sochi');
const admiral = document.getElementById('admiral');
const patriotic = document.getElementById('patriotic');
const round_sochi = document.getElementById('round_sochi');
const round_admiral = document.getElementById('round_admiral');
const round_patriotic = document.getElementById('round_patriotic');

const setEntity = (index) => {
    text.innerText = entities[index].text
    img.style.backgroundImage = `url("${entities[index].img}")`;
}

sochi.onclick = () => {
    img.style.backgroundImage = `url("${entities[1].img}")`;
}

admiral.onclick = () => {
    img.style.backgroundImage = `url("${entities[0].img}")`;
}

patriotic.onclick = () => {
    img.style.backgroundImage = `url("${entities[2].img}")`;
}

round_sochi.onclick = () => {
    img.style.backgroundImage = `url("${entities[1].img}")`;
}

round_admiral.onclick = () => {
    img.style.backgroundImage = `url("${entities[0].img}")`;
}

round_patriotic.onclick = () => {
    img.style.backgroundImage = `url("${entities[2].img}")`;
}

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let currentIndex = 0;

prev.addEventListener('click', () => {
    if (currentIndex === 0) {
        currentIndex = 2;
        setEntity(2)
    } else {
        setEntity(currentIndex - 1);
        currentIndex -= 1;
    }
})

next.addEventListener('click', () => {
    if (currentIndex === 2) {
        currentIndex = 0;
        setEntity(0)
    } else {
        setEntity(currentIndex + 1);
    currentIndex += 1;
    }
})