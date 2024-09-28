const BASE_URL = 'https://the-one-api.dev/v2';
const END_POINT = '/character';
const KEY = 'A4ZGTeDuebL19mljqwqU';
const characterListEl = document.querySelector('.js-list');
const loadBtnEl = document.querySelector('.js-load');
let currentPage = 1;

loadBtnEl.addEventListener('click', onLoadClick);

function onLoadClick() {
  currentPage += 1;
  getCharacter(currentPage)
    .then(data => {
      characterListEl.insertAdjacentHTML('beforeend', createMarkup(data.docs));
      if (data.page === data.pages) {
        loadBtnEl.style.display = 'none';
      }
    })
    .catch(err => console.log(err));
}

function getCharacter(page = 1) {
  const params = new URLSearchParams({
    limit: 20,
    page: `${page}`,
  });

  const option = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${KEY}`,
    },
  };

  return fetch(`${BASE_URL}${END_POINT}?${params}`, option).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}

getCharacter()
  .then(data => {
    characterListEl.insertAdjacentHTML('beforeend', createMarkup(data.docs));

    if (data.page !== data.pages) {
      loadBtnEl.style.display = 'block';
    }
  })
  .catch(err => console.log(err));

function createMarkup(arr) {
  return arr
    .map(({ name, wikiUrl, race, gender }) => {
      return `<li class="item">
        <h2 class="name">${name}</h2>
        <a href="${wikiUrl}" target="_blank" class="link">More information about ${name}</a>
        <h3 class="race">${race}</h3>
        <p class="gender">${gender}</p>
      </li>`;
    })
    .join('');
}
