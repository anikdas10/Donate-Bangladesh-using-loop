// Get all the buttons
const buttons = document.querySelectorAll('.card-btn');

// Loop through each button
buttons.forEach(button => {
    // Add an event listener to each button
    button.addEventListener('click', function() {
        // Get the corresponding card number from the button's data attribute
        const cardNumber = button.getAttribute('data-card');
        
        // Find the corresponding card element
        const card = document.getElementById(`card-${cardNumber}`);
        
        // Change the text inside the card
        const cardText = card.querySelector('.card-text');
        cardText.textContent = `New text for Card ${cardNumber}`;
    });
});
