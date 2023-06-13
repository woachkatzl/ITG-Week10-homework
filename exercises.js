// Практическое задание 2

function iLearnJS() {
    console.log("Я учу JavaScript!");
}

iLearnJS();

// Практическое задание 3

const image = document.getElementById("image");

function nextImage() {
    image.src = "assets/moon-moon2.jpg";
}

function prevImage() {
    image.src = "assets/moon-moon1.jpg";
}

// Задание под звёздочкой

function calculateTotalPrice(quantity = 2, price = 15000000) {
    const result = quantity * price;
    const totalPrice = result.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
    alert(`Стоимость покупки: ${totalPrice} рублей`);
}

function calculateTotalPriceOnPage(quantity = 2, price = 15000000) {
    const result = quantity * price;
    const totalPrice = result.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
    let message = document.getElementById("total-price");
    message.innerHTML = `Стоимость покупки: ${totalPrice} рублей`;
}