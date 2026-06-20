// Cart Count
let cart = 0;

const buttons = document.querySelectorAll(".card button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        cart++;

        button.innerText = "✅ Added";
        button.disabled = true;

        alert("HP 128GB Pendrive added to cart!");
    });
});

// Search
const search = document.getElementById("search");

search.addEventListener("keyup", function () {
    let value = this.value.toLowerCase();

    document.querySelectorAll(".card").forEach((card) => {
        let name = card.querySelector("h3").innerText.toLowerCase();

        if (name.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Buy Now
function buyNow() {

    const name = prompt("Enter Your Name");
    const phone = prompt("Enter Mobile Number");
    const address = prompt("Enter Full Address");
    const pincode = prompt("Enter Pincode");

    const message =
`🛒 New Order - Happyyy Customer

Product : HP 128GB Pendrive
Price : ₹499

Name : ${name}
Phone : ${phone}
Address : ${address}
Pincode : ${pincode}

Payment : Cash On Delivery`;

    const whatsapp =
`https://wa.me/919344475087?text=${encodeURIComponent(message)}`;

    window.open(whatsapp, "_blank");
}
