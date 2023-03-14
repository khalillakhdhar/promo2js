// Création du tableau de fruits en Javascript
var fruits = [
    { nom: "Pomme", couleur: "Rouge" },
    { nom: "Banane", couleur: "Jaune" },
    { nom: "Orange", couleur: "Orange" }
    ];
    // Récupération de la table
    var table = document.getElementById("fruitsTable");
    // Parcours du tableau de fruits
    for (var i = 0; i < fruits.length; i++) {
    // Création d'une nouvelle ligne dans la table
    var row = table.insertRow();
    // Création de deux nouvelles cellules dans la ligne
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    
    cell1.innerHTML = fruits[i].nom;
    cell2.innerHTML = fruits[i].couleur;
    }