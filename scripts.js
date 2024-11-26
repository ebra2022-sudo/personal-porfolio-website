function submitRecommendation() {
  const recommendationText = document.getElementById('recommendation-text').value;
  if (recommendationText.trim() === "") {
    alert("Please enter a recommendation.");
    return;
  }

  // Create a new recommendation element
  const newRecommendation = document.createElement('div');
  newRecommendation.classList.add('recommendation');
  newRecommendation.innerHTML = `
    <p>"${recommendationText}"</p>
    <span>- New User</span>
  `;

  // Add the new recommendation to the list
  const recommendationsList = document.querySelector('.recommendations-list');
  recommendationsList.appendChild(newRecommendation);

  // Show popup confirmation
  const popup = document.getElementById('popup');
  popup.style.display = 'block';

  // Clear the text area
  document.getElementById('recommendation-text').value = '';
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}
