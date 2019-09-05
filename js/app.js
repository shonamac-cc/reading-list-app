document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');

  const handleFormSubmit = function (event) {
    event.preventDefault();
    console.dir(event);
    // const newTitleItem = document.createElement('li');
    // const newAuthorItem = document.createElement('li');
    // const newCategoryItem = document.createElement('li')
    const newReadingListItem = document.createElement('ul')
    const readingList = document.querySelector('#reading-list');  
    newReadingListItem.textContent = `Title: ${event.target.title.value}, Author: ${event.target.author.value}, Category: ${event.target.category.value}`
    readingList.appendChild(newReadingListItem);
    // newReadingListItem.appendChild(newTitleItem);
    form.reset();
  }
  
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
})
