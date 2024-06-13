let currentIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

showSlide(currentIndex);




let form = document.forms["contact"];

form.addEventListener("submit", openSubmitModal);

function openSubmitModal(event) {
    event.preventDefault();
    var mySubmitModal = new bootstrap.Modal(document.getElementById('submitModal'), {
        keyboard: false
    });
    mySubmitModal.show();
}


let totalMarsCost = 0;
let totalNeptuneCost = 0;
let totalJupiterCost = 0;
let totalSaturnCost = 0;
let totalUranusCost = 0;
let totalMoonCost = 0;
let totalCost = 0;


function decreasesMars(){
    if(document.getElementById('marsTickets').value != 0){
        document.getElementById('marsTickets').value = parseInt(document.getElementById('marsTickets').value) - 1;
    }else{
        document.getElementById('marsTickets').value = 0;
    }
}

function increasesMars(){
    document.getElementById('marsTickets').value = parseInt(document.getElementById('marsTickets').value) + 1;
}

function decreasesNeptune(){
    if(document.getElementById('neptuneTickets').value != 0){
        document.getElementById('neptuneTickets').value = parseInt(document.getElementById('neptuneTickets').value) - 1;
    }else{
        document.getElementById('neptuneTickets').value = 0;
    }
}

function increasesNeptune(){
    document.getElementById('neptuneTickets').value = parseInt(document.getElementById('neptuneTickets').value) + 1;
}

function decreasesJupiter(){
    if(document.getElementById('jupiterTickets').value != 0){
        document.getElementById('jupiterTickets').value = parseInt(document.getElementById('jupiterTickets').value) - 1;
    }else{
        document.getElementById('jupiterTickets').value = 0;
    }
}

function increasesJupiter(){
    document.getElementById('jupiterTickets').value = parseInt(document.getElementById('jupiterTickets').value) + 1;
}

function decreasesSaturn(){
    if(document.getElementById('saturnTickets').value != 0){
        document.getElementById('saturnTickets').value = parseInt(document.getElementById('saturnTickets').value) - 1;
    }else{
        document.getElementById('saturnTickets').value = 0;
    }
}

function increasesSaturn(){
    document.getElementById('saturnTickets').value = parseInt(document.getElementById('saturnTickets').value) + 1;
}

function decreasesUranus(){
    if(document.getElementById('uranusTickets').value != 0){
        document.getElementById('uranusTickets').value = parseInt(document.getElementById('uranusTickets').value) - 1;
    }else{
        document.getElementById('uranusTickets').value = 0;
    }
}

function increasesUranus(){
    document.getElementById('uranusTickets').value = parseInt(document.getElementById('uranusTickets').value) + 1;
}

function decreasesMoon(){
    if(document.getElementById('moonTickets').value != 0){
        document.getElementById('moonTickets').value = parseInt(document.getElementById('moonTickets').value) - 1;
    }else{
        document.getElementById('moonTickets').value = 0;
    }
}

function increasesMoon(){
    document.getElementById('moonTickets').value = parseInt(document.getElementById('moonTickets').value) + 1;
}




function total(){
    totalMarsCost = parseInt(document.getElementById('marsTickets').value) * 50000;
    totalNeptuneCost = parseInt(document.getElementById('neptuneTickets').value) * 45000;
    totalJupiterCost = parseInt(document.getElementById('jupiterTickets').value) * 65000;
    totalSaturnCost = parseInt(document.getElementById('saturnTickets').value) * 40000;
    totalUranusCost = parseInt(document.getElementById('uranusTickets').value) * 50000;
    totalMoonCost = parseInt(document.getElementById('moonTickets').value) * 15000;
    totalCost = totalMarsCost + totalNeptuneCost + totalJupiterCost + totalSaturnCost + totalUranusCost + totalMoonCost;

   
    const modalBody = document.getElementById('cartModalBody');

  
    modalBody.innerHTML = `
        <div>
            <p>Mars: <span>${totalMarsCost}</span></p>
            <input type="UpButton" id="marsModalInput" value="${parseInt(document.getElementById('marsTickets').value)}" min="0" max="30" onchange="updateTicketInput('mars', this.value)">
        </div>
        
        <div>
            <p>Neptune: <span>${totalNeptuneCost}</span></p>
            <input type="UpButton" id="neptuneModalInput" value="${parseInt(document.getElementById('neptuneTickets').value)}" min="0" max="30" onchange="updateTicketInput('neptune', this.value)">
        </div>
       
        <div>
            <p>Jupiter: <span>${totalJupiterCost}</span></p>
            <input type="UpButton" id="jupiterModalInput" value="${parseInt(document.getElementById('jupiterTickets').value)}" min="0" max="30" onchange="updateTicketInput('jupiter', this.value)">
        </div>
        
        <div>
            <p>Saturn: <span>${totalSaturnCost}</span></p>
            <input type="UpButton" id="saturnModalInput" value="${parseInt(document.getElementById('saturnTickets').value)}" min="0" max="30" onchange="updateTicketInput('saturn', this.value)">
        </div>
       
        <div>
            <p>Uranus: <span>${totalUranusCost}</span></p>
            <input type="UpButton" id="uranusModalInput" value="${parseInt(document.getElementById('uranusTickets').value)}" min="0" max="30" onchange="updateTicketInput('uranus', this.value)">
        </div>
        
        <div>
            <p>Moon: <span>${totalMoonCost}</span></p>
            <input type="UpButton" id="moonModalInput" value="${parseInt(document.getElementById('moonTickets').value)}" min="0" max="30" onchange="updateTicketInput('moon', this.value)">
        </div>
        
        <div><p>Total: R ${totalCost}</p></div>
    `;
}


function updateModalInputs() {
    document.getElementById('marsModalInput').value = parseInt(document.getElementById('marsTickets').value);
    document.getElementById('neptuneModalInput').value = parseInt(document.getElementById('neptuneTickets').value);
    document.getElementById('jupiterModalInput').value = parseInt(document.getElementById('jupiterTickets').value);
    document.getElementById('saturnModalInput').value = parseInt(document.getElementById('saturnTickets').value);
    document.getElementById('uranusModalInput').value = parseInt(document.getElementById('uranusTickets').value);
    document.getElementById('moonModalInput').value = parseInt(document.getElementById('moonTickets').value);
    total();
}


function updateTicketInput(planet, value) {
    document.getElementById(`${planet}Tickets`).value = value;
    total();
}



function openCartModal() {
    total();
    var myCartModal = new bootstrap.Modal(document.getElementById('cartModal'), {
        keyboard: false
    });
    myCartModal.show();
}


function checkout() {
    window.location.href = "../index.html";
}


