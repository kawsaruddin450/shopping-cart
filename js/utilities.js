function getQuantityElement(id){
    const quantityElement = document.getElementById(id);
    return quantityElement;
}
function getQuantity(id){
    const quantityElement = getQuantityElement(id);
    const quantity = parseInt(quantityElement.value);
    return quantity;
}

function itemPriceUPdate(id, itemCountElement, price){
    const casePriceElement = document.getElementById(id);
    casePriceElement.innerText = price*itemCountElement.value;
}

function calculateTotal(){
    const subtotalElement = document.getElementById('subtotal');
    subtotalElement.innerText = parseInt(document.getElementById('case-price').innerText) + parseInt(document.getElementById('phone-price').innerText);

    const vatElement = document.getElementById('vat');
    vatElement.innerText = (parseInt(subtotalElement.innerText)*0.1).toFixed(2);

    const totalElement = document.getElementById('total');
    totalElement.innerText = parseFloat(subtotalElement.innerText) + parseFloat(vatElement.innerText);
}

calculateTotal();
