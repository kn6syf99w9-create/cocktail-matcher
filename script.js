const AXES = ["fresh", "cozy", "bitter", "experimental", "herbal", "heavy"];
const PANTRY_STORAGE_KEY = "cocktailMatcherPantry";

let userProfile = {
  fresh: 5,
  cozy: 5,
  bitter: 5,
  experimental: 5,
  herbal: 5,
  heavy: 5
};

let requiredIngredients = new Set();
let excludedIngredients = new Set();
let pantryIngredients = new Set(loadPantryIngredients());

let vibeChart;

function label(axis) {
  return axis.charAt(0).toUpperCase() + axis.slice(1);
}

function normalizeIngredient(ingredient) {
  return ingredient
    .replace(/^(?:\d+(?:\.\d+)?|\d+\/\d+)\s?(cl|ml|oz|tsp|dash|dashes|barspoon|pinch|drops?)\s+/i, "")
    .replace(/^(?:\d+(?:\.\d+)?|\d+\/\d+)\s+/i, "")
    .trim();
}

function loadPantryIngredients() {
  try {
    const savedPantry = JSON.parse(localStorage.getItem(PANTRY_STORAGE_KEY));
    return Array.isArray(savedPantry) ? savedPantry : [];
  } catch {
    return [];
  }
}

function savePantryIngredients() {
  localStorage.setItem(PANTRY_STORAGE_KEY, JSON.stringify([...pantryIngredients]));
}

function getCocktailIngredients(cocktail) {
  return cocktail.ingredients.map(normalizeIngredient);
}

function getUniqueCocktailIngredients(cocktail) {
  return [...new Set(getCocktailIngredients(cocktail))];
}

function getIngredientStats() {
  const ingredientCounts = new Map();

  COCKTAILS.forEach(cocktail => {
    getUniqueCocktailIngredients(cocktail).forEach(ingredient => {
      ingredientCounts.set(ingredient, (ingredientCounts.get(ingredient) || 0) + 1);
    });
  });

  return [...ingredientCounts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

function getProfileArray(profile) {
  return AXES.map(axis => profile[axis]);
}

function calculateDistance(user, cocktail) {
  return AXES.reduce((sum, axis) => {
    return sum + Math.abs(user[axis] - cocktail.vibes[axis]);
  }, 0);
}

function distanceToMatchPercent(distance) {
  const maxDistance = AXES.length * 10;
  return Math.round((1 - distance / maxDistance) * 100);
}

function cocktailPassesIngredientFilters(cocktail) {
  const ingredients = getUniqueCocktailIngredients(cocktail);

  const hasAllRequired = [...requiredIngredients].every(required =>
    ingredients.includes(required)
  );

  const hasNoExcluded = [...excludedIngredients].every(excluded =>
    !ingredients.includes(excluded)
  );

  return hasAllRequired && hasNoExcluded;
}

function getMissingIngredients(cocktail) {
  return getUniqueCocktailIngredients(cocktail).filter(ingredient =>
    !pantryIngredients.has(ingredient)
  );
}

function getPantryBadgeData(cocktail) {
  if (pantryIngredients.size === 0) {
    return {
      text: "Pantry unset",
      status: "neutral"
    };
  }

  const missingIngredients = getMissingIngredients(cocktail);

  if (missingIngredients.length === 0) {
    return {
      text: "All stocked",
      status: "ready"
    };
  }

  return {
    text: `Missing ${missingIngredients.length}`,
    status: "missing"
  };
}

function setPantryBadge(element, cocktail) {
  const pantryBadge = getPantryBadgeData(cocktail);
  element.textContent = pantryBadge.text;
  element.className = `pantry-badge ${pantryBadge.status}`;
}

function getFilteredCocktails() {
  return COCKTAILS.filter(cocktailPassesIngredientFilters);
}

function getTopMatches() {
  return getFilteredCocktails()
    .map(cocktail => {
      const distance = calculateDistance(userProfile, cocktail);
      return {
        ...cocktail,
        distance,
        match: distanceToMatchPercent(distance)
      };
    })
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 4);
}

function createSliders() {
  const sliderContainer = document.getElementById("sliders");

  AXES.forEach(axis => {
    const card = document.createElement("div");
    card.className = "slider-card";

    card.innerHTML = `
      <div class="slider-top">
        <span>${label(axis)}</span>
        <strong id="${axis}-value">${userProfile[axis]}</strong>
      </div>
      <input
        id="${axis}-slider"
        type="range"
        min="0"
        max="10"
        step="1"
        value="${userProfile[axis]}"
      />
    `;

    sliderContainer.appendChild(card);

    const slider = card.querySelector("input");
    slider.addEventListener("input", event => {
      userProfile[axis] = Number(event.target.value);
      document.getElementById(`${axis}-value`).textContent = userProfile[axis];
      updateApp();
    });
  });
}

function createChart() {
  const ctx = document.getElementById("vibeChart");

  vibeChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: AXES.map(label),
      datasets: [
        {
          label: "Your mood",
          data: getProfileArray(userProfile),
          fill: true,
          backgroundColor: "rgba(217, 75, 43, 0.18)",
          borderColor: "rgba(217, 75, 43, 0.95)",
          pointBackgroundColor: "rgba(217, 75, 43, 1)",
          pointBorderColor: "#fff",
          pointRadius: 4,
          borderWidth: 2
        },
        {
          label: "Best match",
          data: getProfileArray(COCKTAILS[0].vibes),
          fill: true,
          backgroundColor: "rgba(255, 255, 255, 0.07)",
          borderColor: "rgba(255, 255, 255, 0.55)",
          pointBackgroundColor: "rgba(255, 255, 255, 0.8)",
          pointBorderColor: "#111",
          pointRadius: 3,
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 0,
          max: 10,
          ticks: {
            stepSize: 2,
            backdropColor: "transparent",
            color: "rgba(246, 239, 231, 0.45)"
          },
          grid: {
            color: "rgba(246, 239, 231, 0.16)"
          },
          angleLines: {
            color: "rgba(246, 239, 231, 0.16)"
          },
          pointLabels: {
            color: "rgba(246, 239, 231, 0.85)",
            font: {
              size: 13
            }
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: "rgba(246, 239, 231, 0.75)"
          }
        }
      }
    }
  });
}

