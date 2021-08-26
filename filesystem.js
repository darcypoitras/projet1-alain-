const fs = require(`fs`);

const path = require(`path`);

console.log("Création du dossier guyguy");

fs.mkdirSync(path.join(__dirname, `guyguy`), {});

console.log("Le dossier guyguy a été créé.");

//node filesystem


fs.mkdir(path.join(__dirname, `guyguy_asynchrone`), {}, function(err) {
    if (err) throw err;
    // Rendu ici il n'y a pas d'erreur.
    console.log("Le dossier guyguy_asynchrone vient d'être créé.")
});

console.log("Fin du programme.");

//node filesystem
