// === CONTROL DE MÚSICA ===
const playBtn = document.getElementById('play-btn');
const audio = document.getElementById('bg-music');

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸️ Pausar música";
  } else {
    audio.pause();
    playBtn.textContent = "▶️ Reproducir música";
  }
});

// === CONTADOR REGRESIVO ===
const countdown = document.getElementById('countdown');

// Fecha del evento (26 de octubre 2025, 9:00 AM)
const eventDate = new Date('October 26, 2025 09:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance <= 0) {
    countdown.innerHTML = "🎉 ¡El evento ha comenzado! 🎉";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `
    <div><span>${days}</span>d</div>
    <div><span>${hours}</span>h</div>
    <div><span>${minutes}</span>m</div>
    <div><span>${seconds}</span>s</div>
  `;
}

setInterval(updateCountdown, 1000);

// === SCROLL SUAVE ENTRE SECCIONES ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// === ANIMACIONES AL HACER SCROLL ===
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach(sec => {
    const secTop = sec.getBoundingClientRect().top;
    if (secTop < triggerBottom) {
      sec.classList.add('show');
    }
  });
});

// === FORMULARIO DE CONFIRMACIÓN ===
const confirmForm = document.getElementById('confirm-form');
confirmForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const attending = document.getElementById('attending').value;

  if (name === "") {
    alert("Por favor ingresa tu nombre 😊");
    return;
  }

  confirmForm.reset();
  alert(`Gracias, ${name}. Tu confirmación (${attending}) ha sido registrada 🎉`);
});
