document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("gen");
  const btnStat = document.getElementById("stat");
  const statsContainer = document.getElementById("stats");
  const evenContainer = document.querySelector(".evenContainer");
  const oddContainer = document.querySelector(".oddContainer");
  const modal = document.querySelector(".modal");
  const container = document.querySelector(".container");
  const closeBtn = document.querySelector(".btn-close");
  let draws = [];
  let stats = {
    evensThisDraw: "",
    oddsThisDraw: "",
    evensAllDraws: "",
    oddsAllDraws: "",
  };

  function generateNumbers() {
    evenContainer.innerHTML = "";
    oddContainer.innerHTML = "";
    modal.style.display = "none";
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
    let draw = {
      evenNumbers,
      oddNumbers,
    };
    draws.push(draw);
  }

  function getStatistics() {
    modal.style.display = "flex";
    container.classList.add("likeOverlay");
    statsContainer.innerHTML = "";
    const evensThisDraw = draws[draws.length - 1].evenNumbers;
    const oddsThisDraw = draws[draws.length - 1].oddNumbers;
    let evensAllDraws = 0;
    draws.forEach((draw) => {
      evensAllDraws += draw.evenNumbers.length;
    });
    let oddsAllDraws = 0;
    draws.forEach((draw) => {
      oddsAllDraws += draw.oddNumbers.length;
    });
    stats = {
      evensThisDraw,
      oddsThisDraw,
      evensAllDraws,
      oddsAllDraws,
    };

    const statRow1 = document.createElement("tr");
    const key1 = document.createElement("th");
    key1.textContent = "number of even numbers in last draw";
    const value1 = document.createElement("th");
    value1.textContent = stats.evensThisDraw.length;
    statRow1.appendChild(key1);
    statRow1.appendChild(value1);
    statsContainer.appendChild(statRow1);

    const statRow2 = document.createElement("tr");
    const key2 = document.createElement("th");
    key2.textContent = "number of odd numbers in last draw";
    const value2 = document.createElement("th");
    value2.textContent = stats.oddsThisDraw.length;
    statRow2.appendChild(key2);
    statRow2.appendChild(value2);
    statsContainer.appendChild(statRow2);

    const statRow3 = document.createElement("tr");
    const key3 = document.createElement("th");
    key3.textContent = "number of even numbers in all draws";
    const value3 = document.createElement("th");
    value3.textContent = stats.evensAllDraws;
    statRow3.appendChild(key3);
    statRow3.appendChild(value3);
    statsContainer.appendChild(statRow3);

    const statRow4 = document.createElement("tr");
    const key4 = document.createElement("th");
    key4.textContent = "number of odd numbers in all draws";
    const value4 = document.createElement("th");
    value4.textContent = stats.oddsAllDraws;
    statRow4.appendChild(key4);
    statRow4.appendChild(value4);
    statsContainer.appendChild(statRow4);
  }

  function closeStats() {
    modal.style.display = "none";
    container.classList.remove("likeOverlay");
    evenContainer.innerHTML = "";
    oddContainer.innerHTML = "";
  }

  btn.addEventListener("click", generateNumbers);
  btnStat.addEventListener("click", getStatistics);
  closeBtn.addEventListener("click", closeStats);
});
