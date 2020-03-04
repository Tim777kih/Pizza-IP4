

var pizza_prices = new Array();
pizza_prices['Large'] = 1200;
pizza_prices['Medium'] = 800;
pizza_prices['Small'] = 500;

//get Price of the pizza according to the size of pizza
// The user selects using the radio buttons

function getPizzaSizePrice() {
    var PizzaSizePrice = 0;
    var theForm = document.forms['pizzaform'];
    var selectedPizza = theForm.elements["selectedpizza"];
    for (var i = 0; i < selectedPizza.length; i++) {
        if (selectedPizza[i].checked) {
            PizzaSizePrice = pizza_prices[selectedPizza[i].value];
        };
    };
    return PizzaSizePrice;


};

//// getting the price of the toppings

var toppings_prices = new Array();
toppings_prices['none'] = 0;
toppings_prices['sausage'] = 150;
toppings_prices['peperoni'] = 100;
toppings_prices['bbq'] = 200;
toppings_prices['corn'] = 100;
toppings_prices['hawaiian'] = 100;
toppings_prices['spinach'] = 150;
toppings_prices['spinach2'] = 90;
toppings_prices['goatcheese'] = 105;
toppings_prices['onion'] = 100;
toppings_prices['brie'] = 80;
toppings_prices['brussels'] = 70;
toppings_prices['kale'] = 120;

///Depending on the selection on the dropdown

function getToppingsPrize() {
    var pizzaToppingPrice = 0;
    var theForm = document.forms['pizzaform'];
    var selecedToppings = theForm.elements['toppings'];

    pizzaToppingPrice = toppings_prices[selecedToppings.value];

    return getToppingsPrize;
}

var crust_prices = new Array();
crust_prices['none'] = 0;
crust_prices['crust1'] = 100;
crust_prices['crust2'] = 150;
crust_prices['crust3'] = 100;
crust_prices['crust4'] = 200;

///Depending on the crust

function getCrustPrice() {

    var pizzaCrustPrice = 0;
    var theForm = document.forms['pizzaform'];
    var selectedCrust = theForm.elements['toppings']

    pizzaCrustPrice = crust_prices[selectedCrust];
    console.log(selectedCrust)
    return getCrustPrice;
}




/// Function for the quantity ordered

function getQuantity() {
    var theForm = document.Forms['pizzaform'];
    var quantity = theForm.elements['quantity'];
    var howmany = 0;

    ///if the textbox is not empty

    if (quantity.value != "") {
        howmany = parseInt(quantity.value);
    }
    return howmany;
}


//// Getting the totals

function calculateTotal() {
    var pizzaPrice = getCrustPrice() + getPizzaSizePrice() + getToppingsPrize()
    console.log("crust:", getCrustPrice())
    console.log("price", getPizzaSizePrice())

    //display the result

    document.getElementById('.checkout').innerHTML =  pizzaPrice;
}




