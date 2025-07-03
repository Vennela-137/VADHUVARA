document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const ans = btn.nextElementSibling;
    ans.style.display = (ans.style.display === 'block') ? 'none' : 'block';
  });
});
const track = document.querySelector('.video-carousel-track');
const slides = document.querySelectorAll('.video-slide');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');

let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});

// Optional autoplay (change every 7 seconds)
setInterval(() => {
  index = (index + 1) % slides.length;
  updateCarousel();
}, 7000);
