let tossCount = 0;

function tossCoin() {
  const coins = [
    document.getElementById("coin1"),
   ];
  const count = document.getElementById("count");
  const sound = document.getElementById("toss-sound");

  sound.currentTime = 0;
  sound.play();

  coins.forEach((coin, index) => {
    coin.classList.add("flip");

    setTimeout(() => {
      const isHeads = Math.random() < 0.5;
      coin.src = isHeads ? "heads.png" : "tails.png";
      coin.classList.remove("flip");
    }, 600 + index * 100); // slight delay for each coin
  });

  tossCount++;
  count.textContent = tossCount;
}

function resetGame() {
  tossCount = 0;
  document.getElementById("count").textContent = "0";
  ["coin1" ].forEach(id => {
    document.getElementById(id).src = "heads.png";
  });
}
