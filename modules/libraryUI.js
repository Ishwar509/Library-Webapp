import Book from "./book.js";
import myLibrary from "./library.js";
import getFormData from "./form.js";
import {createCard, deleteCard, setCardState} from "./bookCard.js";

const formElement = document.querySelector('form');
const modalBox = document.querySelector('dialog');
const showModalBoxBtn = document.querySelector('.showDialogBtn');
const cancelBtn = document.querySelector('.cancelBtn');
const bookCardContainer = document.querySelector('.book-card-container')

function loadLibraryUI(){
    showModalBoxBtn.addEventListener('click', () => {
        modalBox.showModal();
    });
    
    cancelBtn.addEventListener('click', ()=>{
        modalBox.close();
    });
    
    formElement.addEventListener('submit', addBook);
    
    bookCardContainer.addEventListener('click', performEvent);
}

function addBook(){
    const bookData = getFormData();
    const book = new Book(bookData);
    myLibrary.addBookToLibrary(book);
    createCard(book);
}

function findCardIndex(card){
    return Array.prototype.indexOf.call(bookCardContainer.children, card);
}

function performEvent(e){
    const card = e.target.closest('.book');

    if (e.target.classList.contains('delBtn')) {
        const index = findCardIndex(card);
        myLibrary.removeBookFromLibrary(index); 
        deleteCard(card);
    }
    else if (e.target.classList.contains('readStatusBtn')) {
        const index = findCardIndex(card);
        myLibrary.bookCollection[index].changeReadStatus();
        setCardState(card, myLibrary.bookCollection[index]);
    }
}

export default loadLibraryUI;