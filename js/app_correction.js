// Fonction récupérer sur MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// J'ai pris toutes les instructions pour la création d'un dé et je les ai mises dans une fonction
function createDice(boardId) {
  // Je créer ma div
  const diceElm = document.createElement("div");

  // Ajouter la class dice.
  // classList est un objet contenant des méthodes me permettant d'intéragir avec les class de mon élément HTML.
  diceElm.classList.add("dice");

  // On va rajouter notre élément dans la div ayant l'identifiant player
  // On récupère l'endroit où ajouter mon élément
  const playerElm = document.getElementById(boardId);
  // On ajouter dans mon élément récupérer le dé
  // appendChild === append
  playerElm.append(diceElm);

  // Je tire mon nombre aléatoire
  const diceNumber = getRandomNumber(1, 6);
  // On souhaite avoir la position de notre image entre 0 et -500px. 0 étant la face de dé 1 et -500 la face de dé 6
  const diceBackgroundPositionX = (diceNumber - 1) * 100 * -1;
  // Je modifie la propriété de mon élément dé
  diceElm.style.backgroundPositionX = `${diceBackgroundPositionX}px`;
}

function createPlayer() {
  const playerElm = document.createElement("div");
  // On doit ajouter une class et un id
  playerElm.classList.add("board");
  playerElm.id = "dealer";

  // Je l'ajoute dans mon DOM dans ma div avec l'id app
  const appElm = document.getElementById("app");
  appElm.append(playerElm);
}

createPlayer();

// On pose la question à l'utilisateur sur le nombre de dés que l'on transforme tout de suite en nombre
const nbOfDice = Number(prompt("Choisissez le nombre de dés"));

// Je lance autant de dés que l'utilisateur ma demandé
// une boucle for va
// 1 - initialisation ma variable
// 2 - vérifier la condition
//     - Si la condition est vrai on execute le code dans la boucle
//     - Sinon on passe a la suite
// 3 - on appel notre 3ème instruction qui est d'incrémenter notre variable => On repart à l'étape 2
for (let nbDice = 0; nbDice < nbOfDice; nbDice++) {
  // Lors de l'appel à notre fonction de création de dé, on passe en argument l'identifiant
  createDice("player");
  createDice("dealer");
}
