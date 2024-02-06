import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const button = document.querySelector('.button');
const gallery = document.querySelector('.gallery');

button.addEventListener('click', () => {
  fetchUsers()
    .then(images => renderUsers(images))
    .catch(error => console.log(error));
});

function fetchUsers() {
  //   const search = form.search.value;
  return fetch(
    'https://pixabay.com/api/?key=42241202-737945e445eb9c5ec6bcca7e8&q=dog_type=photo'
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderUsers(images) {
  const markup = images
    .map(image => {
      return `
      <li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img class="gallery-image" src="${image.previewURL}" alt="${image.pageURL}" />
      </a>
    </li>
      `;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}
const options = {
  captionsData: 'alt',
  captionDelay: 250,
};

const lightbox = new SimpleLightbox('.gallery a', options);
