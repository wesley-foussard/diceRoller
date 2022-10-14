//générateur de nombre aléatoire
function getRandomNumber(min = 1, max = 100) {
  const randomNumber = Math.round(Math.random() * (max - min) + min);

  return randomNumber;
}
/*--------DEALER------------*/
// je crée une div pour le plateau
const plateauDealerDiv = document.createElement("div");
plateauDealerDiv.setAttribute("id", "dealer");
plateauDealerDiv.className = "board";
app.appendChild(plateauDealerDiv);

function dice() {
  /*------------PLAYER-----------*/
  // je crée une div pour le dé
  const diceDiv = document.createElement("div");
  // je lui donne la classe dice
  diceDiv.className =
    "dice"; /* className écrase toutes les autres classes, préférer classList.add
  // j'isole la div player (pas nécéssaire vraisemblablement)
  //   const player = document.getElementById("player");
  // je lui ajoute la div `dice`
  player.appendChild(diceDiv);

  /*------------DEALER-----------*/
  //   // je crée une div pour le dé
  //   const dealerDiv = document.createElement("div");
  //   // je lui donne la classe dice
  //   dealerDiv.className = "dice";
  //   // j'isole la div player
  //   const dealer = document.getElementById("dealer");
  //   // je lui ajoute la div `dice`
  //   plateauDealerDiv.appendChild(dealer);

  /*---------DICE--------------- */
  //on génère le tirage du dé
  let diceValue = getRandomNumber(1, 6); //ici /!\
  // console.log(diceValue); /* on peut jouer avec debugger au lieu de console.log, plus souple pour manipuler le code
  //on change la position du sprite en fonction du tirage du dé
  let dicePosX = -(diceValue * 100 - 100);
  // console.log(dicePosX);
  diceDiv.style.backgroundPositionX = `${dicePosX}px`; //-(${diceValue} * 100 - 100)`
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
/* Main*/

let diceThrows = parseInt(prompt("Combien de dés voulez-vous lancer"));

for (i = 0; i < diceThrows; i++) {
  dice(player);
}
