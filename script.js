// Add fade-in effect when sections enter viewport
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
// Fade-in animation (already hona chahiye tumhare script.js me)

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // form submit hone se page reload na ho
  document.getElementById('formStatus').textContent = "Thanks! Your message has been sent.";
  this.reset(); // form fields clear kar do
});
