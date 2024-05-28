const triangle = document.getElementById('triangle');
const details = document.getElementById('details');
const myText = document.getElementById('myText');
const detailsText = document.getElementById('details-text');

triangle.addEventListener('click', () => {
  details.style.display = 'block';
  const icon = triangle.querySelector('.icon');
  const text = triangle.querySelector('span');

  if (text.textContent === 'Show-details') {
    text.textContent = 'Hide-details';
    icon.classList.remove('bxs-right-arrow');
    icon.classList.add('bxs-down-arrow');
  } else {
    text.textContent = 'Show-details';
    icon.classList.remove('bxs-down-arrow');
    icon.classList.add('bxs-right-arrow');
  }
});






