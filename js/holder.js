document.getElementById('submit-search').addEventListener('click', function(event) {
    document.getElementById('search-input').style.display = 'flex';
    document.getElementById('add-search').style.width = '100%';
    // document.getElementById('subheader__add-search').style.justifyContent = "space-between"
    document.getElementById('menu').style.display = 'none';
    document.getElementById('search-icon').style.display = 'none';
    document.getElementById('search-container').style.display = 'flex';
    document.getElementById('search-input').focus(); // Устанавливаю фокус на поле поиска

});

document.getElementById('cancel-search').addEventListener('click', function(event) {
    // Возвращаем меню и скрываем поисковую строку
    document.getElementById('search-input').style.display = 'none';
    document.getElementById('add-search').style.width = '';
    document.getElementById('search-icon').style.display = 'flex';
    document.getElementById('menu').style.display = 'flex';
});

document.getElementById('search-field').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const items = document.querySelectorAll('.searchable-item');

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});