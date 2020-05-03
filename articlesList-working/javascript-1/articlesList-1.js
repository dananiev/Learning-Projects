function createArticle() {
    let input = document.getElementById('createTitle');
    let textarea = document.getElementById('createContent');
    let articles = document.getElementById('articles');

    if (input === null || textarea === null || articles === null) {
        throw new Error('Something is wrong...');
    }

    let article = document.createElement("article");
    let h3 = document.createElement('h3');
    let p = document.createElement('p');

    articles.appendChild(article);

    article.appendChild(h3);
    article.appendChild(p);

    h3.innerHTML = input.value;
    p.innerHTML = textarea.value;

    input.value = '';
    textarea.value = '';
}

const keysMap = {
    10: function (evt) {
        createArticle();
    }
}

document.addEventListener("DOMContentLoaded", x => {
    document
        .getElementById("createArticleButton")
        .addEventListener('click', createArticle);

    document
        .addEventListener("keypress", function (evt) {
            if (typeof keysMap[evt.keyCode] === "function") {
                keysMap[evt.keyCode](evt);
            }
    });
});