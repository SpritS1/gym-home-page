export const imageModal = () => {
    const photos = document.querySelectorAll('.gallery__photo')
    const modal = document.querySelector('#modal');
    const modalImage = document.querySelector('.modal__image');

    photos.forEach((photo) => {
        photo.addEventListener('click', (e) => {
            e.preventDefault();

            modalImage.addEventListener('click', (e) => e.cancelBubble = true);

            modal.addEventListener('click', (e) => {
                e.preventDefault();
                modal.style.display = 'none';
            });

            modalImage.src = photo.src;
            modal.style.display = 'flex';
        })
    })
}