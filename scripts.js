document.addEventListener('DOMContentLoaded', function () {
    //Контекстное меню в FAQ 
    function setupFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
    
        faqItems.forEach(item => {
            const faqQuestion = item.querySelector('.faq-question');
            const faqToggle = item.querySelector('.faq-toggle');
    
            faqQuestion.addEventListener('click', function () {
                toggleFAQ(item);
            });
    
            faqToggle.addEventListener('click', function (event) {
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
                const maxHeight = faqAnswer.scrollHeight + 'px';
                const marginBot = window.innerWidth <= 767 ? '5rem' : '2rem';
                faqAnswer.style.maxHeight = maxHeight;
                faqQuestion.style.marginBottom = marginBot;
            } else {
                item.classList.remove('open');
                faqAnswer.style.maxHeight = 0;
                faqQuestion.style.marginBottom = 0;
            }
        }
    }
    setupFAQ();

    // Хранение данных в localStorage
    function Storage() {
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
    Storage();

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
