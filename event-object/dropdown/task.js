const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = document.querySelector('.dropdown__list');

dropdownValue.addEventListener ('click', () => {
  dropdownList.classList.toggle ('dropdown__list_active')});

dropdownItem.forEach(dropdownItem => {
  dropdownItem.addEventListener('click', (event) => {
    event.preventDefault();
    let selectedItem = dropdownItem.querySelector('dropdown__link').textContent;
    dropdownItem.textContent = selectedItem;
    dropdownList.classList.remove('dropdown__list_active')
  })
})