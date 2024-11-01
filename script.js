const users = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];
const youngestName = getYoungestUser(users);
console.log(youngestName);

function getYoungestUser(users) {
  let youngestUser = users.reduce(
    (min, user) => (user.age < min.age ? user : min),
    users[0]
  );
  return youngestUser.name;
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Dice game

function playGame() {
  let aPlayer, bPlayer;
  let winner = null;

  while (winner === null) {
    aPlayer = rollDice();
    bPlayer = rollDice();

    console.log(`Player A rolls: ${aPlayer}`);
    console.log(`Player B rolls: ${bPlayer}`);

    if (aPlayer === 3) {
      winner = "A";
    } else if (bPlayer === 3) {
      winner = "B";
    }
  }
  console.log(`Player ${winner} wins`);
}
playGame();
