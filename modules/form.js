const formElement = document.querySelector('form');

function getFormData(){
    const title = document.getElementById('titleInput').value;
    const author = document.getElementById('authorInput').value;
    const pages = Number(document.getElementById('pagesInput').value);
    const isRead = document.getElementById('isRead').checked;

    formElement.reset();

    return {title, author, pages, isRead};
}

export default getFormData;