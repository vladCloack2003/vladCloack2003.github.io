document.addEventListener('DOMContentLoaded', function () {
    //Контекстное меню
    function setupFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
    
        faqItems.forEach(item => {
            const faqAnswer = item.querySelector('.faq-answer');
            const faqQuestion = item.querySelector('.faq-question');
            const faqToggle = item.querySelector('.faq-toggle');
    
            faqAnswer.style.maxHeight = '0';
            faqAnswer.style.overflow = 'hidden';
            faqQuestion.style.marginBottom = '0';
            faqAnswer.style.transition = 'max-height 0.5s ease';
            faqQuestion.style.transition = 'margin-bottom 0.5s ease';
    
            faqQuestion.addEventListener('click', function() {
                toggleFAQ(item);
            });
    
            faqToggle.addEventListener('click', function(event) {
                event.stopPropagation();
                toggleFAQ(item);
            });
        });
    
        function toggleFAQ(item) {
            const faqAnswer = item.querySelector('.faq-answer');
            const faqQuestion = item.querySelector('.faq-question');
            const isOpen = item.classList.contains('open');
    
            if (!isOpen) {
                item.classList.add('open');
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
                faqQuestion.style.marginBottom = window.innerWidth <= 768 ? '5rem' : '2rem';
            } else {
                item.classList.remove('open');
                faqAnswer.style.maxHeight = '0';
                faqQuestion.style.marginBottom = '0';
            }
        }
    }
    setupFAQ();

    // Хранение данных в localStorage
    function StorageData() {
        const faqItems = document.querySelectorAll('.faq-item');
        const faqData = [];
    
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question').textContent.trim();
            const answer = item.querySelector('.faq-answer').textContent.trim();
            faqData.push({ question, answer });
        });
    
        const faqDataJSON = JSON.stringify(faqData);
        localStorage.setItem('faqData', faqDataJSON);
    
        const storedDataJSON = localStorage.getItem('faqData');
        if (!storedDataJSON) {
            console.log('Данные в localStorage отсутствуют');
        } else {
            const storedData = JSON.parse(storedDataJSON);
            console.log("Данные, которые хранятся в localStorage", storedData);
        }
    }
    StorageData();

    //Слайдер для изображений
    function setupCarousel() {
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');
        const serviceCards = document.querySelector('.service-cards');
    
        prevButton.addEventListener('click', function () {
            serviceCards.scrollBy({
                left: -serviceCards.clientWidth / 3,
                behavior: 'smooth'
            });
        });
    
        nextButton.addEventListener('click', function () {
            serviceCards.scrollBy({
                left: serviceCards.clientWidth / 3,
                behavior: 'smooth'
            });
        });
    }
    
    setupCarousel();
});
