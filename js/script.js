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
const cityGallery = document.getElementById('city_gallery');
const areaGallery = document.getElementById('area_gallery');
const timeGallery = document.getElementById('time_gallery');

const setEntity = (index) => {
    text.innerText = entities[index].text
    img.style.backgroundImage = `url("${entities[index].img}")`;
}

sochi.onclick = () => {
    img.style.backgroundImage = `url("${entities[1].img}")`;
    sochi.style.color = "#E3B873";
    sochi.style.textDecoration = "underline";
    admiral.style.color = "rgba(255, 255, 255, 0.3)";
    admiral.style.textDecoration = "none";
    patriotic.style.color = "rgba(255, 255, 255, 0.3)";
    patriotic.style.textDecoration = "none";
    cityGallery.textContent = "Sochi Thieves";
    areaGallery.textContent = "105 m2";
    timeGallery.textContent = "4 months";
    round_sochi.src = "icons/cirwhite.svg";
    round_admiral.src = "icons/cirgrey.svg";
    round_patriotic.src = "icons/cirgrey.svg";
}

admiral.onclick = () => {
    img.style.backgroundImage = `url("${entities[0].img}")`;
    admiral.style.color = "#E3B873";
    admiral.style.textDecoration = "underline";
    sochi.style.color = "rgba(255, 255, 255, 0.3)";
    sochi.style.textDecoration = "none";
    patriotic.style.color = "rgba(255, 255, 255, 0.3)";
    patriotic.style.textDecoration = "none";
    cityGallery.textContent = "Rostov-on-Don LCD admiral";
    areaGallery.textContent = "81 m2";
    timeGallery.textContent = "3.5 months";
    round_admiral.src = "icons/cirwhite.svg";
    round_sochi.src = "icons/cirgrey.svg";
    round_patriotic.src = "icons/cirgrey.svg";
}

patriotic.onclick = () => {
    img.style.backgroundImage = `url("${entities[2].img}")`;
    patriotic.style.color = "#E3B873";
    patriotic.style.textDecoration = "underline";
    sochi.style.color = "rgba(255, 255, 255, 0.3)";
    sochi.style.textDecoration = "none";
    admiral.style.color = "rgba(255, 255, 255, 0.3)";
    admiral.style.textDecoration = "none";
    cityGallery.textContent = "Rostov-on-Don Patriotic";
    areaGallery.textContent = "93 m2";
    timeGallery.textContent = "3 months";
    round_patriotic.src = "icons/cirwhite.svg";
    round_sochi.src = "icons/cirgrey.svg";
    round_admiral.src = "icons/cirgrey.svg";
}

round_sochi.onclick = () => {
    img.style.backgroundImage = `url("${entities[1].img}")`;
    round_sochi.src = "icons/cirwhite.svg";
    round_admiral.src = "icons/cirgrey.svg";
    round_patriotic.src = "icons/cirgrey.svg";
}

round_admiral.onclick = () => {
    img.style.backgroundImage = `url("${entities[0].img}")`;
    round_admiral.src = "icons/cirwhite.svg";
    round_sochi.src = "icons/cirgrey.svg";
    round_patriotic.src = "icons/cirgrey.svg";
}

round_patriotic.onclick = () => {
    img.style.backgroundImage = `url("${entities[2].img}")`;
    round_patriotic.src = "icons/cirwhite.svg";
    round_sochi.src = "icons/cirgrey.svg";
    round_admiral.src = "icons/cirgrey.svg";
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