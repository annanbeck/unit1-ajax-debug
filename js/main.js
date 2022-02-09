//initialize function called when the script loads
function initialize() {
    cities();
};
//function to create a table with cities and their populations
function cities() {
    //This part of the script is creating an array of objects for cities and population.
    var cityPop = [
        {
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];

    //create the table element
    var table = document.createElement("table");

    //create header row
    var headerRow = document.createElement("tr");

    //label the header row
    headerRow.insertAdjacentHTML("beforeend", "<th>City</th><th>Population</th>");

    //add the row to the table
    table.appendChild(headerRow);

    //This loop creates the table
    for (var i = 0; i < cityPop.length; i++) {
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cityPop[i].city; 
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = cityPop[i].population; 
        tr.appendChild(pop);

        table.appendChild(tr);
    };
    //adds the table to the div in index.html
    var mydiv = document.querySelector("#mydiv");
    mydiv.appendChild(table);
    //These add the colums and events functions to cities, which is what is initalized
    addColumns(cityPop);
    addEvents();
};


//this function adds the city size column
function addColumns(cityPop) {
//this is a for each loop for the column
    document.querySelectorAll("tr").forEach(function (row, i) {
//the conditionals here tell it what size to return for sm and md, otherwise large
        if (i == 0) {
//this inserts the header city size
            row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
        } else {

            var citySize;

            if (cityPop[i - 1].population < 100000) {
                citySize = 'Small';

            } else if (cityPop[i - 1].population < 500000) {
                citySize = 'Medium';

            } else {
                citySize = 'Large';
            };
//this tells it to fill the rows with the conditional city sizes
            row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
        };
    });
};



//this adds events, first a mouseover then a clickme
function addEvents() {
    function mouseover() {
//this tells the mouseover function that it will respond to rgb color and to open parenthesis
        var color = "rgb(";
//says to do rgb variation for three numbers
        for (var i = 0; i < 3; i++) {
//tells it to be a random number up to 255, the number of color values in r, g, and b
            var random = Math.round(Math.random() * 255);
//tells us the color is random
            color += random;
//for the r and g colors add commas
            if (i < 2) {
                color += ",";
//for the last color add a closing parenthesis
            } else {
                color += ")";
            };

        };
        //references css to execute random color changes
        document.querySelector("table").style.color = color;
    };
//this is outside the function and tells it to add the mouseover function to the table
    document.querySelector("table").addEventListener("mouseover", mouseover)
//adds clickme function and indicates message
    function clickme() {

        alert('Hey, you clicked me!');
    };
//this is outside the function and tells it to execute the popup if table is clicked
    document.querySelector("table").addEventListener("click", clickme)
};




//calls the initialize function when the window has loaded
document.addEventListener('DOMContentLoaded', initialize) 