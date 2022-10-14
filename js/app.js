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
  diceDiv.className = "dice";
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
  // console.log(diceValue);
  //on change la position du sprite en fonction du tirage du dé
  let dicePosX = -(diceValue * 100 - 100);
  // console.log(dicePosX);
  diceDiv.style.backgroundPositionX = `${dicePosX}px`; //-(${diceValue} * 100 - 100)`
}
/* Main*/

let diceThrows = parseInt(prompt("Combien de dés voulez-vous lancer"));

for (i = 0; i < diceThrows; i++) {
  dice();
}
