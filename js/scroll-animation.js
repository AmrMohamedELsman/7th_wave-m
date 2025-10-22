// تأثيرات حركية احترافية للأصناف عند التمرير
document.addEventListener('DOMContentLoaded', () => {
    // إنشاء مراقب للتمرير بخصائص محسنة
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // إذا كان العنصر ظاهراً في الشاشة
            if (entry.isIntersecting) {
                // إضافة صنف التحريك مع تأخير بسيط لتحسين الأداء
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                    
                    // إضافة تأثير نبض للعناصر المهمة
                    if (entry.target.classList.contains('menu-category')) {
                        entry.target.classList.add('pulse-effect');
                    }
                }, 50);
            } else {
                // إعادة تفعيل التأثير عند الخروج من الشاشة (للتمرير المتكرر)
                if (entry.target.classList.contains('animate-in')) {
                    entry.target.classList.remove('animate-in');
                    entry.target.classList.remove('pulse-effect');
                }
            }
        });
    }, {
        threshold: 0.1, // يبدأ التأثير عندما يظهر 10% من العنصر
        rootMargin: '0px 0px -10% 0px' // يبدأ التأثير قبل ظهور العنصر بنسبة 10%
    });

    // تطبيق تأثيرات متقدمة على فئات القائمة
    function setupAnimations() {
        // تطبيق تأثيرات متدرجة على فئات القائمة
        const categories = document.querySelectorAll('.menu-category');
        categories.forEach((category, index) => {
            // تأخير متدرج بين الفئات للحصول على تأثير تتابعي أكثر سلاسة
            category.style.transitionDelay = `${index * 0.08}s`;
            
            // إضافة تأثير دخول مخصص حسب موقع الفئة
            if (index % 2 === 0) {
                category.classList.add('slide-from-right');
            } else {
                category.classList.add('slide-from-left');
            }
            
            observer.observe(category);
        });

        // تطبيق تأثيرات متنوعة على عناصر القائمة
        const items = document.querySelectorAll('.menu-item');
        items.forEach((item, index) => {
            // تأخير متدرج مع تنويع أكبر للتأثيرات
            const delay = (index % 4) * 0.06;
            item.style.transitionDelay = `${delay}s`;
            
            // إضافة تأثيرات متنوعة حسب موقع العنصر
            const effectClass = index % 3 === 0 ? 'zoom-effect' : 
                              index % 3 === 1 ? 'fade-up-effect' : 'slide-effect';
            item.classList.add(effectClass);
            
            observer.observe(item);
        });
    }

    // تحسين تجربة التنقل بين التبويبات
    const categoryTabs = document.getElementById('category-tabs');
    if (categoryTabs) {
        // استخدام مستمع أحداث أكثر دقة
        categoryTabs.addEventListener('click', (event) => {
            if (event.target.classList.contains('category-tab')) {
                // إعادة تعيين التأثيرات بشكل أكثر سلاسة
                document.querySelectorAll('.animate-in').forEach(el => {
                    el.classList.remove('animate-in');
                });
                
                // تطبيق التأثيرات الجديدة بعد انتهاء التمرير
                setTimeout(setupAnimations, 100);
            }
        });
    }

    // تحسين تجربة التمرير
    window.addEventListener('scroll', () => {
        // تحديث التأثيرات أثناء التمرير بشكل أكثر كفاءة
        if (!window.isScrolling) {
            window.isScrolling = true;
            setTimeout(() => {
                setupAnimations();
                window.isScrolling = false;
            }, 100);
        }
    }, { passive: true });

    // تنفيذ الدالة عند تحميل الصفحة مع تأثير دخول متدرج
    setTimeout(setupAnimations, 200);
});