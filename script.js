const typingElement = document.getElementById('typing');

window.addEventListener('load', () => {
  setTimeout(() => {
    typingElement.textContent = "Marriane C. Roque";
    typingElement.classList.add('show'); 
  }, 500);
});

const progressSpans = document.querySelectorAll('.progress span');

function animateSkills() {
  progressSpans.forEach((span, i) => {
    const width = span.getAttribute('data-width');
    setTimeout(() => {
      span.style.width = width;
    }, i * 200); 
  });
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function checkSkillsAnimation() {
  const skillsSection = document.getElementById('skills-qual');
  if (isElementInViewport(skillsSection)) {
    animateSkills();
    window.removeEventListener('scroll', checkSkillsAnimation);
  }
}

window.addEventListener('scroll', checkSkillsAnimation);
window.addEventListener('load', checkSkillsAnimation);

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