function updateColors(cocktail) {
  document.documentElement.style.setProperty("--bg-1", cocktail.colors.primary);
  document.documentElement.style.setProperty("--bg-2", cocktail.colors.secondary);
  document.documentElement.style.setProperty("--accent", cocktail.colors.accent);
}

function setRequiredIngredient(ingredient) {
  if (requiredIngredients.has(ingredient)) {
    requiredIngredients.delete(ingredient);
  } else {
    excludedIngredients.delete(ingredient);
    requiredIngredients.add(ingredient);
  }

  updateApp();
}

function setExcludedIngredient(ingredient) {
  if (excludedIngredients.has(ingredient)) {
    excludedIngredients.delete(ingredient);
  } else {
    requiredIngredients.delete(ingredient);
    excludedIngredients.add(ingredient);
  }

  updateApp();
}

function renderIngredients(cocktail) {
  const ingredients = document.getElementById("ingredients");
  ingredients.innerHTML = "";

  cocktail.ingredients.forEach(item => {
    const cleanIngredient = normalizeIngredient(item);

    const li = document.createElement("li");
    li.className = "ingredient-row";

    const includeActive = requiredIngredients.has(cleanIngredient) ? "active-include" : "";
    const excludeActive = excludedIngredients.has(cleanIngredient) ? "active-exclude" : "";
    const pantryActive = pantryIngredients.has(cleanIngredient) ? "in-pantry" : "";

    li.innerHTML = `
      <span class="${pantryActive}">${item}</span>
      <div class="ingredient-actions">
        <button class="ingredient-btn ${includeActive}" type="button" title="Require ingredient">+</button>
        <button class="ingredient-btn ${excludeActive}" type="button" title="Exclude ingredient">−</button>
      </div>
    `;

    const buttons = li.querySelectorAll("button");

    buttons[0].addEventListener("click", () => {
      setRequiredIngredient(cleanIngredient);
    });

    buttons[1].addEventListener("click", () => {
      setExcludedIngredient(cleanIngredient);
    });

    ingredients.appendChild(li);
  });
}

