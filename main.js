
const bookContainer = document.querySelector('.book-card-container');
const endCard = document.querySelector('.dialogBtn-card');
const dialogBox = document.querySelector('dialog');
const showDialogBtn = document.querySelector('.showDialogBtn');
const cancelBtn = document.querySelector('.cancelBtn');
const formElement = document.querySelector('form');
const bookCardTemplate = document.querySelector('template');

const myLibrary = [];

showDialogBtn.addEventListener('click', showModalBox);
cancelBtn.addEventListener('click', closeModalBox);
formElement.addEventListener('submit', addBookCard);
bookContainer.addEventListener('click', performEvent);


//------------- Book Object---------------------------------------------
function Book(title = null, author = null, pages = null, isRead = null) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.changeReadStatus = function () {
    this.isRead = !this.isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function getBookWithFormData() {
    const book = new Book();

    readFormData(book);

    return book;
}
//----------------------------------------------------------------


//------------- Book Card in DOM ----------------------------------
function createBookCard(book) {
    const card = document.createElement('div');
    card.classList.add('card', 'book');

    const content = bookCardTemplate.content.cloneNode(true);
    card.appendChild(content);

    setCardContent(card, book);
    setCardState(card, book);

    return card;
}

function deleteBookCard(card) {
    const index = findCardIndex(card);

    myLibrary.splice(index, 1);
    bookContainer.removeChild(card);
}

function addBookCard() {
    const book = getBookWithFormData();
    const card = createBookCard(book);

    addBookToLibrary(book);
    formElement.reset();
    setCardState(card, book);

    endCard.before(card);
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

function findCardIndex(card) {
    return Array.prototype.indexOf.call(bookContainer.children, card);
}
//----------------------------------------------------------------------

//--------------- Form methods ----------------------------------------------------------------
function readFormData(book) {
    book.title = document.getElementById('titleInput').value;
    book.author = document.getElementById('authorInput').value;
    book.pages = Number(document.getElementById('pagesInput').value);
    book.isRead = document.getElementById('isRead').checked;
}
//----------------------------------------------------------------

//--------------- Modal Box -----------------
function showModalBox() {
    dialogBox.showModal();
}

function closeModalBox() {
    dialogBox.close();
}
//----------------------------------------------------------------------

//---------------- Event Handler functions ----------------------------------------------------------------
function performEvent(e) {
    const card = e.target.closest('.book');

    if (e.target.classList.contains('delBtn')) {
        deleteBookCard(card);
    }
    else if (e.target.classList.contains('readStatusBtn')) {
        const index = findCardIndex(card);
        myLibrary[index].changeReadStatus();
        setCardState(card, myLibrary[index]);
    }
}






