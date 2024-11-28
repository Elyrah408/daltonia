/*
 *             ░       ░                             ░    ░   
 *    .*✶░█▀▄ █ █▀▄▀█ █ ▀█▀ █▀█ █ █░█ █▀ █▀▀ █░█ █▀█ █▀█ █░✶*..
 *     ..*█▄▀ █ █░▀░█ █ ░█░ █▀▄ █ ▀▀█ ▄█ █▄▄ █▀█ █▄█ █▄█ █▄▄*✶.
 *                                 github:DimitriFromSchool::.
 *  ────────────────────────────────────────────────────────────
 *           Project: Daltonia
 *                      Created: 2024-10-30, 18:28:41 |
 *                      Updated: 2024-11-03, 18:29:36 | 
 *  ────────────────────────────────────────────────────────────
 */


const eye = document.querySelector(".eye");
const iris = document.querySelector(".iris");
const pupil = document.querySelector(".pupil");

// Limites de déplacement maximales pour l'iris
const maxDistanceX = 50;
const maxDistanceY = 35; 

// Limites de déplacement pour la pupille par rapport à l'iris
const pupilMaxDistanceX = 20;
const pupilMaxDistanceY = 8;


let myinfo = document.getElementById("infos");
myinfo.addEventListener("click",()=>{
    window. location. href ="about.html";

});


function resetPosition() {
    iris.style.transform = "translate(0, 0)";
    pupil.style.transform = "translate(0, 0)";
    console.log("Iris et pupille recentrés");
}

// Écouter les mouvements de la souris sur le document entier
document.addEventListener("mousemove", (event) => {
    // Vérifier si le curseur est dans l'élément ".eye"
    const eyeRect = eye.getBoundingClientRect();
    const isCursorInsideEye =
        event.clientX >= eyeRect.left &&
        event.clientX <= eyeRect.right &&
        event.clientY >= eyeRect.top &&
        event.clientY <= eyeRect.bottom;

    if (isCursorInsideEye) {
        // Recentrer si le curseur est dans l'œil
        resetPosition();
    } else {
        // Calculer la position centrale de l'œil
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        // Position du curseur
        const x = event.clientX;
        const y = event.clientY;

        // Calculer la direction du mouvement
        const deltaX = x - eyeCenterX;
        const deltaY = y - eyeCenterY;

        // Calculer les déplacements normalisés pour l'iris
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const irisX = (deltaX / distance) * maxDistanceX;
        const irisY = (deltaY / distance) * maxDistanceY;

        iris.style.transform = `translate(${irisX}px, ${irisY}px)`;

        // Calculer les déplacements normalisés pour la pupille dans les limites de l'iris
        const pupilX = (deltaX / distance) * pupilMaxDistanceX * 2;
        const pupilY = (deltaY / distance) * pupilMaxDistanceY * 1.4;

        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    }
        
});


let colorChoice = []; // Tableau pour récupérer les couleurs choisies
let index = 0; // Index qui servira pour les ID
let selectedColorsContainer = document.querySelector(".selected-colors"); 
let colorCounterDisplay = document.getElementById("colorscounter");
let colorDefault = "#f6f5f4"; //couleur par défaut


let addColorBtn = document.querySelector("#homebtn-add");
let removeColorBtn = document.querySelector("#homebtn-delete");
let convertColorBtn = document.querySelector(".homebtn-convert"); 


function updateColorCount() {
    colorCounterDisplay.textContent = colorChoice.length;
};
// Ajout et Supp. Couleurs
addColorBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    if (index < 20) {
        let newColorDiv = document.createElement("input");
        newColorDiv.classList.add("choosencolor");
        newColorDiv.type = "color";
        newColorDiv.value = colorDefault; 
        newColorDiv.id = `color-${index}`;
        index++;

        selectedColorsContainer.appendChild(newColorDiv);
        colorChoice.push(newColorDiv.value);
        updateColorCount();
    }
});

removeColorBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    if (index > 0) { 
        index--;
        let lastColorDiv = document.getElementById(`color-${index}`);
        if (lastColorDiv) {
            selectedColorsContainer.removeChild(lastColorDiv);
            colorChoice.pop();
            updateColorCount();
        }
    }
});

// Gestion de l'événement pour mettre à jour le tableau de couleurs
selectedColorsContainer.addEventListener('input', (event) => {
    if (event.target.classList.contains("choosencolor")) {
        const index = parseInt(event.target.id.split('-')[1]);
        colorChoice[index] = event.target.value; // Met à jour la couleur dans le tableau
    }
});

convertColorBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("bouton clické:");
    if (index > 0) {
    console.log("Couleurs stockées:", colorChoice);
    localStorage.setItem("homeColorSelection", JSON.stringify(colorChoice));
    window.location.href = "result.html";
    }
});


function setLanguage(language) {
     
    localStorage.setItem("language", language);
    document.getElementById("selectlbl").textContent = transalation[language].select;
    document.getElementById("hometext1").textContent = transalation[language].hometext1;
    document.getElementById("btnConvert").textContent=transalation[language].submit
  
   
  }
 

//   window.onload = () => {

//     let savedLanguage = localStorage.getItem("language");

     
//     setLanguage(savedLanguage);
 
 
 
//   };
 
 
 
JSON.parse(localStorage.getItem("transalation"));


// ---info----button


  
