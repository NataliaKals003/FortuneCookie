const fortunes = [
    "A smile is your passport into the hearts of others.",
    "A good way to keep healthy is to eat more Chinese food.",
    "Your high-minded principles spell success.",
    "Hard work pays off in the future, laziness pays off now.",
    "Change can hurt, but it leads a path to something better."
];

const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnReset = document.querySelector('#btnReset');
const cookie = document.querySelector('#cookie');
const fortune = document.querySelector("#fortune");

fortune.classList.add("fortune-animation");
cookie.addEventListener('click', handleOpenerClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', enter)

function handleOpenerClick(event) {
    event.preventDefault();
    fortune.textContent = getFortune();
    screen1.classList.add('hide');
    screen2.classList.remove('hide');
}

function handleResetClick() {
    location.reload();
    screen2.classList.add('hide');
    screen1.classList.remove('hide')
}

function getFortune() {
    const index = Math.floor(Math.random() * fortunes.length);
    return fortunes[index];
}

function enter(e) {
    if (e.key === 'Enter') {
        if (screen1.classList.contains('hide') || screen2.classList.contains('hide')) {
            handleResetClick(); // Se estiver na tela 2 e pressionar Enter, reseta a página
        } else {
            handleOpenerClick(); // Se estiver na tela 1 e pressionar Enter, abre a tela 2
        }
    }
}

