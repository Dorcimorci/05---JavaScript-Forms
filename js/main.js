function calculatePrice() {
    const amountInput = document.querySelector("#amount-input");
    const amount = amountInput.value;
    const hamburgerPrice = 1200;
    const priceOutputElement = document.querySelector(".price-output");
    console.log(priceOutputElement);
    const price = amount * hamburgerPrice;
    priceOutputElement.innerHTML = price;
}

let isContentDisplayed = false;
function toggleShowContentBtn() {
    isContentDisplayed = !isContentDisplayed;

    const showContentBtn = document.querySelector("#showContentBtn");
    const contentDiv = document.querySelector("#content-div");
    const content =
        "<h1>Ez egy rejtett tartalom</h1><p>Itt meg egy kamu szöveg van benne. Huhuuu!!</p>";

    if (isContentDisplayed) {
        showContentBtn.innerHTML = "Rejtsd el a tartalmat";
        contentDiv.innerHTML = content;
    } else {
        showContentBtn.innerHTML = "Mutasd a tartalmat";
        contentDiv.innerHTML = "";
    }
}
