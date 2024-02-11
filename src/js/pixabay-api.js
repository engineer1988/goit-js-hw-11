export default function fetchImages(e) {
  const search = e.target.elements.search.value;
  const URL = `https://pixabay.com/api/?key=42241202-737945e445eb9c5ec6bcca7e8&q=${search}&image_type=photo&orientation=horizontal&safesearch=true`;
  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
