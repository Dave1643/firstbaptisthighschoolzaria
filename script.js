// Handle login / logout button display
document.addEventListener("DOMContentLoaded", () => {
  const authBtn = document.getElementById("auth-btn");
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  if (isLoggedIn) {
    authBtn.textContent = "Logout";
    authBtn.href = "#";
    authBtn.addEventListener("click", (e) => {
      e.preventDefault();
      logout();
    });
  }
});

function logout() {
  localStorage.removeItem("loggedIn");
  alert("Logged out");
  window.location.href = "login.html";
}


  document.addEventListener('DOMContentLoaded', () => {
    const authBtn = document.getElementById('auth-btn');
    const loggedIn = localStorage.getItem('loggedIn');

    if (loggedIn === 'true') {
      // Show logout if logged in
      authBtn.textContent = 'Logout';
      authBtn.addEventListener('click', (e) => {
        e.preventDefault();
        logout();
      });
    } else {
      // Show login if not logged in
      authBtn.textContent = 'Login';
      authBtn.href = 'login.html';
    }
  });

  function logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    alert('You have been logged out');
    window.location.href = 'login.html';
  }


  document.addEventListener('DOMContentLoaded', () => {
  const featuredCards = document.querySelectorAll('.featured-card');
  const gridCards = document.querySelectorAll('.grid-card');
  let expandedCard = null;

  // Handle "Read More" click
  featuredCards.forEach(card => {
    card.querySelector('.read-more-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleExpand(card);
    });
  });

  // Handle smaller grid card click
  gridCards.forEach(gridCard => {
    gridCard.addEventListener('click', () => {
      if (expandedCard) {
        swapCards(expandedCard, gridCard);
      } else {
        // Default swap with the first featured
        swapCards(featuredCards[0], gridCard);
      }
    });
  });

  // Expand/Collapse Function
  function toggleExpand(card) {
    if (expandedCard === card) {
      card.classList.remove('expanded');
      expandedCard = null;
    } else {
      if (expandedCard) expandedCard.classList.remove('expanded');
      card.classList.add('expanded');
      expandedCard = card;
    }
  }

  // Swap a featured card with a grid card
  function swapCards(featuredCard, gridCard) {
    const featuredParent = featuredCard.parentNode;
    const gridParent = gridCard.parentNode;

    // Create clones for smooth transitions
    const newFeatured = gridCard.cloneNode(true);
    const newGrid = featuredCard.cloneNode(true);

    // Replace elements
    featuredParent.replaceChild(newFeatured, featuredCard);
    gridParent.replaceChild(newGrid, gridCard);

    // Reinitialize listeners
    newFeatured.querySelector('.read-more-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleExpand(newFeatured);
    });
  }
});



