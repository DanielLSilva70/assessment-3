
let favColor = document.querySelector('#color');
let favPlace = document.querySelector('#place');
let favRitual = document.querySelector('#ritual');

favColor.addEventListener('click', () => {
    alert('My favorite color is blue');
})

favPlace.addEventListener('click', () => {
    alert('My favortie place is Brazil');
})

favRitual.addEventListener('click', () => {
    alert('My favorite ritual is eating cinnamon toast crunch in the morning');
})