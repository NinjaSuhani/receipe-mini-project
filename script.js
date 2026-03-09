const container = document.getElementById("recipes-container");

fetch("https://dummyjson.com/recipes")
.then(res => res.json())
.then(data => {

    const recipes = data.recipes;

    recipes.forEach(recipe => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${recipe.image}">
            <div class="card-content">
                <h3>${recipe.name}</h3>
                <p>⭐ Rating: ${recipe.rating}</p>
                <p>⏱️ Cook Time: ${recipe.cookTimeMinutes} mins</p>
            </div>
        `;

        container.appendChild(card);

    });

});