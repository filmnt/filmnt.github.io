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
	<div style="text-align:center">
	<h1><a href="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}" target="_blank" >${meal.strMeal}</a></h1>
    <footer style="display:inline;"><i>${meal.strArea} ${meal.strCategory}</i></footer>
	
	</div>

        <div style="width:100%;justify-content:center;display:flex;">
                <img src="${meal.strMealThumb}" alt="Meal Image">
        </div> 
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


// Function to open the dialog
function openFood() {
	var dialog = document.getElementById('food-dialog');
	dialog.showModal();
  }
  
  // Function to close the dialog with animation
  function closeFood() {
	var dialog = document.getElementById('food-dialog');
	
	// Add a class to trigger the closing animation
	dialog.classList.add('closing');
  
	// Listen for animation end event
	dialog.addEventListener('animationend', function() {
	  // After animation completes, close the dialog
	  dialog.close();
	  
	  // Remove the closing class to reset for next time
	  dialog.classList.remove('closing');
	}, { once: true }); // Use { once: true } to automatically remove the event listener after it's fired once
  }
  
  // Add event listener to the dialog's backdrop
  document.getElementById('food-dialog').addEventListener('click', function(event) {
	if (event.target === this) {
	  closeFood();
	}
  });
  
  document.getElementById('food-dialog').addEventListener('click', function(event) {
	if (event.target === this) {
	  closeNavbar();
	}
  });