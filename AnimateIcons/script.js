function breakChain() {
    let chain = document.getElementById('chain');
    chain.innerHTML = '&#xf0c1';

    setTimeout(function() {
        chain.innerHTML = '&#xf127';
    }, 1000);
}

breakChain();

setInterval(breakChain, 2000);