function renderActiveFilters() {
  const activeFilters = document.getElementById("activeFilters");
  activeFilters.innerHTML = "";

  if (requiredIngredients.size === 0 && excludedIngredients.size === 0) {
    activeFilters.innerHTML = `<span class="filter-pill">No active filters</span>`;
    return;
  }

  requiredIngredients.forEach(ingredient => {
    const pill = document.createElement("button");
    pill.className = "filter-pill include removable-filter";
    pill.type = "button";
    pill.textContent = `Must include: ${ingredient} ×`;

    pill.addEventListener("click", () => {
      requiredIngredients.delete(ingredient);
      updateApp();
    });

    activeFilters.appendChild(pill);
  });

  excludedIngredients.forEach(ingredient => {
    const pill = document.createElement("button");
    pill.className = "filter-pill exclude removable-filter";
    pill.type = "button";
    pill.textContent = `Exclude: ${ingredient} ×`;

    pill.addEventListener("click", () => {
      excludedIngredients.delete(ingredient);
      updateApp();
    });

    activeFilters.appendChild(pill);
  });
}

function togglePantryIngredient(ingredient) {
  if (pantryIngredients.has(ingredient)) {
    pantryIngredients.delete(ingredient);
  } else {
    pantryIngredients.add(ingredient);
  }

  savePantryIngredients();
  renderPantry();
  updateApp();
}

function updatePantryCount() {
  document.getElementById("pantryCount").textContent = pantryIngredients.size;
}

function renderPantry() {
  const pantryList = document.getElementById("pantryList");
  const searchInput = document.getElementById("pantrySearch");
  const searchTerm = searchInput.value.trim().toLowerCase();

  pantryList.innerHTML = "";

  getIngredientStats()
    .filter(ingredient => ingredient.name.toLowerCase().includes(searchTerm))
    .forEach(ingredient => {
      const isSelected = pantryIngredients.has(ingredient.name);
      const button = document.createElement("button");
      button.className = `pantry-item${isSelected ? " selected" : ""}`;
      button.type = "button";
      button.innerHTML = `
        <span>${ingredient.name}</span>
        <small>Used in ${ingredient.count} cocktails</small>
      `;

      button.addEventListener("click", () => {
        togglePantryIngredient(ingredient.name);
      });

      pantryList.appendChild(button);
    });

  updatePantryCount();
}

function updateResult(matches) {
  const best = matches[0];

  document.getElementById("bestName").textContent = best.name;
  document.getElementById("bestDescription").textContent = best.description;
  document.getElementById("bestScore").textContent = `${best.match}%`;
  setPantryBadge(document.getElementById("pantryBadge"), best);

  renderIngredients(best);

  document.getElementById("method").textContent = best.method;

  const alternativeList = document.getElementById("alternativeList");
  alternativeList.innerHTML = "";

  matches.slice(1).forEach(match => {
    const card = document.createElement("details");
    card.className = "alt-card alt-details";
    const pantryBadge = getPantryBadgeData(match);

    card.innerHTML = `
        <summary>
        <div>
            <strong>${match.name}</strong>
            <p>${match.description}</p>
        </div>
        <div class="alt-meta">
          <span class="pantry-badge ${pantryBadge.status}">${pantryBadge.text}</span>
          <strong>${match.match}%</strong>
        </div>
        </summary>

        <div class="alt-expanded">
        <h4>Ingredients</h4>
        <ul>
            ${match.ingredients.map(item => `<li>${item}</li>`).join("")}
        </ul>

        <h4>Method</h4>
        <p>${match.method}</p>
        </div>
    `;

    alternativeList.appendChild(card);
  });
}

