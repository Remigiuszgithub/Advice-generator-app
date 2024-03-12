// Dodaj kod, który pobierze poradę przy ładowaniu strony
document.addEventListener('DOMContentLoaded', function () {
    fetchAdvice();
  });
function fetchAdvice() {
    const apiUrl = 'https://api.adviceslip.com/advice';
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const adviceIdElement = document.getElementById('adviceId');
        const adviceTextElement = document.getElementById('adviceText');
  
        adviceIdElement.textContent = data.slip.id;
        adviceTextElement.textContent = data.slip.advice;
      })
      .catch(error => {
        console.error('Error fetching advice:', error);
      });
  }
  