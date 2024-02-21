const allTicketSeats = document.querySelectorAll('.ticket-seat');

allTicketSeats.forEach(ticketSeat => {
  ticketSeat.addEventListener('click', function (event) {
    const seatBtn = ticketSeat.querySelector('.add-btn');

    if (seatBtn.disabled) {
      alert('This seat is already selected.');
      return;
    }

    const Seat = seatBtn.innerText;
    const Class = seatBtn.nextElementSibling.innerText;
    const Price = seatBtn.nextElementSibling.nextElementSibling.innerText;
    const selectedContainer = document.getElementById('Selected-ticket-container');

    if (getValueById('selected-seat') + 1 > 4) {
      alert('You can select only 4 seats');
      return;
    }

    seatBtn.disabled = true;
    seatBtn.parentElement.style.backgroundColor = '#1DD100';
    seatBtn.parentElement.style.color = 'white';

    const div = document.createElement("div");
    div.classList.add("click");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = Seat;
    p2.innerText = Class;
    p3.innerText = Price;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    selectedContainer.appendChild(div);

    updateTotalSeat(Price);
    updateGrandTotal();
    updateLeftSeat();
    updateSelectedSeat();
  });
});

function updateTotalSeat(price) {
  const previousTotal = document.getElementById('total-price').innerText;
  const convertedTotal = parseInt(previousTotal);
  const convertedPrice = parseInt(price);
  const sum = convertedTotal + convertedPrice;
  document.getElementById('total-price').innerText = sum;
}

function updateGrandTotal() {
  const previousTotal = document.getElementById('total-price').innerText;
  const convertedTotal = parseInt(previousTotal);
  const couponCode = document.getElementById('coupon-code').value;

  if (couponCode === 'NEW15') {
    const discount = convertedTotal * 0.15;
    document.getElementById('grand-total').innerText = convertedTotal - discount;
  } else if (couponCode === 'Couple 20') {
    const discount = convertedTotal * 0.2;
    document.getElementById('grand-total').innerText = convertedTotal - discount;
  } else {
    document.getElementById('grand-total').innerText = convertedTotal;
  }
}

function updateLeftSeat() {
  const defaultLeft = document.getElementById('left-seat').innerText;
  const convertDefaultLeft = parseInt(defaultLeft);
  document.getElementById('left-seat').innerText = convertDefaultLeft - 1;
}

function updateSelectedSeat() {
  const defaultCartCount = document.getElementById('selected-seat').innerText;
  const convertDefaultCartCount = parseInt(defaultCartCount);
  document.getElementById('selected-seat').innerText = convertDefaultCartCount + 1;
}

function getValueById(id) {
  const targetElement = document.getElementById(id).innerText;
  return parseInt(targetElement);
}

function scrollToPoribohon() {
  const poribohonSection = document.getElementById('poribohon');
  poribohonSection.scrollIntoView({ behavior: 'smooth' });
}

const ticketContainer = document.querySelector('.ticket-container');
ticketContainer.addEventListener('click', function (event) {
  const seatBtn = event.target.closest('.add-btn');
  if (seatBtn) {
    handleSeatSelection(event);
  }
});

const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function () {
  updateGrandTotal();
});

const buyTicketsBtn = document.querySelector('.buy');
buyTicketsBtn.addEventListener('click', function () {
  scrollToPoribohon();
});
document.getElementById('next-button').addEventListener('click', function () {
  var modal = document.getElementById('my_modal_1');
  if (modal) {
    modal.showModal();
  }
});


document.getElementById('next-button').addEventListener('click', function () {
  openModal();
});



document.getElementById('next-button').addEventListener('click', function () {
  validateAndOpenModal();
});


document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.querySelector('input[name="name"]');
  const phoneInput = document.querySelector('input[name="phone"]');
  const emailInput = document.querySelector('input[name="email"]');
  const nextButton = document.getElementById('next-button');

  function areInputsFilled() {
    return nameInput.value.trim() !== '' && phoneInput.value.trim() !== '' && emailInput.value.trim() !== '';
  }

  function toggleNextButton() {
    nextButton.disabled = !areInputsFilled();
  }
  nameInput.addEventListener('input', toggleNextButton);
  phoneInput.addEventListener('input', toggleNextButton);
  emailInput.addEventListener('input', toggleNextButton);
  toggleNextButton();
});
