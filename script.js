
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    // Modal container
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalImage = document.createElement('img');
    modalImage.src = image.src;
    modal.appendChild(modalImage);

    //  Button
    const closeButton = document.createElement('span');
    closeButton.innerText = '×';
    closeButton.classList.add('close-button');
    modal.appendChild(closeButton);
    document.body.appendChild(modal);

    closeButton.addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  });
});