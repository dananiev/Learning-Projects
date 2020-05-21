let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;

        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = 'yellow';
        }
        if (count < 0) {
            value.style.color = 'magenta';
        }
        if (count === 0) {
            value.style.color = '#fff';
        }

        value.textContent = count;
    });
});