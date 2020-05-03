function revealMessage() {
    document.getElementById('hiddenMessage').style.display = 'block';
}

function countDown() {
    let currentValue = document.getElementById('countDownButton').innerHTML;
    let newValue = 0;

    if (currentValue > 0) {
        newValue = currentValue - 1;
    }

    document.getElementById('countDownButton').innerHTML = newValue;
}