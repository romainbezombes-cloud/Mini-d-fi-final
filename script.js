
//lien entre html et js
const generateur = document.querySelector("#generateur");
let titre = document.querySelector("h1");

//actions déclenchées par le click du bouton
generateur.addEventListener("click", function(){

    //génère un code hexadécimal aléatoire (j'ai trouvé la partie Math random sur internet)
    titre.textContent = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

    //changement de la couleur du texte en celle correspondant au code Hexa affiché
    //càd assigner le contenu du texte généré précedemment à la couleur de ce texte
    titre.style.color = titre.textContent
});