function updateNoMatchState() {
  document.getElementById("bestName").textContent = "No match";
  document.getElementById("bestDescription").textContent =
    "Your ingredient filters exclude all cocktails in the current database.";
  document.getElementById("bestScore").textContent = "—";
  document.getElementById("pantryBadge").textContent = "Pantry unset";
  document.getElementById("pantryBadge").className = "pantry-badge neutral";
  document.getElementById("ingredients").innerHTML =
    `<li class="no-match">Reset filters or remove one of the active constraints.</li>`;
  document.getElementById("method").textContent = "—";
  document.getElementById("alternativeList").innerHTML = "";

  vibeChart.data.datasets[0].data = getProfileArray(userProfile);
  vibeChart.data.datasets[1].data = [0, 0, 0, 0, 0, 0];
  vibeChart.update();
}

function updateChart(best) {
  vibeChart.data.datasets[0].data = getProfileArray(userProfile);
  vibeChart.data.datasets[1].data = getProfileArray(best.vibes);

  const accent = getComputedStyle(document.documentElement)
    .getPropertyValue("--accent")
    .trim();

  vibeChart.data.datasets[0].borderColor = accent;
  vibeChart.data.datasets[0].pointBackgroundColor = accent;

  vibeChart.update();
}

function resetFilters() {
  requiredIngredients.clear();
  excludedIngredients.clear();
  updateApp();
}

function updateCocktailCount() {
  document.getElementById("cocktailCount").textContent = COCKTAILS.length;
}

function updateApp() {
  renderActiveFilters();

  const matches = getTopMatches();

  if (matches.length === 0) {
    updateNoMatchState();
    return;
  }

  const best = matches[0];

  updateColors(best);
  updateResult(matches);
  updateChart(best);
}

function renderDatabase() {
  const databaseList = document.getElementById("databaseList");
  databaseList.innerHTML = "";

  const sortedCocktails = [...COCKTAILS].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  sortedCocktails.forEach(cocktail => {
    const card = document.createElement("details");
    card.className = "database-card database-details";

    card.innerHTML = `
      <summary>
        <div>
          <h3>${cocktail.name}</h3>
          <p>${cocktail.description}</p>
        </div>
      </summary>

      <div class="database-expanded">
        <h4>Ingredients</h4>
        <ul>
          ${cocktail.ingredients.map(item => `<li>${item}</li>`).join("")}
        </ul>

        <h4>Method</h4>
        <p>${cocktail.method}</p>
      </div>
    `;

    databaseList.appendChild(card);
  });

  document.getElementById("databaseCount").textContent = COCKTAILS.length;
}

function showView(view) {
  const matcherView = document.getElementById("matcherView");
  const pantryView = document.getElementById("pantryView");
  const databaseView = document.getElementById("databaseView");
  const showMatcher = document.getElementById("showMatcher");
  const showPantry = document.getElementById("showPantry");
  const showDatabase = document.getElementById("showDatabase");

  const pantryIsActive = view === "pantry";
  const databaseIsActive = view === "database";

  matcherView.hidden = pantryIsActive || databaseIsActive;
  pantryView.hidden = !pantryIsActive;
  databaseView.hidden = !databaseIsActive;

  showMatcher.classList.toggle("active", !pantryIsActive && !databaseIsActive);
  showPantry.classList.toggle("active", pantryIsActive);
  showDatabase.classList.toggle("active", databaseIsActive);

  if (pantryIsActive) {
    renderPantry();
  }

  if (databaseIsActive) {
    renderDatabase();
  }
}

document.getElementById("showMatcher").addEventListener("click", () => {
  showView("matcher");
});

document.getElementById("showPantry").addEventListener("click", () => {
  showView("pantry");
});

document.getElementById("showDatabase").addEventListener("click", () => {
  showView("database");
});
document.getElementById("resetFilters").addEventListener("click", resetFilters);
document.getElementById("pantrySearch").addEventListener("input", renderPantry);
document.getElementById("clearPantry").addEventListener("click", () => {
  pantryIngredients.clear();
  savePantryIngredients();
  renderPantry();
  updateApp();
});

updateCocktailCount();
renderPantry();
renderDatabase();
createSliders();
createChart();
updateApp();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js");
  });
}
