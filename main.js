"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<p>' + coffee.name + '</p>';
    html += '<p>' + coffee.roast + '</p>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    let searchedCoffee = searchRoast.value
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === 'All'){
            filteredCoffees.push(coffee);
        }
    });
    return tbody.innerHTML = renderCoffees(filteredCoffees);
}
//takes in the user input and only displays coffee name that includes the input
function searchCoffees(e) {
    e.preventDefault();
    var selectedRoast = roastSelection.value;
    let searchedCoffee = searchRoast.value
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if((coffee.name.toLowerCase().includes(searchedCoffee.toLowerCase())) && (selectedRoast==='All' || coffee.roast === selectedRoast)){
        filteredCoffees.push(coffee);
         }
    });
    return tbody.innerHTML = renderCoffees(filteredCoffees);
}
function addCoffee(){
    let coffeeId = {id: coffees.length + 1}
    let coffeeName = {name: userName}
    let userRoast = {roast: userSelection}
    let userCoffee = coffeeId + coffeeName + userRoast
    coffees.push(userCoffee);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
let searchRoast = document.querySelector('#coffee-search')
let userName = document.querySelector('#user-coffee').value
let userSelection = document.querySelector('#user-type').value
let userSubmit = document.querySelector('#add-coffee')


tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
searchRoast.addEventListener('input', searchCoffees);
roastSelection.addEventListener('change', updateCoffees);
roastSelection.addEventListener('change', searchCoffees);
userSubmit.addEventListener('click', addCoffee)
userSubmit.addEventListener('click', updateCoffees)





