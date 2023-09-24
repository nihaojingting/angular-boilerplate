//THE DUPLICATING BUTTON STUFF

document.getElementById('duplicateButton').addEventListener('click', (e) => {
  // Get the card element to duplicate
  const originalCard = document.querySelector('.card');

  // Target your card. Create a clone of the node (hint: .... whatever selector .cloneNode(true) )
  
  const clonedCard = originalCard.cloneNode(true);

 //Append means to put data inside an element
  // Append(add on) the cloned card, whic to the cardcontainer.
  document.querySelector('.cardcontainer').appendChild(clonedCard);
});


//THE BACKGROUND TOGGLER-INATOR
document.addEventListener('DOMContentLoaded', function() {
  //ASK why is it card here and not .card
  const card = document.getElementById('card');
  const toggleButton = document.getElementById('toggleButton');

  toggleButton.addEventListener('click', (e) => {
    // Toggle the background color
    if (card.style.backgroundColor === '' || card.style.backgroundColor === 'pink') {
      card.style.backgroundColor = 'lightblue';
    } else {
      card.style.backgroundColor = 'pink';
    }
  });
});

//CHANGE TEXT OF HEADING TO SOMETHING ELSE-INATOR

const heading = document.getElementById('heading');
const changeTextButton = document.getElementById('changeHeadingButton');

changeHeadingButton.addEventListener('click', (e) => {
  // Change the text of the heading
  heading.textContent = 'I really like bacon and cabbage lol';
});


//DELETE LAST INSTANCE CARD-INATOR

const removeDuplicate = document.getElementById('removeDuplicate');

removeDuplicate.addEventListener('click', (e) => {
  // Get all card elements within the container
  const cardcontainer = document.querySelector('.cardcontainer'); // Use '#cardcontainer' to select by ID
  const cards = cardcontainer.querySelectorAll('.card'); // Use querySelectorAll to select all matching elements

  // Checks for cards to remove
  if (cards.length > 1) {
    // Remove the last card in the list
    // Removes 1 even if there is only 1
    const lastCard = cards[cards.length - 1];
    cardcontainer.removeChild(lastCard);
  }
});

const paragraph = document.getElementById('paragraph');
const hideButton = document.getElementById('hideButton');

hideButton.addEventListener('click', function() {
  // Toggle the visibility of the paragraph
  if (paragraph.style.display === 'none' || paragraph.style.display === '') {
     // Shows the paragraph
    paragraph.style.display = 'block';
  } else {
    // Hide the paragraph
    paragraph.style.display = 'none';
  }
});
