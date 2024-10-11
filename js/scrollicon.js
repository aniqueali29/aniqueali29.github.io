document.addEventListener('DOMContentLoaded', function () {
    const scrollUp = document.getElementById('scrollUp');

    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollUp.style.display = "block";
        } else {
            scrollUp.style.display = "none";
        }
    };

    scrollUp.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

