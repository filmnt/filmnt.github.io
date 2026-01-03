const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');

if (get_meal_btn && meal_container) {
  get_meal_btn.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => res.ok ? res.json() : Promise.reject('Failed to fetch'))
      .then(res => {
        if (res.meals && res.meals[0]) {
          createMeal(res.meals[0]);
        }
      })
      .catch(error => {
        console.error('Error fetching meal:', error);
      });
  });
}

function createMeal(meal) {
  try {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
      } else {
        break;
      }
    }

    const videoId = meal.strYoutube && meal.strYoutube.length >= 11
      ? meal.strYoutube.slice(-11)
      : '';

    const newInnerHTML = `
      <div style="text-align:center">
        <h1><a href="https://www.youtube.com/embed/${videoId}" target="_blank">${meal.strMeal}</a></h1>
        <footer style="display:inline;"><i>${meal.strArea || ''} ${meal.strCategory || ''}</i></footer>
      </div>
      <div style="width:100%;justify-content:center;display:flex;">
        <img src="${meal.strMealThumb || ''}" alt="Meal Image">
      </div>
    `;

    if (meal_container) {
      meal_container.innerHTML = newInnerHTML;
    }
  } catch (error) {
    console.error('Error in createMeal:', error);
  }
}

function getMeal() {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.ok ? res.json() : Promise.reject('Failed to fetch'))
    .then(res => {
      if (res.meals && res.meals[0]) {
        createMeal(res.meals[0]);
      }
    })
    .catch(error => {
      console.error('Error fetching meal:', error);
    });
}

getMeal();

function openFood() {
  try {
    var modal = document.getElementById('food-dialog');
    var closeBtn = modal ? modal.previousElementSibling : null;
    if (!modal || !closeBtn) return;
    modal.style.display = 'block';
    closeBtn.style.display = 'block';
    let openDialogs = [];
    try {
      openDialogs = JSON.parse(localStorage.getItem('openDialogs')) || [];
    } catch (e) {
      openDialogs = [];
    }
    if (!Array.isArray(openDialogs)) openDialogs = [];
    if (!openDialogs.includes('food-dialog')) {
      openDialogs.push('food-dialog');
      try {
        localStorage.setItem('openDialogs', JSON.stringify(openDialogs));
      } catch (e) {}
    }
  } catch (error) {
    console.error('Error in openFood:', error);
  }
}

function closeFood() {
  try {
    var modal = document.getElementById('food-dialog');
    var closeBtn = modal ? modal.previousElementSibling : null;
    if (!modal || !closeBtn) return;
    modal.style.display = 'none';
    closeBtn.style.display = 'none';
    let openDialogs = [];
    try {
      openDialogs = JSON.parse(localStorage.getItem('openDialogs')) || [];
    } catch (e) {
      openDialogs = [];
    }
    if (!Array.isArray(openDialogs)) openDialogs = [];
    openDialogs = openDialogs.filter(id => id !== 'food-dialog');
    try {
      localStorage.setItem('openDialogs', JSON.stringify(openDialogs));
    } catch (e) {}
  } catch (error) {
    console.error('Error in closeFood:', error);
  }
}
