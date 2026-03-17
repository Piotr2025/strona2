// Wybieramy elementy z HTML
const progressBar = document.getElementById("myBar");
const navbar = document.getElementById("navbar");
const widthDisplay = document.getElementById("window-width");
const textBox = document.getElementById("text-box");

// 1. Generujemy dużo tekstu, żeby strona była długa (dla celów demo)
for(let i = 1; i <= 50; i++) {
    textBox.innerHTML += `<h3>Akapit nr ${i}</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>`;
}

// 2. Obsługa zdarzenia SCROLL
window.onscroll = function() {
    handleScroll();
};

function handleScroll() {
    // Obliczamy o ile pikseli użytkownik zjechał w dół
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    
    // Obliczamy całkowitą wysokość strony minus wysokość okna
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Obliczamy procent (Matematyka!)
    let scrolled = (winScroll / height) * 100;
    
    // Ustawiamy szerokość paska
    progressBar.style.width = scrolled + "%";

    // Zmniejszanie menu po 100px
    if (winScroll > 100) {
        navbar.classList.add("small-menu");
    } else {
        navbar.classList.remove("small-menu");
    }
}

// 3. Obsługa zdarzenia RESIZE
window.onresize = function() {
    // Wyświetlamy aktualną szerokość okna
    widthDisplay.innerText = window.innerWidth;
};

// Wywołujemy raz na starcie, żeby wpisać początkową szerokość
widthDisplay.innerText = window.innerWidth;
