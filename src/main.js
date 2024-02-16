import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import fetchImages from './js/pixabay-api';
import renderImages from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const options = {
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
};

loader.classList.add('hide');

const lightbox = new SimpleLightbox('.gallery a', options);

form.addEventListener('submit', e => {
  e.preventDefault();
  loader.classList.remove('hide');

  fetchImages(e)
    .then(images => renderImages(images))
    .then(markup => viewLightbox(markup))
    .catch(error =>
      iziToast.error({
        maxWidth: '432px',
        messageColor: 'rgb(250, 250, 251)',
        messageSize: '16px',
        backgroundColor: 'rgb(239, 64, 64)',
        position: 'topRight',
        message: `${error}`,
      })
    );
  form.reset();
});

function viewLightbox(markup) {
  gallery.innerHTML = '';
  gallery.innerHTML = markup;

  lightbox.refresh();
  loader.classList.add('hide');
}
