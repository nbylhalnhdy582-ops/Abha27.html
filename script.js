document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");

    // فتح وغلق القائمة
    menuToggle.addEventListener("click", function() {
        navList.classList.toggle("active");
    });

    // إغلاق القائمة بعد الضغط على أي رابط في الجوال
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });
});
