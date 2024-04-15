document.addEventListener('DOMContentLoaded', function() {
    // Fetch character data from the provided API endpoint
    fetch('https://rickandmortyapi.com/api/character/108')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch character data');
            }
            return response.json();
        })
        .then(character => {
            // Display the character data
            displayCharacter(character);

            // Add event listeners after displaying the character
            addEventListeners();
        })
        .catch(error => {
            console.error('Error:', error.message);
        });

    // Function to display a single character on the webpage
    function displayCharacter(character) {
        // Find the container element where the character will be displayed
        const container = document.querySelector('.container');
        // Clear the container
        container.innerHTML = '';

        // Create a card element to display the character information
        const card = document.createElement('div');
        card.classList.add('card');

        // Create and append the character image
        const image = document.createElement('img');
        image.src = character.image;
        image.alt = character.name;
        card.appendChild(image);

        // Create an array of character properties
        const characterProps = [
            { label: 'Name', value: character.name },
            { label: 'Status', value: character.status },
            { label: 'Species', value: character.species },
            { label: 'Gender', value: character.gender }
        ];

        // Iterate over the character properties array using forEach
        characterProps.forEach(prop => {
            const p = document.createElement('p');
            p.textContent = `${prop.label}: ${prop.value}`;
            card.appendChild(p);
        });

        // Append the card to the container
        container.appendChild(card);
    }

    // Function to add event listeners
    function addEventListeners() {
        // Add mouseover event listener to the card
        const card = document.querySelector('.card');
        card.addEventListener('mouseover', function(event) {
            event.currentTarget.style.opacity = '0.8'; // Change opacity on mouseover
        });

        // Add mouseout event listener to the card
        card.addEventListener('mouseout', function(event) {
            event.currentTarget.style.opacity = '1'; // Reset opacity on mouseout
        });

        // Add click event listener to the card
        card.addEventListener('click', function(event) {
            alert(`You clicked on ${event.currentTarget.querySelector('p').textContent.split(': ')[1]}`); // Alert with character name on click
        });
    }
});
