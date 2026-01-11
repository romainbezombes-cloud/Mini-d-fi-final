
//lien entre html et js
const generateur = document.querySelector("#generateur");
let couleur = document.querySelector("#couleur");
const liste = document.querySelector("#liste");
const generer = document.querySelector("#generer");


const rouge = document.querySelector("rouge");
const vert = document.querySelector("vert");
const bleu = document.querySelector("bleu");


//actions déclenchées par le click du bouton "génerer une couleur aléatoire"
generateur.addEventListener("click", function(){

    //génère un code hexadécimal aléatoire (j'ai trouvé la partie Math random sur internet)
    couleur.textContent = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

    //changement de la couleur du texte en celle correspondant au code Hexa affiché
    //càd assigner le contenu du texte généré précedemment à la couleur de ce texte
    couleur.style.color = couleur.textContent

    //creation d'un item de liste
    let li = document.createElement("li")

    //ajout de l'item (la couleur générée) dans la liste 
    li.textContent = couleur.textContent
    liste.appendChild(li);
    //donne la couleur générée à l'item concerné (comme à la ligne 15)
    li.style.color = couleur.textContent
});

//actions déclenchées par le click du bouton "génerer"
generer.addEventListener("click", function(){
    //actions des champs couleurs
    if(rouge.value === "" ) {
        alert("test 2")
    }
});
