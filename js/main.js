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
            console.log(div);
            purchaseTicketList.appendChild(div);
            purchaseTicketList.appendChild(div2);
            purchaseTicketList.appendChild(div3);
        }


    });
}

console.log(selectedSeats);
