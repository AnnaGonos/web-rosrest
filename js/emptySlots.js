// function addEmptySlots() {
//     const container = document.querySelector('.charter__container-articles');
//     const items = container.children;
//
//     if (window.innerWidth > 900) {
//         const totalItems = items.length;
//         let countEmpty = 0;
//
//         if (totalItems + countEmpty >= 3) {
//             if (!items[3] || items[3].className !== 'empty') {
//                 const emptyElement = document.createElement('div');
//                 emptyElement.classList.add('charter__report-item', 'empty');
//                 container.insertBefore(emptyElement, items[3]);
//                 countEmpty += 1;
//             }
//         }
//
//         if (totalItems+countEmpty >= 6) {
//             if (!items[6] || items[6].className !== 'empty') {
//                 const emptyElement = document.createElement('div');
//                 emptyElement.classList.add('charter__report-item', 'empty');
//                 container.insertBefore(emptyElement, items[6]);
//             }
//             countEmpty += 1;
//         }
//
//         if (totalItems+countEmpty  >= 9) {
//             if (!items[9] || items[9].className !== 'empty') {
//                 const emptyElement = document.createElement('div');
//                 emptyElement.classList.add('charter__report-item', 'empty');
//                 container.insertBefore(emptyElement, items[9]);
//             }
//             countEmpty += 1;
//         }
//
//         if (totalItems+countEmpty  >= 10) {
//             if (!items[10] || items[10].className !== 'empty') {
//                 const emptyElement = document.createElement('div');
//                 emptyElement.classList.add('charter__report-item', 'empty');
//                 container.insertBefore(emptyElement, items[10]);
//             }
//             countEmpty += 1;
//         }
//
//         if (totalItems+countEmpty >= 17) {
//             if (!items[17] || items[17].className !== 'empty') {
//                 const emptyElement = document.createElement('div');
//                 emptyElement.classList.add('charter__report-item', 'empty');
//                 container.insertBefore(emptyElement, items[17]);
//             }
//             countEmpty += 1;
//         }
//
//         if (totalItems+countEmpty >= 20) {
//             if (!items[20] || items[20].className !== 'empty') {
//                 const emptyElement = document.createElement('div');
//                 emptyElement.classList.add('charter__report-item', 'empty');
//                 container.insertBefore(emptyElement, items[20]);
//             }
//             countEmpty += 1;
//         }
//
//         if (totalItems+countEmpty >= 21) {
//             if (!items[21] || items[21].className !== 'empty') {
//                 const emptyElement = document.createElement('div');
//                 emptyElement.classList.add('charter__report-item', 'empty');
//                 container.insertBefore(emptyElement, items[21]);
//             }
//             countEmpty += 1;
//         }
//
//         if (totalItems+countEmpty >= 27) {
//             if (!items[27] || items[27].className !== 'empty') {
//                 const emptyElement = document.createElement('div');
//                 emptyElement.classList.add('charter__report-item', 'empty');
//                 container.insertBefore(emptyElement, items[27]);
//             }
//             countEmpty += 1;
//         }
//     }
// }
//
// window.onload = addEmptySlots;
// window.onresize = addEmptySlots;
