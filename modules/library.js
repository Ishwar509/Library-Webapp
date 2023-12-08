
class Library {
    #bookCollection = [];

    addBookToLibrary(book){
        this.#bookCollection.push(book);
    }

    removeBookFromLibrary(index){
        this.#bookCollection.splice(index, 1);
    }

    getBook(index){
        return this.#bookCollection[index];
    }
}

const myLibrary = new Library();

export default myLibrary;