let myLibrary = ['RuneScape Handbook'];

function Book(name, author, pages, readYet) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.readYet = readYet;
}

function addBookToLibrary() {
    for (i = 0; i < myLibrary.length; i++) {

    }
}

const inputs = document.querySelector('library');

// Button implementation for adding book to library
const buttonAdd = document.querySelector('#new-book');
buttonAdd.addEventListener('click', () => {
    let nameInputField = document.createElement('input');
    nameInputField.setAttribute('type', 'text');
    nameInputField.setAttribute('name', 'name');
    nameInputField.setAttribute('id', 'name');
    nameInputField.setAttribute('class', 'name');
    nameInputField.setAttribute('placeholder', 'Name');
    document.getElementById('library').appendChild(nameInputField);

    let authorInputField = document.createElement('input');
    authorInputField.setAttribute('type', 'text');
    authorInputField.setAttribute('name', 'author');
    authorInputField.setAttribute('id', 'author');
    authorInputField.setAttribute('class', 'author');
    authorInputField.setAttribute('placeholder', 'Author');
    document.getElementById('library').appendChild(authorInputField);

    let pagesInputField = document.createElement('input');
    pagesInputField.setAttribute('type', 'text');
    pagesInputField.setAttribute('name', 'pages');
    pagesInputField.setAttribute('id', 'pages');
    pagesInputField.setAttribute('class', 'pages');
    pagesInputField.setAttribute('placeholder', 'Pages');
    document.getElementById('library').appendChild(pagesInputField);

    let readYetInputLabel = document.createElement('label');
    readYetInputLabel.setAttribute('for', 'readYet');
    readYetInputLabel.textContent = 'Read Yet?'
    document.getElementById('library').appendChild(readYetInputLabel);

    let readYetInputField = document.createElement('input');
    readYetInputField.setAttribute('type', 'checkbox');
    readYetInputField.setAttribute('name', 'readYet');
    readYetInputField.setAttribute('id', 'readYet');
    readYetInputField.setAttribute('class', 'readYet');
    document.getElementById('library').appendChild(readYetInputField);

    nameInputField.style.cssText = 'padding: 5px; margin: 20px 10px 5px 10px;';
    authorInputField.style.cssText = 'padding: 5px; margin: 20px 10px 5px 10px;';
    pagesInputField.style.cssText = 'padding: 5px; margin: 20px 10px 5px 10px;';
    readYetInputLabel.style.cssText = 'padding: 10px; margin: 20px 0 5px 10px;';
    readYetInputField.style.cssText = 'padding: 5px; margin: 20px 10px 5px 0;';
});

const buttonRemove = document.querySelector('#remove-book');
buttonRemove.addEventListener('click', () => {
    
});