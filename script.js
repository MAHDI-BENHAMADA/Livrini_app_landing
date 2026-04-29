// Translation Data
const translations = {
    ar: {
        nav_download: "تحميل APK",
        hero_title: 'تتبع وتأكيد <span class="highlight">طلبات COD</span> في ثوانٍ.',
        hero_desc: "أسرع طريقة لإدارة أعمال الدفع عند الاستلام في الجزائر. قم بمزامنة ملفات Google Sheets مباشرة وابدأ في تأكيد الطلبات اليوم.",
        hero_cta: "تحميل APK",
        hero_setup: "الإعداد في دقيقتين",
        step1_title: "تحميل APK",
        step1_desc: "احصل على أحدث إصدار تجريبي مباشرة على هاتفك.",
        step2_title: "ربط الجداول",
        step2_desc: "قم بتوصيل جداول بيانات Google الحالية بنقرة واحدة.",
        step3_title: "ابدأ التأكيد",
        step3_desc: "إدارة الموظفين والطلبات الخاصة بك على الفور.",
        features_title: "بنيت للسرعة",
        features_desc: "كل ما تحتاجه لإدارة مخزونك وتدفق التسليم.",
        feat1_title: "مزامنة الجداول",
        feat1_desc: "اربط جداول بيانات Google الخاصة بك على الفور. قم بعرض وتعديل وتحديث الحالات مباشرة من التطبيق.",
        feat2_title: "بدون إعدادات معقدة",
        feat2_desc: "توقف عن إضاعة الوقت في الإعداد. ما عليك سوى تسجيل الدخول وربط ورقتك والبدء في تأكيد الطلبات.",
        feat3_title: "تأكيد سريع",
        feat3_desc: "متصل مدمج وقوالب حالة مخصصة للسوق الجزائري. حافظ على معدل تأكيد مرتفع.",
        sneak_title: "نظرة سريعة بالداخل",
        sneak_desc: "أدوات قوية مصممة للتاجر الجزائري الحديث.",
        row1_title: "تسجيل دخول آمن وبسيط",
        row1_desc: "الوصول إلى لوحة القيادة الخاصة بك بشكل آمن. سواء كنت المالك أو عضواً في الفريق، قم بتسجيل الدخول عبر Google أو استخدم رمز دعوة مخصص.",
        row1_li1: "التحكم في الوصول حسب الأدوار",
        row1_li2: "مزامنة فورية لمساحة العمل",
        row2_title: "إدارة الموظفين بسهولة",
        row2_desc: "قم بدعوة المؤكدين ووكلاء التوصيل بنقرة واحدة. إدارة الأدوار، وإلغاء الوصول، وتتبع الأداء من مركز واحد.",
        row2_li1: "إنشاء رموز دعوة آمنة",
        row2_li2: "مراقبة الموظفين النشطين",
        proof_1: "500+ تاجر",
        proof_2: "مزامنة آمنة",
        proof_3: "محسن للجزائر",
        cta_title: "هل أنت جاهز للنمو؟",
        cta_desc: "انضم إلى مستقبل إدارة COD في الجزائر. قم بتحميل النسخة التجريبية الآن.",
        cta_btn: "تحميل APK (Beta)",
        cta_sub: "مجاني للمستخدمين الأوائل • v1.0.0",
        footer_copy: "&copy; 2026 COD Master DZ. جميع الحقوق محفوظة."
    },
    en: {
        nav_download: "Download APK",
        hero_title: 'Track & Confirm <span class="highlight">COD Orders</span> in Seconds.',
        hero_desc: "The fastest way to manage your Algerian COD business. Directly sync your Google Sheets and start confirming orders today.",
        hero_cta: "Download APK",
        hero_setup: "Setup in 2 minutes",
        step1_title: "Download APK",
        step1_desc: "Get the latest beta version directly to your phone.",
        step2_title: "Link Sheets",
        step2_desc: "Connect your existing Google Sheets in one click.",
        step3_title: "Start Confirming",
        step3_desc: "Manage your staff and orders instantly.",
        features_title: "Built for Speed",
        features_desc: "Everything you need to manage your inventory and delivery flow.",
        feat1_title: "Sheets Sync",
        feat1_desc: "Connect your Google Sheets instantly. View, edit, and update statuses directly from the app.",
        feat2_title: "Zero Configuration",
        feat2_desc: "Stop wasting time on setup. Just log in, link your sheet, and start confirming orders.",
        feat3_title: "Quick Confirmation",
        feat3_desc: "Built-in dialer and status templates tailored for the Algerian market.",
        sneak_title: "A Sneak Peek Inside",
        sneak_desc: "Powerful tools designed for the modern Algerian merchant.",
        row1_title: "Secure & Simple Login",
        row1_desc: "Access your dashboard securely. Whether you are the owner or a team member, login via Google or use a custom invite code.",
        row1_li1: "Role-based access control",
        row1_li2: "Instant workspace sync",
        row2_title: "Effortless Staff Management",
        row2_desc: "Invite your confirmers and delivery agents with a single click. Manage roles and track performance.",
        row2_li1: "Generate secure invite codes",
        row2_li2: "Monitor active personnel",
        proof_1: "500+ Merchants",
        proof_2: "Secure Sync",
        proof_3: "Algeria Optimized",
        cta_title: "Ready to Scale?",
        cta_desc: "Join the future of COD management in Algeria. Download the beta now.",
        cta_btn: "Download APK (Beta)",
        cta_sub: "Free for early adopters • v1.0.0",
        footer_copy: "&copy; 2026 COD Master DZ. All rights reserved."
    }
};

let currentLang = localStorage.getItem('lang') || 'ar';

function updateContent() {
    const langData = translations[currentLang];
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (langData[key]) {
            el.innerHTML = langData[key];
        }
    });
    
    // Update body attributes
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.body.lang = currentLang;
    
    // Update button text
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.innerText = currentLang === 'ar' ? 'EN' : 'العربية';
    }
    
    // Save preference
    localStorage.setItem('lang', currentLang);
}

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    updateContent();
}

// Scroll Reveal Implementation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    updateContent(); // Initialize language

    // Select all elements with the reveal class
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add subtle parallax to hero image
    window.addEventListener('scroll', () => {
        const heroImg = document.querySelector('.hero-image');
        if (heroImg) {
            const scroll = window.pageYOffset;
            heroImg.style.transform = `translateY(${scroll * 0.05}px)`;
        }
    });
});
