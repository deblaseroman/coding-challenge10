const sizeSelector = document.getElementById("sizeSelector");
const productPrice = document.getElementById("productPrice");
const purchaseButton = document.getElementById("purchaseButton");

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
}