const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');

get_meal_btn.addEventListener('click', () => {
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
		createMeal(res.meals[0]);
	});
});

const createMeal = (meal) => {
	const ingredients = [];
	// Get all ingredients from the object. Up to 20
	for(let i=1; i<=20; i++) {
		if(meal[`strIngredient${i}`]) {
			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
		} else {
			// Stop if no more ingredients
			break;
		}
	}
	
	const newInnerHTML = `
        <div class="row" style="width:100%;justify-content:center;display:flex;">
            <div class="column">
                <img src="${meal.strMealThumb}" alt="Meal Image">
            </div>
            <div class="column">
                <br>
                <h1><a href="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}" target="_blank" >${meal.strMeal}</a></h1>
                <footer style="display:inline;"><i>${meal.strArea} ${meal.strCategory}</i></footer>
                <ul>${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
            </div>
        </div> <br>
	`;
	
	meal_container.innerHTML = newInnerHTML;
}


function getMeal() {  
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
		createMeal(res.meals[0]);
	});
};



getMeal();