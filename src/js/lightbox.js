import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'css-loader';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
loader.classList.add('hide');

form.addEventListener('submit', e => {
  e.preventDefault();
  loader.classList.remove('hide');
  fetchUsers(e)
    .then(images => renderUsers(images))
    .catch(error => console.log(error));
  form.reset();
});

function fetchUsers(e) {
  const search = e.target.elements.search.value;
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
      maxWidth: '432px',
      messageColor: 'rgb(250, 250, 251)',
      messageSize: '16px',
      backgroundColor: 'rgb(239, 64, 64)',
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }
  const markup = images.hits
    .map(image => {
      return `
      <li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <div class="image-text">
       <div class="image-text-item"> 
        <h2>Likes</h2>
        <span class="span-size">${image.likes}</span>
       </div> 
       <div class="image-text-item"> 
        <h2>Views</h2>
        <span class="span-size">${image.views}</span>
       </div> 
       <div class="image-text-item"> 
        <h2>Comments</h2>
        <span class="span-size">${image.comments}</span>
       </div> 
       <div class="image-text-item"> 
        <h2>Downloads</h2>
        <span class="span-size">${image.downloads}</span>
       </div> 
      </div>
    </li>`;
    })
    .join('');
  gallery.innerHTML = '';
  gallery.innerHTML = markup;

  const options = {
    captionSelector: 'img',
    captionsData: 'alt',
    captionDelay: 250,
  };

  const lightbox = new SimpleLightbox('.gallery a', options);
  lightbox.refresh();
  loader.classList.add('hide');
}
