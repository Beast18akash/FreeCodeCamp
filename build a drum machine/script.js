document.addEventListener("DOMContentLoaded", () => {
  const pads = document.querySelectorAll(".drum-pad");
  const display = document.getElementById("display");

  // Play sound when pad is clicked
  pads.forEach(pad => {
    pad.addEventListener("click", () => {
      const audio = pad.querySelector("audio");
      audio.currentTime = 0;
      audio.play();
      display.innerText = pad.id;
    });
  });

  // Play sound when key is pressed
  document.addEventListener("keydown", (event) => {
    const key = event.key.toUpperCase();
    const audio = document.getElementById(key);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      display.innerText = audio.parentElement.id;
    }
  });
});
