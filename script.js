
//lien entre html et js
const generateur = document.querySelector("#generateur");
let couleur = document.querySelector("#couleur");
const liste = document.querySelector("#liste");
const generer = document.querySelector("#generer");

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
    //pour récuperer les valeurs des champs
    let rouge = document.querySelector("#rouge").value;
    let vert = document.querySelector("#vert").value;
    let bleu = document.querySelector("#bleu").value;

    //les convertir en nombre 
    rouge = Number(rouge);
    vert = Number(vert);
    bleu = Number(bleu);

    //actions des champs couleurs
    if(rouge >= 0 && rouge <= 255) {
        if(vert >= 0 && vert <= 255) {
            if(bleu >= 0 && bleu <= 255) {
                couleur.textContent = '#' + rouge.toString(16).padStart(2, '0') + vert.toString(16).padStart(2, '0') + bleu.toString(16).padStart(2, '0');  

                //même procédé qu'au début
                couleur.style.color = couleur.textContent
                let li = document.createElement("li")
                li.textContent = couleur.textContent
                liste.appendChild(li);
                li.style.color = couleur.textContent
            }
        }
    }
    else{
        alert("Veuillez rentrer des valeurs adéquates pour générer la couleur (comprises entre 0 et 256)")
    }
});
