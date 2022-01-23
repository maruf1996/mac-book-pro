// calculate function 
function getProductPrice(product,price){
    const productCost=document.getElementById(product+'_price');
    const productPrice=productCost.innerText=price;
    const productPriceNumber=parseInt(productPrice);
    return productPriceNumber;
}

// update total balence 
function updateTotalBalence(){
    const bestPrice=document.getElementById('best_price');
    const bestPriceNumber=parseInt(bestPrice.innerText);
    const memoryPrice=document.getElementById('memory_price');
    const memoryPriceNumber=parseInt(memoryPrice.innerText);
    const storagePrice=document.getElementById('storage_price');
    const storagePriceNumber=parseInt(storagePrice.innerText);
    const deliveryPrice=document.getElementById('delivery_price');
    const deliveryPriceNumber=parseInt(deliveryPrice.innerText);


    const totalPrice=document.getElementById('total_price');
    const total=totalPrice.innerText=bestPriceNumber+memoryPriceNumber+storagePriceNumber+deliveryPriceNumber;

    const allTotalPrice=document.getElementById('in_total_price');
    allTotalPrice.innerText=total;

    return total;
}

// add memory btn price 
document.getElementById('memory_eight_gb').addEventListener('click',function(){
    // const memoryEight=document.getElementById('memory_price');
    // memoryEight.innerText=0;
    getProductPrice('memory',0);
    updateTotalBalence();
    
});
document.getElementById('memory_sixteen_gb').addEventListener('click',function(){
    // const memorySixteen=document.getElementById('memory_price');
    // memorySixteen.innerText=180;
    getProductPrice('memory',180);
    updateTotalBalence();
});


// add storage btn price 
document.getElementById('storage_256gb').addEventListener('click',function(){
    // const storage256gb=document.getElementById('storage_price');
    // storage256gb.innerText=0;
    getProductPrice('storage',0);
    updateTotalBalence();
});
document.getElementById('storage_512gb').addEventListener('click',function(){
    // const storage_512gb=document.getElementById('storage_price');
    // storage_512gb.innerText=100;
    getProductPrice('storage',100);
    updateTotalBalence();
});
document.getElementById('storage_1tb').addEventListener('click',function(){
    // const storage_1tb=document.getElementById('storage_price');
    // storage_1tb.innerText=180;
    getProductPrice('storage',180);
    updateTotalBalence();
});

// add delivery charge 
document.getElementById('aug_25').addEventListener('click',function(){
    // const aug_25=document.getElementById('delivery_price');
    // aug_25.innerText=0;
    getProductPrice('delivery',0);
    updateTotalBalence();
});
document.getElementById('aug_21').addEventListener('click',function(){
    // const aug_21=document.getElementById('delivery_price');
    // aug_21.innerText=20;
    getProductPrice('delivery',20);
    updateTotalBalence();
});


// promo Code Discount part 

document.getElementById('promo_discount_btn').addEventListener('click', function(){
    const promoDiscountInput=document.getElementById('promo_discount_input');
    const promoDiscountCode=promoDiscountInput.value;
    if(promoDiscountCode=='stevekaku'){
        var allTotalPrice=document.getElementById('in_total_price');
        var discount=parseFloat((updateTotalBalence()/100)*20);
        allTotalPrice.innerText=updateTotalBalence()-discount;
    }
    else{
        const allTotalPrice=document.getElementById('in_total_price');
        allTotalPrice.innerText=updateTotalBalence();
    }
    promoDiscountInput.value='';

});