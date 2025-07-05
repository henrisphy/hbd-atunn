document.addEventListener("DOMContentLoaded", () => {
  const nextCardBtn = document.getElementById("nextCardBtn");
  const surpriseBtn = document.getElementById("surpriseBtn");
  const popupContainer = document.getElementById("popupContainer");
  const funnyPopup = document.getElementById("funnyPopup");
  const optionIsabela = document.getElementById("optionIsabela");
  const optionBela = document.getElementById("optionBela");
  const closeFunnyBtn = document.getElementById("closeFunnyBtn");
  const body = document.body;
  const messageCards = document.querySelectorAll(".message-card");

  let currentCardIndex = 0;

  // Initialize
  popupContainer.classList.remove("active");
  funnyPopup.classList.remove("active");
  surpriseBtn.classList.add("hidden");

  // Next card button functionality
  nextCardBtn.addEventListener("click", () => {
    // Hide current card
    messageCards[currentCardIndex].classList.remove("active");

    // Move to next card
    currentCardIndex++;

    if (currentCardIndex < messageCards.length) {
      // Show next card
      messageCards[currentCardIndex].classList.add("active");
    } else {
      nextCardBtn.classList.add("hidden");
      surpriseBtn.classList.remove("hidden");
    }
  });

  // Surprise button functionality (same as before)
  surpriseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    body.classList.add("background-animation");
    createHearts();

    setTimeout(() => {
      popupContainer.classList.add("active");
      body.classList.remove("background-animation");
    }, 1000);

    createConfetti();
  });

  // Function to create heart particles
  function createHearts() {
    const colors = ["#ff758c", "#ff7eb3", "#ff8e9e", "#ff9a9e", "#ffb3c1"];
    const container = document.querySelector(".container");

    for (let i = 0; i < 20; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "🎁";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = window.innerHeight + "px";
      heart.style.fontSize = Math.random() * 40 + 20 + "px";
      heart.style.animationDuration = Math.random() * 3 + 2 + "s";
      heart.style.color = colors[Math.floor(Math.random() * colors.length)];

      document.body.appendChild(heart);

      // Remove heart after animation
      setTimeout(() => {
        heart.remove();
      }, 4000);
    }
  }

  // Pastikan popup awalnya tersembunyi
  popupContainer.classList.remove("active");
  funnyPopup.classList.remove("active");

  // Handle option selection
  optionIsabela.addEventListener("click", (e) => {
    e.preventDefault();
    popupContainer.classList.remove("active");
    setTimeout(() => {
      funnyPopup.classList.add("active");
      createConfetti();
    }, 300);
  });

  optionBela.addEventListener("click", (e) => {
    e.preventDefault();
    // Close and reopen the popup in a loop
    popupContainer.classList.remove("active");
    setTimeout(() => {
      popupContainer.classList.add("active");
      createConfetti();
    }, 300);
  });

  // Close funny popup
  closeFunnyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    funnyPopup.classList.remove("active");
  });

  // Create confetti effect
  function createConfetti() {
    const colors = ["#ff758c", "#ff7eb3", "#ff8e9e", "#ff9a9e", "#ffb3c1"];
    const container = document.querySelector(".container");

    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.top = -10 + "px";
      confetti.style.opacity = "1";
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

      container.appendChild(confetti);

      const animationDuration = Math.random() * 3 + 2;

      confetti.animate(
        [
          { top: "-10px", opacity: 1 },
          { top: "100vh", opacity: 0 },
        ],
        {
          duration: animationDuration * 1000,
          easing: "cubic-bezier(0.1, 0.8, 0.9, 1)",
        }
      );

      setTimeout(() => {
        confetti.remove();
      }, animationDuration * 1000);
    }
  }
});
