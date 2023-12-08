
function getFormData(formElement){
    const title = formElement.querySelector('#titleInput').value;
    const author = formElement.querySelector('#authorInput').value;
    const pages = Number(formElement.querySelector('#pagesInput').value);
    const isRead = formElement.querySelector('#isRead').checked;

    formElement.reset();

    return {title, author, pages, isRead};
}

export default getFormData;