const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === "#") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // закрыть мобильное меню, если открыто
            if (navLinks.classList.contains('show')) navLinks.classList.remove('show');
        }
    });
});

const form = document.getElementById('trialForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const direction = document.getElementById('directionSelect').value;
        if (!name || !phone || !direction) {
            showToastMessage("⚠️ Пожалуйста, заполните имя, телефон и выберите направление!");
            return;
        }
        showToastMessage(`🎉 Спасибо, ${name}! Заявка на пробный урок (${direction}) принята. Администратор свяжется с вами в ближайшее время.`, 4000);
        form.reset();
    });
}

function showToastMessage(message, duration = 3000) {
    let existingToast = document.querySelector('.toast-msg');
    if (existingToast) existingToast.remove();
    let toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, duration);
}

const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
});