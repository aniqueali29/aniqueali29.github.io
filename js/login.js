document.addEventListener('DOMContentLoaded', function () {
    const authLinks = document.querySelectorAll('#auth-link'); // Select all elements with the ID 'auth-link'
    const logoutLinks = document.querySelectorAll('#logout-link'); // Select all elements with the ID 'logout-link'

    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const user = JSON.parse(localStorage.getItem('user'));

    if (isLoggedIn) {
        authLinks.forEach(link => link.classList.add('d-none'));  // Hide all Register/SignIn links
        logoutLinks.forEach(link => link.classList.remove('d-none'));  // Show all Logout links

        if (user) {
            const nameInput = document.getElementById('name');
            if (nameInput) nameInput.value = user.name;

            const emailInput = document.getElementById('email');
            if (emailInput) emailInput.value = user.email;
        }
    } else {
        authLinks.forEach(link => link.classList.remove('d-none'));  // Show all Register/SignIn links
        logoutLinks.forEach(link => link.classList.add('d-none'));  // Hide all Logout links
    }

    // Logout functionality
    logoutLinks.forEach(logoutLink => {
        logoutLink.addEventListener('click', function () {
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('user');
            // Redirect to login page or home page after logout
            window.location.href = './login.html';
        });
    });
});
