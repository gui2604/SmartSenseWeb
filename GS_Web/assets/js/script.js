alert("Seja Bem Vindo à SmartSense!")

// darkmode
function darkmode() {
    document.body.classList.toggle("darkmode")
}

// data na pagina
var now = new Date();
var formattedDate = "Hoje é " + now.getDate().toString().padStart(2, '0') +
                    " do " + (String(now.getMonth() + 1).padStart(2, '0')) +
                    " de " + now.getFullYear();

var dateTimeElement = document.createElement("div");
dateTimeElement.className = "date-time";
dateTimeElement.textContent = formattedDate;

document.body.appendChild(dateTimeElement);

// carrossel de imagens
var imagens = [
    './assets/images/stock.jpg',
    './assets/images/stock2.jpg',
    './assets/images/stock3.jpg'
];
var Index = 0;
var time = 4000;

function slideShow() {
    document.getElementById('image1').src = imagens[Index];
    Index++;
    if (Index == imagens.length) { Index = 0; }
    setTimeout("slideShow()", time);
}
slideShow();