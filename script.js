const sections = document.querySelectorAll('.section');
let currentIndex = 0;

function updateSections() {
    sections.forEach((section, index) => {
        section.textContent = `Sílaba ${currentIndex + index + 1}`;
    });
}

function changeSection(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = sections.length - 1;
    } else if (currentIndex >= sections.length) {
        currentIndex = 0;
    }
    updateSections();
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        changeSection(-1);
    } else if (event.key === 'ArrowRight') {
        changeSection(1);
    }
});

updateSections();
