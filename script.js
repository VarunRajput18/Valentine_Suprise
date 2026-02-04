const music = document.getElementById("bgMusic");

function start() {
  const name = document.getElementById("name").value || "Tum";

  document.getElementById("text").innerText =
    `${name}, mujhe tumhari company bahut achhi lagti hai.
Tum respectful, kind aur genuine ho 🙂

Kya tum mere saath Valentine share karna chahogi? 💖`;

  document.getElementById("buttons").classList.remove("hidden");
  music.play();
  createHearts(10);
}

function yes() {
  document.getElementById("text").innerText =
    "Thank you for saying yes Main hamesha tumhari respect aur comfort ka khayal rakhunga 🙂";

  createHearts(25);
}

function no() {
  document.getElementById("text").innerText =
    "Koi baat nahi 🙂  Tumhari honesty ke liye thank you Tumhari choice poori tarah respected hai 🌸";

  createHearts(5);
}

function createHearts(count) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
}
