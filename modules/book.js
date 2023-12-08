
class Book {
    constructor({title, author, pages, isRead}){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead; 
    }

    changeReadStatus(){
        this.isRead = !this.isRead;
    }
}

export default Book;