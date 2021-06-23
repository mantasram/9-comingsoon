const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const progress = document.querySelector('.progressBarIn');

        if (entry.isIntersecting) {
            progress.classList.add('progress-bar-ani');
            return;
        }
        progress.classList.remove('progress-bar-ani');
    });
});


observer.observe(document.querySelector('.left-column'));