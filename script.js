const dropdown = document.getElementById('customDropdown');
const toggle = document.getElementById('dropdownToggle');
const options = document.getElementById('dropdownOptions');
const items = options.querySelectorAll('.dropdown-option');

toggle.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});

items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(opt => {
      opt.classList.remove('selected');
      opt.querySelector('.checkmark-circle').classList.add('hidden');
    });

    item.classList.add('selected');
    item.querySelector('.checkmark-circle').classList.remove('hidden');
    toggle.textContent = item.textContent.trim();
    dropdown.classList.remove('open');
  });
});

document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});
