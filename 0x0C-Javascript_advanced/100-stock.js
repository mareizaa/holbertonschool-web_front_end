var stock = { macbook: 2, iphone: 4 }

function processPayment(itemName) {
    if (itemName === 'macbook') {
        stock.macbook -= 1;
    }
    else if (itemName === 'iphone') {
        stock.iphone -= 1
    }
    console.log(`Payment is being processed for item ${itemName}`)
}

function processError(itemName) {

    if (itemName === 'macbook') {

        console.log(`No more ${itemName} in stock`)
        console.log('Payment is not being processed')

    }
    else if (itemName === 'iphone') {

        console.log(`No more ${itemName} in stock`)
        console.log('Payment is not being processed')

    }
}

function processOrder(itemName, callbackPayment, callbackError) {
    console.log(`Verifying the stock of ${itemName}`)

    if (stock.macbook > 0 && stock.iphone > 0) {
        processPayment(itemName);
    }
    else {
        processError(itemName);
    }
}

var item = prompt('Please enter the item you would like to purchase (Macbook, iPhone)');

processOrder(item);
