const images = document.querySelectorAll('.gallery__image');
let currentIndex = 0;
let overlay, overlayImage, overlayCaption;

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        showOverlay();
    });
});

function showOverlay() {
    overlay = document.createElement('div');
    overlay.classList.add('overlay');

    overlayImage = document.createElement('img');
    overlayImage.src = images[currentIndex].src;
    overlayImage.className = 'overlay__image';

    overlayCaption = document.createElement('div');
    overlayCaption.className = 'overlay__caption';
    overlayCaption.innerText = images[currentIndex].getAttribute('data-description');

    overlay.appendChild(overlayImage);
    overlay.appendChild(overlayCaption);


    const prevButton = document.createElement('div');
    prevButton.className = 'overlay__nav overlay__nav--prev';
    prevButton.innerText = '◀';
    prevButton.addEventListener('click', showPreviousImage);
    overlay.appendChild(prevButton);

    const nextButton = document.createElement('div');
    nextButton.className = 'overlay__nav overlay__nav--next';
    nextButton.innerText = '▶';
    nextButton.addEventListener('click', showNextImage);
    overlay.appendChild(nextButton);

    overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });

    document.body.appendChild(overlay);
}

function showPreviousImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateOverlayImage();
}

function showNextImage(event) {
    event.stopPropagation();
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateOverlayImage();
}

function updateOverlayImage() {
    overlayImage.src = images[currentIndex].src;
    overlayCaption.innerText = images[currentIndex].getAttribute('data-description');
}
