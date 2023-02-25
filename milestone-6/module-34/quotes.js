const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => showQuote(data));
}

const showQuote = data => {
    const blockQuote = document.getElementById('quote');
    blockQuote.innerText = data.quote;
}

loadQuote();