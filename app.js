const moon = "M75 150C75 232.843 150 300 150 300C67.1573 300 0 232.843 0 150C0 67.1573 67.1573 0 150 0C150 0 75 67.1573 75 150Z";
const sun = "M300 150C300 232.843 232.843 300 150 300C67.1573 300 0 232.843 0 150C0 67.1573 67.1573 0 150 0C232.843 0 300 67.1573 300 150Z"
const svg = document.querySelector('#svg');
let toggle = false;

svg.addEventListener('click', (e) => {
    const tl = anime.timeline({
        duration: 750,
        easing: 'easeOutExpo',
    });
    if (toggle) {
        tl.add({
            targets: ".sun",
            d: [{ value: sun }],
            fill: '#F1FF4D'
        }).add({
            targets: '#svg',
            rotate: 0,
            duration: 750
        });
        document.body.style.background = 'white'
        toggle = !toggle
    } else {
        tl.add({
            targets: ".sun",
            d: [{ value: moon }],
            fill: '#ffffff'
        }).add({
            targets: '#svg',
            rotate: 320,
            duration: 750
        });
        toggle = !toggle
        document.body.style.background = 'black'
    }
});