const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const age = form.elements['age'].value;
  const weight = form.elements['weight'].value;
  const height = form.elements['height'].value;

  // send the data to the back-end for processing
});