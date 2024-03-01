function calculateTotal() {
    // Get the quantity inputs
    var qty1 = parseInt(document.getElementById('qty1').value);
    var qty2 = parseInt(document.getElementById('qty2').value);
    var qty3 = parseInt(document.getElementById('qty3').value);
    var qty4 = parseInt(document.getElementById('qty4').value);
    var qty5 = parseInt(document.getElementById('qty5').value);
    var qty7 = parseInt(document.getElementById('qty7').value);
    var qty8 = parseInt(document.getElementById('qty8').value);
    var qty9 = parseInt(document.getElementById('qty9').value);

    // Calculate total price
    var totalPrice = (qty1 * 4.99) + (qty2 * 7.99) + (qty3 * 7.99) + (qty4 * 7.99) + (qty5 * 7.99) + (qty7 * 29.99) + (qty8 * 39.99) + (qty9 * 39.99);

    // Display total price
    document.getElementById('totalPrice').textContent = "$" + totalPrice.toFixed(2);
}