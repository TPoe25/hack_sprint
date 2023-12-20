
document.addEventListener('DOMContentLoaded', function () {
  window.onload = setInterval(GameLoop, 1000 / 10);

  document.addEventListener('click', function (event) {
    const card = event.target.closest('.card');
    if (card) {
      card.closest('.cardContainer').classList.toggle('inactive');
    }
  });

  console.log('Page loaded.');
});

const cards = document.querySelectorAll('.card');

function transition() {
  this.classList.toggle('active');
  // Add the following line to ensure that the 'inactive' class is toggled as well
  this.closest('.cardContainer').classList.toggle('inactive');
}

cards.forEach(card => card.addEventListener('click', transition));

function handleStarRating() {
  var ratingContainers = document.querySelectorAll('.ratingContainer');

  ratingContainers.forEach(function (ratingContainer) {
      // Create a function to handle the click event on a star
      function handleStarClick(starNumber) {
          return function () {
              // Update the rating based on the clicked star
              updateRating(ratingContainer, starNumber);
          };
      }

      // Create a function to update the rating
      function updateRating(container, selectedStars) {
          // Remove existing stars
          container.innerHTML = '';

          // Add selected stars
          for (var i = 1; i <= 5; i++) {
              var star = document.createElement('i');
              star.classList.add('fas', i <= selectedStars ? 'fa-star' : 'fa-star-o');
              star.addEventListener('click', handleStarClick(i));
              container.appendChild(star);
          }

          // Display the selected rating
          var ratingText = document.createElement('p');
          ratingText.textContent = 'Rating: ' + selectedStars + ' out of 5 stars';
          container.appendChild(ratingText);
      }

      // Initialize the rating with 0 stars
      updateRating(ratingContainer, 0);
  });
}

// Call the function to initialize the star rating system
handleStarRating();