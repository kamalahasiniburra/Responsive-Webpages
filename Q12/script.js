const list = document.querySelector('#myList');
const button = document.querySelector('#addItemButton');
function applyStyle(listItem, index) {
    const sequenceNumber = index + 1;
    if (sequenceNumber % 2 !== 0) {
        listItem.style.fontWeight = 'bold';
        listItem.style.color = 'blue';
    } else {
        listItem.style.fontStyle = 'italic';
        listItem.style.color = 'red';
    }
}
button.addEventListener('click', function() {
    const newIndex = list.children.length;
    const newItem = document.createElement('li');
    newItem.textContent = "New Item " + (newIndex + 1);
    applyStyle(newItem, newIndex);
    list.appendChild(newItem);
});
Array.from(list.children).forEach((item, index) => {
    applyStyle(item, index);
});