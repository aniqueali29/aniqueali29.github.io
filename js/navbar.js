// Toggle Sidebar
const sidebarToggler = document.querySelector('.sidebar-toggler');
const sidebar = document.getElementById('sidebar');

sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Close sidebar when clicking outside
document.addEventListener('click', function (event) {
    if (!sidebar.contains(event.target) && !sidebarToggler.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});

// Toggle Submenu in Sidebar
const dropdownToggles = document.querySelectorAll('#sidebar .dropdown-toggle');
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
        this.parentElement.classList.toggle('active');
    });
});
