const sunMoonContainer = document.querySelector('.sun-moon-container');

document.querySelector('.theme-toggle-button').addEventListener('click', () => {
    document.body.classList.toggle('dark')
    const currentRotation = parseInt(getComputedStyle(sunMoonContainer)
    .getProperyValue('--rotation'))
    sunMoonContainer.style.setProperty('--rotation', currentRotation + 180)
})