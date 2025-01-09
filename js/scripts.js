function openModal() {
    document.getElementById('contactFormModal').classList.add('active');
    document.body.classList.add('modal-open');
}

function closeModal() {
    document.getElementById('contactFormModal').classList.remove('active');
    document.body.classList.remove('modal-open');
}