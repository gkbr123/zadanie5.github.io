
"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("calculator-form");
    var product = document.getElementById("product");
    var quantity = document.getElementById("quantity");
    var error = document.getElementById("quantity-error");
    var result = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var quantityText = quantity.value.trim();
        var quantityPattern = /^[1-9][0-9]*$/;

        error.textContent = "";
        result.textContent = "";

        if (!quantityPattern.test(quantityText)) {
            error.textContent =
                "Ошибка: введите целое положительное число.";
            quantity.focus();
            return;
        }

        var amount = parseInt(quantityText, 10);
        var price = parseInt(product.value, 10);
        var total = amount * price;

        result.textContent =
            "Стоимость заказа: " + total + " руб.";
    });
});
```
