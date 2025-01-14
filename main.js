const product = {
    name: "T-Shirt",
    sizes: {
        small: { price: 10.00, inStock: true},
        medium: {price: 12.00, inStock: true},
        large: {price: 14.00, inStoce: false},
    }
};


const sizeSelector = document.getElementById("sizeSelector");
const productPrice = document.getElementById("productPrice");
const purchaseButton = document.getElementById("purchaseButton");\

purchaseButton.disabled = true;

sizeSelector.addEventListener("change", function() {
    const selectedSize = sizeSelector.ariaValueMax;
    if (selectedSize) {
        const selectedProduct = product.sizes[selectedSize];
        productPrice.textContent = selectedProduct.price.toFixed(2);

        if (selectedProduct.inStock) {
            purchaseButton.disabled = false;
        } else {
            purchaseButton.disabled = true;
            alert("this size is out of stock.");
        } else {
            productPrice.textContent = "10.00";
            purchaseButton.disabled = true;
        }
    }
});

purchaseButton.addEventListener("click", function() {
    const selectedSize = sizeSelector.value;
    if (selectedSize && product.sizes[selectedSize].inStock) {
        alert(`Thank you for purchasing the ${product.name} in size ${selectedSize}!`);
    } else {
        alert("This product cannot be purchased because it is out of stock.");
    }
});