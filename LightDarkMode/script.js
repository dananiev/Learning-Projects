let body = document.body;
let toggleBtn = document.querySelector('.toggle-btn');
let currentTheme = localStorage.getItem('currentTheme');

if (currentTheme) body.classList.add('dark-theme');

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    body.classList.contains('dark-theme') 
        ? localStorage.setItem('currentTheme', 'themeActive') 
        : localStorage.removeItem('currentTheme')
});