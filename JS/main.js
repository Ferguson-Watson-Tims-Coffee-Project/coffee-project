"use strict";

(function (){

//Gives each Coffee their own div and lists the roast along the side of it

function renderCoffee(coffee) {
    var html = '<div class="coffee d-flex justify-content-between col-5 border rounded-3 p-1 bg-transparent my-2" style="color: white">';
    html += '<p class="fw-bold me-2 mb-0" style="font-size:2vw">' + coffee.name + '</p>';
    html += '<p class="fs-4vw fw-light pt-3 mb-0" style="color: chocolate">' + coffee.roast + '</p>';
    html += '</div>'

    return html;
}

//renders the coffees onto the page

function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// updates which coffees should be shown

function updateCoffees(e) {
    e.preventDefault();
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === 'All') {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
    var tbody = document.querySelector('#coffees');

//updates the displayed Coffee(s) depending on the roast and search box input

    var roastSelection = document.querySelector('#roast-selection');
    roastSelection.addEventListener('change', updateCoffees);
    roastSelection.addEventListener('change', searchCoffees);

    let searchRoast = document.querySelector('#coffee-search');
    searchRoast.addEventListener('input', searchCoffees);

//takes in the user input and only displays coffee name that includes the input under selected roast

function searchCoffees(e) {
    e.preventDefault();
    var selectedRoast = roastSelection.value;
    let searchedCoffee = searchRoast.value;
    let filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if ((coffee.name.toLowerCase().includes(searchedCoffee.toLowerCase())) && (selectedRoast === 'All' || coffee.roast === selectedRoast)) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

//adds a new coffee to the Coffees array

function addCoffee() {
    let coffeeId = coffees.length + 1
    let userCoffee = {id: coffeeId, name: userCoffeeName.value, roast: userRoastSelection.value}
    coffees.push(userCoffee);
    tbody.innerHTML = renderCoffees(coffees);
}

    let userCoffeeName = document.querySelector('#user-coffee-name');
    let userRoastSelection = document.querySelector('#user-roast-type');

// Code to Add Coffee to Coffee List

let userCoffeeSubmit = document.querySelector('#add-coffee');
userCoffeeSubmit.addEventListener('click', addCoffee);
userCoffeeSubmit.addEventListener('click', searchCoffees);

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

var submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', updateCoffees);

tbody.innerHTML = renderCoffees(coffees);




})();
