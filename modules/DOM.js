
const bookCardContainer = document.querySelector('.bookCardContainer');
const bookCardTemplate = document.querySelector('template');
const endCard = document.querySelector('.dialogBtnCard');

function getCardTemplate(){
    const card = document.createElement('div');
    card.classList.add('card', 'book');

    const content = bookCardTemplate.content.cloneNode(true);
    card.appendChild(content);
    
    return card;
}

function addCardToDOM(card){
    endCard.before(card);
}

function removeCardFromDOM(card){
    bookCardContainer.removeChild(card);
}

export {getCardTemplate, addCardToDOM, removeCardFromDOM};