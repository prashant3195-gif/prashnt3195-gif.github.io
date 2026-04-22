
// Home slider
const slides = document.querySelectorAll('.slide');
let s = 0;

function runSlider() {
    slides.forEach(i => i.classList.remove('active'));
    slides[s].classList.add('active');
    s = (s + 1) % slides.length;
}

if(slides.length > 0) {
    setInterval(runSlider, 3000);
}

// Portfolio auto scroll
const track = document.querySelector('.portfolio-track');
let x = 0;

if(track) {
    setInterval(() => {
        // Recalculate max scroll inside the interval to account for window resizing
        const maxScroll = track.scrollWidth - track.parentElement.offsetWidth;
        x += 250; 
        if (x > maxScroll) x = 0;
        track.style.transform = `translateX(-${x}px)`;
    }, 2500);
}

// Scroll Restoration
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.onload = function () {
    window.scrollTo(0, 0);
};




