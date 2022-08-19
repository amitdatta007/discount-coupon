const productPriceString = document.getElementById('product-price');
const productPrice = parseFloat(productPriceString.innerText);
document.getElementById('apply-btn').addEventListener('click', function(){
    const couponField = document.getElementById('coupon-field');
    const couponCode = couponField.value;
    if(couponCode === 'get30'){
        const discout = (productPrice / 100) * 30;
        const newPrice = productPrice - discout;
        couponField.value = '';
        const discoutField = document.getElementById('discount-field');
        discoutField.innerText = discout;
        const totalField = document.getElementById('total-amount');
        totalField.innerText = newPrice;
    }else{
        const errorArea = document.getElementById('error-msg');
        errorArea.innerText = 'Coupon not found..!';
        setTimeout(() => {
            errorArea.innerText = '';
        }, 4000);
    }
});
