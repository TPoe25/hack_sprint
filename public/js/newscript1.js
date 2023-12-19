document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
  
    function transition() {
      this.classList.toggle('active');
    }
  
    cards.forEach(card => card.addEventListener('click', transition));
  
    console.log('Page loaded.');
  });  