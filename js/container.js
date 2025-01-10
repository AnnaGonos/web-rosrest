document.addEventListener('DOMContentLoaded', function () {
    const aside = document.querySelector('aside');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    const container = document.createElement('div');
    container.className = 'columns-container';

    container.style.display = 'flex';

    const leftColumn = document.createElement('div');
    leftColumn.style.flex = '1';

    leftColumn.appendChild(main);

    container.appendChild(leftColumn);
    container.appendChild(aside);

    document.body.appendChild(container);
    if (footer) {
        document.body.appendChild(footer);
    }
});