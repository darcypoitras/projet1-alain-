console.log("Bonjour guy roy");

const personne = require("./personne");

console.log("Salut mon cher " + personne.nom);

console.log("Tu as " + personne.age + " ans.");

console.log(`Tu as ${personne.age + 3} ans.`);



const Personne = require("./classePersonne");

const paul = new Personne("Paul Roy", 55);

paul.salutations();




const pauline = new Personne("Pauline Marois", 111);
pauline.salutations();