document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');

  const handleFormSubmit = function (event) {
    event.preventDefault();
    console.dir(event);
    
    const newReadingListItem = document.createElement('li')
    const readingList = document.querySelector('#reading-list');  
    newReadingListItem.textContent = `Title: ${event.target.title.value}, Author: ${event.target.author.value}, Category: ${event.target.category.value}`
    readingList.appendChild(newReadingListItem);
  
    form.reset();
  }
  
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
})
