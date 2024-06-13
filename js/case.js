document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseCountElement = getQuantityElement('case-count')
    const caseCount = getQuantity('case-count')
    caseCountElement.value = caseCount + 1;

    itemPriceUPdate('case-price', caseCountElement, 59);
    calculateTotal();
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseCountElement = getQuantityElement('case-count');
    const caseCount = getQuantity('case-count')
    if(caseCount>0){
        caseCountElement.value = caseCount - 1;
    }
    itemPriceUPdate('case-price', caseCountElement, 59);
    calculateTotal();
})