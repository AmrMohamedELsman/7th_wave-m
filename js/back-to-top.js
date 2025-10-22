// إعداد زر العودة إلى الأعلى
function setupBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    // إظهار الزر عند التمرير لأسفل
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    // الانتقال إلى الأعلى عند النقر على الزر
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// تنفيذ الدالة عند اكتمال تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    setupBackToTop();
});