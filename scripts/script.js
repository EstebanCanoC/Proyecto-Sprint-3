const customSelect = document.querySelectorAll('.custom-select');

function initCustomSelect() {
    customSelect.forEach((select) => {
        const selected = select.querySelector('.custom-select__selected');
        const items = select.querySelectorAll('.custom-select__option');
        selected.addEventListener('click', () => {
            select.classList.toggle('open');
        });
        items.forEach((item) => {
            item.addEventListener('click', () => {
                selected.innerHTML = item.innerHTML;
                select.classList.remove('open');
            });
        });
    });
}

initCustomSelect();