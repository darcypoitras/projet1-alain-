const path = require(`path`);
// console.log("Affichage de path.basename:", path.basemane(`c:\\users\\truc.html`));

console.log("Affichage de __filename: ", __filename);
console.log("Affichage de __dirname: ", __dirname);

console.log("Utilisation de path.basename:", path.basename(__filename));
console.log("Utilisation de path.basename sans le .js:", path.basename(__filename, `.js`));

console.log("Utilisation de path.extname:", path.extname(__filename));
console.log("Utilisation de path.extname:", path.extname(`c:\\users\\truc.html`));

console.log("Utilisation de path.dirname:", path.dirname(`c:\\users\\truc.html`));

console.log("Utilisation de path.parse:", path.parse(__filename));

console.log("Utilisation de path.parse().ext ", path.parse(__filename).ext);


//                   le dossier dans le quel on se trouve + 
console.log("Construction d'un path: ", path.join(__dirname, `data`, `alain.json`));