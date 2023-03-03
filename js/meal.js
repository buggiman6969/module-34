const loadMeals = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealContainer = document.getElementById('meal-container')
    meals.forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div class="col">
        <div class="card h-100">
          <img src="${meal.strMealThumb
          }" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strCategory
            }</p>
          </div>
        </div>
        `
        mealContainer.appendChild(mealDiv)
    });
}
loadMeals();