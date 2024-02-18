const seats = document.getElementsByClassName('seat');
let selectedSeats = 0;

for (let seat of seats) {
    seat.addEventListener('click', function () {
        selectedSeats += 1;

        if (selectedSeats <= 4) {
            let totalSeats = document.getElementById('total-seats').innerText;
            totalSeats = parseInt(totalSeats);

            totalSeats -= 1;
            document.getElementById('total-seats').innerText = totalSeats;

            seat.classList.add('bg-green-500');


            purchaseSeat = document.getElementById('purchase-seat');
            purchaseSeat.innerText = selectedSeats;

            let purchaseTicketList = document.getElementById('purchase-ticket-list');
            let div = document.createElement('div');
            let div2 = document.createElement('div');
            let div3 = document.createElement('div');
            div2.innerText = "Economy";
            div3.innerText = "BDT 550";

            div.innerText = seat.innerText
            purchaseTicketList.appendChild(div);
            purchaseTicketList.appendChild(div2);
            purchaseTicketList.appendChild(div3);

            // total price
            let totalPrice = document.getElementById('total-price').innerText;
            totalPrice = parseInt(totalPrice);
            totalPrice += 550;
            document.getElementById('total-price').innerText = totalPrice;

            // if sleceted seats is more than 1 and phone number is not empty then active next button
            let phoneNumber = document.getElementById('phone-number').value;
            if ( phoneNumber !== "" && selectedSeats > 0 && phoneNumber !== "") {
                document.getElementById('next-button').classList.remove('cursor-not-allowed');
                document.getElementById('next-button').removeAttribute('disabled', 'disabled');
            }

            // add coupone
            if (selectedSeats === 4) {
                const couponButton = document.getElementById('coupon-button');

                couponButton.addEventListener('click', function () {
                    // "NEW15" 15 percent discount
                    let coupon = document.getElementById('coupon').value;
                    if (coupon === "NEW15") {
                        let grandTotal = document.getElementById('grand-total').innerText;
                        grandTotal = parseInt(grandTotal);
                        grandTotal = grandTotal - (grandTotal * 0.15);
                        document.getElementById('grand-total').innerText = grandTotal;

                        let couponContainer = document.getElementById('coupon-container');
                        couponContainer.classList.add('hidden');

                        // couple 20
                    } else if (coupon === "Couple 20") {
                        let grandTotal = document.getElementById('grand-total').innerText;
                        grandTotal = parseInt(grandTotal);
                        grandTotal = grandTotal - (grandTotal * 0.20);
                        document.getElementById('grand-total').innerText = grandTotal;

                        let couponContainer = document.getElementById('coupon-container');
                        couponContainer.classList.add('hidden');
                    } else {
                        alert('Invalid Coupon');
                    }
                });
            }


            // grand total
            let grandTotal = document.getElementById('grand-total').innerText;
            grandTotal = parseInt(grandTotal);
            grandTotal = totalPrice;
            document.getElementById('grand-total').innerText = grandTotal;

        }

    });
}
