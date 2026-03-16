const navbar = document.getElementById('navbar');
const progressBar = document.getElementById('progress-bar');
const filler = document.getElementById('filler-text');

// Generujemy tekst, żeby było co przewijać
for(let i=0; i<30; i++) {
    filler.innerHTML += `<p>To jest przykładowy akapit numer ${i+1}. OSPF to protokół routingu typu link-state...</p>`;
}

// Główna funkcja obsługująca scroll
window.addEventListener('scroll', () => {
    // 1. Logika paska postępu
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    progressBar.style.width = scrolled + "%";

    // 2. Logika zmniejszania menu (powyżej 100px)
    if (winScroll > 100) {
        navbar.classList.add('small-menu');
    } else {
        navbar.classList.remove('small-menu');
    }
});

// Obsługa zdarzenia resize (pokazanie szerokości okna)
window.addEventListener('resize', () => {
    console.log("Szerokość okna: " + window.innerWidth);
    // Tutaj można dodać np. zmianę koloru tła przy zmianie rozmiaru
});
