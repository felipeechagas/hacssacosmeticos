$(document).ready(function () {
    $('.carousel').carousel({
        interval: 3000
    });
});

// Função para destacar os resultados da busca
function highlightSearchResults(query) {
    // Remove highlights existentes
    const highlights = document.querySelectorAll('mark');
    highlights.forEach(el => el.outerHTML = el.innerHTML);

    if (query) {
        const regex = new RegExp(query, 'gi'); // Regex para busca insensível a maiúsculas e minúsculas
        const bodyText = document.body.innerHTML;
        document.body.innerHTML = bodyText.replace(regex, match => `<mark>${match}</mark>`);
    }
}

// Adiciona um ouvinte de evento ao formulário de busca
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const query = document.getElementById('search-input').value.trim();
    highlightSearchResults(query);
});
