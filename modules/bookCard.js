import { getCardTemplate, addCardToDOM , removeCardFromDOM} from "./DOM.js"


function createCard(book){
    const card = getCardTemplate();
    
    setCardContent(card, book);
    setCardState(card, book);

    addCardToDOM(card);
}

function setCardContent(card, book) {
    const title = card.querySelector('.title');
    const author = card.querySelector('.author');
    const pages = card.querySelector('.pages');

    title.textContent = `${book.title}`;
    author.textContent = `By: ${book.author}`;
    pages.textContent = `Pages: ${book.pages}`;
}

function setCardState(card, book) {
    const readBtn = card.querySelector('.readStatusBtn');

    if (book.isRead) {
        readBtn.textContent = "Mark as unread";
        card.classList.add('read');

    }
    else {
        readBtn.textContent = "Mark as read";
        card.classList.remove('read');
    }
}

function deleteCard(card){
    removeCardFromDOM(card);
}

export {createCard, deleteCard, setCardState};