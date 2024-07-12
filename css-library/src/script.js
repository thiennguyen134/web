document.addEventListener('DOMContentLoaded', () => {
    const donut = document.getElementById('donut');
    const donutBase = donut.querySelector('circle:nth-child(1)');
    const icing = donut.querySelector('path');
    const sprinkles = donut.querySelectorAll('circle:not(:nth-child(1))');

    donut.addEventListener('click', () => {
        donutBase.setAttribute('fill', getRandomColor());
        icing.setAttribute('fill', getRandomColor());
        sprinkles.forEach(sprinkle => {
            sprinkle.setAttribute('fill', getRandomColor());
        });
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
