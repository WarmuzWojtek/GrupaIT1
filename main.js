const btn = document.querySelector(".btn");
const evenContainer = document.querySelector(".evenContainer");
const oddContainer = document.querySelector(".oddContainer");

btn.addEventListener("click", generateNumbers);

function generateNumbers() {
  evenContainer.innerHTML = "";
  oddContainer.innerHTML = "";
  const evenTitle = document.createElement("p");
  evenTitle.textContent = "Even numbers:";
  evenTitle.classList.add("thead");
  evenContainer.appendChild(evenTitle);
  const oddTitle = document.createElement("p");
  oddTitle.textContent = "Odd numbers:";
  oddTitle.classList.add("thead");
  oddContainer.appendChild(oddTitle);
  let evenNumbers = [];
  let oddNumbers = [];
  for (i = 0; i < 20; i++) {
    const number = Math.floor(Math.random() * 100);
    if (number % 2 == 0) {
      evenNumbers.push(number);
    } else {
      oddNumbers.push(number);
    }
  }
  evenNumbers.sort(function (a, b) {
    return a - b;
  });
  oddNumbers.sort(function (a, b) {
    return a - b;
  });
  evenNumbers.forEach((number, index) => {
    const el = document.createElement("p");
    el.textContent = number;
    el.classList.add("fadeIn");
    el.style.animationDelay = index / 2 + "s";
    evenContainer.appendChild(el);
  });
  oddNumbers.forEach((number, index) => {
    const el = document.createElement("p");
    el.textContent = number;
    el.classList.add("fadeIn");
    el.style.animationDelay = index / 2 + "s";
    oddContainer.appendChild(el);
  });
}
