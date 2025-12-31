const screens = document.querySelectorAll(".screen");
let current = 0;

function go(index) {
  if (index === current) return;

  screens[current].classList.remove("active");
  screens[current].classList.add("exit");

  screens[index].classList.remove("exit");
  screens[index].classList.add("active");

  current = index;
}

/* COUNTER */
const wedding = new Date("2024-01-01T00:00:00");

function updateCounter() {
  const now = new Date();
  let diff = now - wedding;
  if (diff < 0) diff = 0;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("loveCounter").innerHTML =
    `${d} Days<br>${h} Hours<br>${m} Minutes ❤️`;
}

updateCounter();
setInterval(updateCounter, 60000);

/* SECRET */
function unlock() {
  const input = document.getElementById("secretInput").value;
  const box = document.getElementById("secretBox");
  const msg = document.getElementById("msg");

  if (input === "01/01/2024") {
    box.classList.remove("hidden");
    msg.innerText = "Unlocked ❤️";
  } else {
    msg.innerText = "Try again 💕";
  }
}
