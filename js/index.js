function goBack(){{
    setTimeout(() => {
        window.location = '../index.html'
    }, 4000)
}}

document.querySelector('#yes').addEventListener('click', function () {
    document.querySelector('.follow-rabbit').style.display = "none";
    document.querySelector('.rabbit-hole').style.display = "block";

    setTimeout(() => {
        document.querySelector('.rabbit-hole').style.display = "none";
        document.querySelector('.potion-cake').style.display = "block";
    }, 4000)
})

document.querySelector('#no').addEventListener('click', function () {
    document.querySelector('.follow-rabbit').style.display = "none";
    document.querySelector('.after-no').style.display = "block";
    goBack();
})

document.querySelector('#cake').addEventListener('click', () => {
    document.querySelector('.potion-cake').style.display = "none";
    document.querySelector('.potion-only').style.display = "block";
})

document.querySelector('#potion').addEventListener('click', potion)
document.querySelector('#potion-2').addEventListener('click', potion)

function potion() {
    document.querySelector('.potion-cake').style.display = "none";
    document.querySelector('.potion-only').style.display = "none";
    document.querySelector('.after-potion').style.display = "block";
    setTimeout(() => {
        document.querySelector('.after-potion').style.display = "none";
        document.querySelector('.rabbit-gloves').style.display = "block";
    }, 4000)
}

document.querySelector('#get-em').addEventListener('click', () => {
    document.querySelector('.rabbit-gloves').style.display = "none";
    document.querySelector('.after-gloves').style.display = "block";
    setTimeout(() => {
        document.querySelector('.after-gloves').style.display = "none";
        gloves();
    }, 4000)
})

document.querySelector('#cant-find').addEventListener('click', () => {
    document.querySelector('.rabbit-gloves').style.display = "none";
    gloves();
})

function gloves() {
    document.querySelector('.rabbit-late').style.display = "block";
}

document.querySelector('#continue').addEventListener('click', () => {
    document.querySelector('.rabbit-late').style.display = "none";
    document.querySelector('.after-late').style.display = "block";
    setTimeout(() => {
        document.querySelector('.after-late').style.display = "none";
        document.querySelector('.cheshire').style.display = "block";
    }, 4000)
})

document.querySelector('#continue-cat').addEventListener('click', () => {
    document.querySelector('.cheshire').style.display = "none";
    document.querySelector('.which-road').style.display = "block";
})

//LEFT
document.querySelector('#left').addEventListener('click', () => {
    document.querySelector('.which-road').style.display = "none";
    document.querySelector('.after-left').style.display = "block";
    setTimeout(() => {
        document.querySelector('.after-left').style.display = "none";
        document.querySelector('.continue-stay').style.display = "block";
    }, 4000)
})

document.querySelector('#stay').addEventListener('click', () => {
    document.querySelector('.continue-stay').style.display = "none";
    document.querySelector('.after-stay').style.display = "block";
    goBack();
})

document.querySelector('#continue-chase').addEventListener('click', () => {
    document.querySelector('.continue-stay').style.display = "none";
    document.querySelector('.after-continue').style.display = "block";
    setTimeout(() => {
        document.querySelector('.after-continue').style.display = "none";
        document.querySelector('.queens-castle').style.display = "block";
        playingCards();
    }, 4000)
})

//RIGHT
document.querySelector('#right').addEventListener('click', () => {
    document.querySelector('.which-road').style.display = "none";
    document.querySelector('.queens-castle').style.display = "block";
    setTimeout(() => {
        playingCards();
    }, 4000)
})

function playingCards() {
    document.querySelector('.queens-castle').style.display = "none";
    document.querySelector('.c1-1').style.display = "block";
}

document.querySelector('#continue-c1-1').addEventListener('click', () => {
    document.querySelector('.c1-1').style.display = "none";
    document.querySelector('.c2-1').style.display = "block";
})

document.querySelector('#continue-c2-1').addEventListener('click', () => {
    document.querySelector('.c2-1').style.display = "none";
    document.querySelector('.after-c2-1').style.display = "block";
    setTimeout(() => {
        document.querySelector('.after-c2-1').style.display = "none";
        document.querySelector('.wr-1').style.display = "block";
    }, 4000)
})

document.querySelector('#continue-wr-1').addEventListener('click', () => {
    document.querySelector('.wr-1').style.display = "none";
    document.querySelector('.qh-1').style.display = "block";
})

document.querySelector('#continue-qh-1').addEventListener('click', () => {
    document.querySelector('.qh-1').style.display = "none";
    document.querySelector('.qh-2').style.display = "block";
})

document.querySelector('#continue-qh-2').addEventListener('click', () => {
    document.querySelector('.qh-2').style.display = "none";
    document.querySelector('.wr-2').style.display = "block";
})

document.querySelector('#continue-wr-2').addEventListener('click', () => {
    document.querySelector('.wr-2').style.display = "none";
    document.querySelector('.qh-3').style.display = "block";
})

document.querySelector('#continue-qh-3').addEventListener('click', () => {
    document.querySelector('.qh-3').style.display = "none";
    document.querySelector('.win-lose').style.display = "block";
})

document.querySelector('#win').addEventListener('click', () => {
    document.querySelector('.win-lose').style.display = "none";
    document.querySelector('.after-win').style.display = "block";
    goBack();
})

document.querySelector('#lose').addEventListener('click', () => {
    document.querySelector('.win-lose').style.display = "none";
    document.querySelector('.after-lose').style.display = "block";
    setTimeout(() => {
        document.querySelector('.after-lose').style.display = "none";
        document.querySelector('.after-lose-1').style.display = "block";
    }, 4000)

    setTimeout(() => {
        document.querySelector('.after-lose-1').style.display = "none";
        document.querySelector('.doors').style.display = "block";
    }, 4000)
})

document.querySelector('#d1').addEventListener('click', () => {
    document.querySelector('.doors').style.display = "none";
    document.querySelector('.after-d1').style.display = "block";
    goBack();
})

document.querySelector('#d2').addEventListener('click', () => {
    document.querySelector('.doors').style.display = "none";
    document.querySelector('.after-d2').style.display = "block";
    goBack();
})

document.querySelector('#d3').addEventListener('click', () => {
    document.querySelector('.doors').style.display = "none";
    document.querySelector('.after-d3').style.display = "block";
    goBack();
})