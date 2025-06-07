const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');

get_meal_btn.addEventListener('click', () => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => {
      createMeal(res.meals[0]);
    });
});

function createMeal(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
    } else {
      break;
    }
  }
  
  const newInnerHTML = `
    <div style="text-align:center">
      <h1><a href="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}" target="_blank">${meal.strMeal}</a></h1>
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
}

getMeal();

function openFood() {
  var modal = document.getElementById('food-dialog');
  var closeBtn = modal.previousElementSibling;
  if (!modal || !closeBtn) return;
  modal.style.display = 'block';
  closeBtn.style.display = 'block';
  let openDialogs = JSON.parse(localStorage.getItem('openDialogs')) || [];
  if (!openDialogs.includes('food-dialog')) {
    openDialogs.push('food-dialog');
    localStorage.setItem('openDialogs', JSON.stringify(openDialogs));
  }
}

function closeFood() {
  var modal = document.getElementById('food-dialog');
  var closeBtn = modal.previousElementSibling;
  if (!modal || !closeBtn) return;
  modal.style.display = 'none';
  closeBtn.style.display = 'none';
  let openDialogs = JSON.parse(localStorage.getItem('openDialogs')) || [];
  openDialogs = openDialogs.filter(id => id !== 'food-dialog');
  localStorage.setItem('openDialogs', JSON.stringify(openDialogs));
}