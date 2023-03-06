const APIkey = '32042597-d449e2f3b6adbf69100237dc7';

const onFetchHendler = (imgSearchName, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${imgSearchName}
    &key=${APIkey}&image_type=photo&orientation=horizontal
    &per_page=12&page=${page}`
  ).then(response => {
    if (!response.ok) {
      throw new Error('there are no such image, please try again.');
    }
    return response.json();
  });
};
export default onFetchHendler;