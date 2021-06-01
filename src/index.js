import api from './models/api';
import UI from './models/interface';

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('input-value');
const searchBtn = document.getElementById('searchBtn');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

searchBtn.addEventListener('click', async () => {
  if (searchInput.value === '') return;
  const apiData = await api.getData(searchInput.value);
  UI.setSearchData(apiData);
  searchInput.textContent = '';
  searchForm.reset();
  searchInput.focus();
});
