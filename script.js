// Abrir modales
document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.dataset.modal;
        document.getElementById(id).style.display = "flex";
    });
});

// Cerrar modal al hacer clic afuera
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = "none";
    });
});

// ScrollReveal
ScrollReveal().reveal('.reveal', { 
    distance: '50px',
    duration: 1000,
    easing: 'ease-out',
    reset: false
});
