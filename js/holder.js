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
    document.getElementById('add-search').style.width = ''; //вернулись к прежней ширине
    document.getElementById('search-icon').style.display = 'flex';
    document.getElementById('menu').style.display = 'flex';
});

document.getElementById('search-field').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase(); // текст, введенный в поле
    const items = document.querySelectorAll('.searchable-item'); // далее просто вставлю все элементы которые хочу отфильтровать

    items.forEach(item => {
        const text = item.textContent.toLowerCase(); // получаем текст элемента
        if (text.includes(searchTerm)) {
            item.style.display = ''; // показываем элемент, если он соответствует критерию поиска
        } else {
            item.style.display = 'none'; // ну скрываем элемент, если не соответствует
        }
    });
});