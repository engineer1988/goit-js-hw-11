import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export default function renderImages(images) {
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
  loader.classList.add('hide');
}
