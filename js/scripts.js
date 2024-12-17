window.addEventListener("DOMContentLoaded", (event) => {
    const body = document.body;
    const contactDialog = document.querySelector('#modal-1');
    const btnOpenContactDialog = document.getElementById('modal-contact');
    const btnCloseContactDialog = document.getElementById('modal-1-close');
    
    const handleModalSwitch = () => {
        contactDialog.classList.toggle("modal--closed");
        body.classList.toggle("page--scroll-locked");
    }
    
    if (btnCloseContactDialog) {
        btnOpenContactDialog.addEventListener('click', handleModalSwitch);
    }
    if (btnCloseContactDialog) {
        btnCloseContactDialog.addEventListener('click', handleModalSwitch);
    }
});
