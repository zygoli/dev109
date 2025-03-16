let foundItems = 0;
const listItems = document.querySelectorAll('#list li');
const areas = document.querySelectorAll('area');
const playAgainButton = document.getElementById('play-again');

areas.forEach(area => {
    area.addEventListener('click', function() {
        foundItem(area.alt);
    }, false);
});

function foundItem(itemName) {
    const listItem = document.querySelector(`#${itemName.toLowerCase().replace(' ', '-')} li`);
    if (listItem) {
        listItem.style.textDecoration = 'line-through';
        foundItems++;
        checkIfAllFound();
    }
}

function checkIfAllFound() {
    if (foundItems === listItems.length) {
        playAgainButton.style.display = 'block';
        playAgainButton.addEventListener('click', replay, false);
    }
}

function replay() {
    location.reload();
}
