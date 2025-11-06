console.log("Laboratoire prêt !")

const nom = "Jassem"
let age = 16


console.log(age)


const motDePasseAttendu = "secret32"
let motDePasseUtilisateur = "87654321"

if ( motDePasseAttendu === motDePasseUtilisateur ) {
     console.log("Accès autorisé. Bienvenue !");
   } else if ( motDePasseUtilisateur < 8 ) {  
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
} else {
       console.log("Accès refusé. Mot de passe incorrect.");
}

const moi = {
    prenom: "Jassem",
    nom: "Hadji",
    age: 16,
    competences: ["HTML", "CSS"]
};

console.log(moi.Jassem); // Affiche "VotrePrénom"