const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.5
});

const elements = document.querySelectorAll('.hidden');
elements.forEach((element) => myObserver.observe(element));

function updateCounter() {
    const startDate = new Date('0033-04-03T00:00:00Z');
    const now = new Date();
    const timeElapsed = now - startDate;

    const years = Math.floor(timeElapsed / (1000 * 60 * 60 * 24 * 365.25));
    const days = Math.floor((timeElapsed % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeElapsed / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeElapsed / (1000 * 60)) % 60);
    const seconds = Math.floor((timeElapsed / 1000) % 60);

    document.getElementById('counter').innerText = 
        `${years} anos, ${days} dias, ${hours}h ${minutes}m ${seconds}s`;

    setTimeout(updateCounter, 1000);
}

updateCounter();
