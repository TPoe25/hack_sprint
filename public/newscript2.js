document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');

  function flipCard(event) {
    const card = event.currentTarget;
    card.classList.toggle('active');
    card.closest('.cardContainer').classList.toggle('inactive');
  }

  // Add mouseover event listener to each card
  cards.forEach(card => {
    card.addEventListener('mouseover', flipCard);
  });

  console.log('Page loaded.');
});