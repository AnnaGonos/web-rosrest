function getMonthNumber(month) {
    const months = {
        'январь': 0, 'января': 0,
        'февраль': 1, 'февраля': 1,
        'март': 2, 'марта': 2,
        'апрель': 3, 'апреля': 3,
        'май': 4, 'мая': 4,
        'июнь': 5, 'июня': 5,
        'июль': 6, 'июля': 6,
        'август': 7, 'августа': 7,
        'сентябрь': 8, 'сентября': 8,
        'октябрь': 9, 'октября': 9,
        'ноябрь': 10, 'ноября': 10,
        'декабрь': 11, 'декабря': 11
    };
    return months[month.toLowerCase()];
}

function getDaysWord(count) {
    const titles = ['день', 'дня', 'дней'];
    return count % 10 === 1 && count % 100 !== 11 ? titles[0] :
        (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20) ? titles[1] : titles[2]);
}

function getMonthsWord(count) {
    const titles = ['месяц', 'месяца', 'месяцев'];
    return count % 10 === 1 && count % 100 !== 11 ? titles[0] :
        (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20) ? titles[1] : titles[2]);
}

document.querySelectorAll('.event-calendar__item').forEach(item => {
    const dateElement = item.querySelector('.event-calendar__date span:nth-child(1)');

    const eventDateText = dateElement.textContent;
    const [dayText, monthText] = eventDateText.split(' ');
    const day = parseInt(dayText);
    const month = getMonthNumber(monthText);
    const year = 2025;
    const eventDate = new Date(year, month, day);

    const currentDate = new Date();

    const messageElement = item.querySelector('.event-calendar__event-message');
    let message = '';

    if (currentDate.getDate() === eventDate.getDate() &&
        currentDate.getMonth() === eventDate.getMonth() &&
        currentDate.getFullYear() === eventDate.getFullYear()) {
        message = "Событие идет";
    } else {
        const timeDiff = eventDate - currentDate;
        const daysUntilEvent = Math.ceil(timeDiff / (1000 * 3600 * 24));
        if (daysUntilEvent < 0) {
            message = "Событие прошло";
        } else if (daysUntilEvent < 30) {
            message = `Через ${daysUntilEvent} ${getDaysWord(daysUntilEvent)}`;
        } else {
            const monthsUntilEvent = Math.ceil(daysUntilEvent / 30);
            message = `${monthsUntilEvent} ${getMonthsWord(monthsUntilEvent)} до события`;
        }
    }

    messageElement.textContent = message || "Событие не найдено";
});