document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const items = document.querySelectorAll('.gallery-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function setActiveItem(index) {
        items.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    function updateButtons() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === items.length - 1;
    }

    function updateGallery() {
        setActiveItem(currentIndex);
        setTimeout(() => {
            gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 0);
        updateButtons();
    }

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateGallery();
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateGallery();
        }
    });

    setActiveItem(currentIndex);
    updateButtons();
});
