document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const phoneCountElement = getQuantityElement('phone-count')
    const phoneCount = getQuantity('phone-count')
    phoneCountElement.value = phoneCount + 1;

    itemPriceUPdate('phone-price', phoneCountElement, 1219);
    calculateTotal();
})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const phoneCountElement = getQuantityElement('phone-count');
    const phoneCount = getQuantity('phone-count')
    if(phoneCount>0){
        phoneCountElement.value = phoneCount - 1;
    }
    itemPriceUPdate('phone-price', phoneCountElement, 1219);
    calculateTotal();
})