document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');

  const readingList = document.querySelector('#reading-list')

  const handleFormSubmit = function (event) {
    event.preventDefault();
    console.dir(event);

    const newReadingListItem = document.createElement('li');
    const readingList = document.querySelector('#reading-list');  
    newReadingListItem.textContent = `Title: ${event.target.title.value}, Author: ${event.target.author.value}, Category: ${event.target.category.value}`
    readingList.appendChild(newReadingListItem);
  
    form.reset();
  }
  
  const handleDeleteAll = function (event) {
    console.log('I\'m listening');
    while (readingList.hasChildNodes()){
      readingList.removeChild(readingList.firstChild);
    }
    
  }
  
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButtonDiv = document.querySelector('#delete-button');

  const button = document.createElement('button');
  const text = document.createTextNode('Delete All');
  button.appendChild(text);
  deleteButtonDiv.appendChild(button);
  button.addEventListener('click', handleDeleteAll);
})
