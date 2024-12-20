// document.addEventListener("DOMContentLoaded", function() {
//     var links = document.querySelectorAll('a[href^="#"]');
//     Array.prototype.forEach.call(links, function(link) {
//         link.addEventListener("click", function(event) {
//             event.preventDefault();
//             var target = document.querySelector(link.getAttribute("href"));
//             target.scrollIntoView({
//                 behavior: "smooth"
//             });
//         });
//     });
// });

// JavaScript for toggling the mobile menu
document.querySelector('.hamburger').addEventListener('click', function () {
  document.querySelector('.nav-menu').classList.toggle('active');
});

// slider-container
const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateSlider() {
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? 3 : currentIndex - 1; // Adjust for number of images
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 3) ? 0 : currentIndex + 1; // Adjust for number of images
  updateSlider();
});
