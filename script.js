const container = document.getElementById("recipes-container");

fetch("https://dummyjson.com/recipes")
  .then(res => res.json())
  .then(data => {

    const recipes = data.recipes;

    recipes.forEach(recipe => {

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${recipe.image}" alt="">
        <h3>${recipe.name}</h3>
        <p>⭐ Rating: ${recipe.rating}</p>
        <p>⏱️ Time: ${recipe.cookTimeMinutes} mins</p>
      `;

      container.appendChild(card);

    });

  })
  .catch(error => {
    console.log("Error fetching recipes:", error);
  });