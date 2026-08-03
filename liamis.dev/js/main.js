document.addEventListener('DOMContentLoaded', () => {
    const statusDropdown = document.querySelector('.status-dropdown');
    if (statusDropdown) {
        statusDropdown.addEventListener('click', () => {
            statusDropdown.classList.toggle('open');
        });
    }
});
