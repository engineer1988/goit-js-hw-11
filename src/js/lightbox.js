import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'css-loader';

const form = document.querySelector('.form');
const button = document.querySelector('.button');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
loader.classList.add('hide');

button.addEventListener('click', () => {
  loader.classList.remove('hide');
  fetchUsers()
    .then(images => renderUsers(images))
    .catch(error => console.log(error));
  form.reset();
});

function fetchUsers() {
  const search = form.search.value;
  loader.classList.add('loader');
  const URL = `https://pixabay.com/api/?key=42241202-737945e445eb9c5ec6bcca7e8&q=${search}&image_type=photo&orientation=horizontal&safesearch=true`;
  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderUsers(images) {
  if (images.hits.length === 0) {
    iziToast.error({
      backgroundColor: 'rgb(239, 64, 64)',
      titleSize: '16px',
      titleColor: 'rgb(250, 250, 251)',
      messageColor: 'rgb(250, 250, 251)',
      title: 'Error',
      position: 'topRight',
      message: 'Sorry, there are no images matching your search query.',
    });
  }

  const markup = images.hits
    .map(image => {
      return `
      <li class="gallery-item">
      <a class="gallery-link" href=${image.largeImageURL}>
        <img class="gallery-image" src=${image.webformatURL} alt=${image.tags} />
      </a>
    </li>
      `;
    })
    .join('');
  gallery.innerHTML = '';
  gallery.innerHTML = markup;
  const options = {
    captionsData: 'alt',
    captionDelay: 250,
  };

  const lightbox = new SimpleLightbox('.gallery a', options);
  lightbox.refresh();
  loader.classList.add('hide');
}
