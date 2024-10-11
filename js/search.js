function searchProducts() {
    let input = document.getElementById('form1').value.toLowerCase();
    let products = document.getElementsByClassName('product-card');

    for (let i = 0; i < products.length; i++) {
        let productName = products[i].getAttribute('data-name').toLowerCase();
        if (productName.includes(input)) {
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }
}
