const mettreAJourCivilite = (element) => {
    console.log(element.value);
    const libelle = `Bonjour <span class='text-info'>${element.value}</span>`;
    document.getElementById('libelle').innerHTML = libelle;

    // Jouer un son
    const audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
    audio.play();

    // Changer la couleur de fond de la page
    document.body.style.backgroundColor = element.value === "MONSIEUR" ? "#4caf50" : "#007bff";

    // Ajouter une animation
    const libelleDiv = document.getElementById('libelle');
    libelleDiv.classList.add('animate__animated', 'animate__hinge');
    setTimeout(() => {
        libelleDiv.classList.remove('animate__animated', 'animate__hinge');
    }, 2000);

    // Feux d'artifice
    fireworkEffect();

    // Notifications toast
    showToast(`Vous avez sélectionné: ${element.value}`);

    // Vibration du dispositif (si supporté)
    if (navigator.vibrate) {
        navigator.vibrate(200);
    }
}

// Feux d'artifice
const fireworkEffect = () => {
    const firework = document.createElement('div');
    firework.className = 'firework';
    document.body.appendChild(firework);
    setTimeout(() => {
        firework.remove();
    }, 1500);
}

// Afficher une notification toast
const showToast = (message) => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}
