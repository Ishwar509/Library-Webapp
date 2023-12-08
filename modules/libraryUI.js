import Book from "./book.js";
import myLibrary from "./library.js";
import getFormData from "./form.js";
import {createCard, deleteCard, setCardState} from "./bookCard.js";

const formElement = document.querySelector('form');
const modalBox = document.querySelector('dialog');
const showModalBoxBtn = document.querySelector('button[data-action="addBook"]');
const cancelBtn = document.querySelector('button[data-action="closeForm"]');
const bookCardContainer = document.querySelector('.bookCardContainer')

function loadLibraryUI(){
    setupEventListeners();
    addBook({title:'Game of Thrones', author: 'George R.R Martin', pages: 900, isRead: false});
    addBook({title: 'It', author: 'Stephen King', pages: 600, isRead: false});
}

function setupEventListeners(){
    showModalBoxBtn.addEventListener('click', () => {
        modalBox.showModal();
    });
    
    cancelBtn.addEventListener('click', ()=>{
        modalBox.close();
    });
    
    formElement.addEventListener('submit', ()=>{
        addBook();
    });
    
    bookCardContainer.addEventListener('click', performEvent);
}

function addBook(bookData = getFormData(formElement)){
    const book = new Book(bookData);
    myLibrary.addBookToLibrary(book);
    createCard(book);
}

function findCardIndex(card){
    return Array.prototype.indexOf.call(bookCardContainer.children, card);
}

function performEvent(e){
    const card = e.target.closest('.book');
    const action = e.target.dataset.action;
    
    if (action === 'delete') {
        const index = findCardIndex(card);
        myLibrary.removeBookFromLibrary(index); 
        deleteCard(card);
    }
    else if (action === 'changeStatus') {
        const index = findCardIndex(card);
        const book = myLibrary.getBook(index);
        book.changeReadStatus();
        setCardState(card, book);
    }
}

export default loadLibraryUI;