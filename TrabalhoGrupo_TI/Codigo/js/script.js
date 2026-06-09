//Mudar a cor do elemento ao clicar

var sumariosprint = document.getElementById("sumsprint");

sumariosprint.addEventListener("click", function() {
    if (sumariosprint.style.color == "red") {
        sumariosprint.style.color = "black";
    }
    else {
        sumariosprint.style.color = "red";
    }
})

var sumariomeiofundo = document.getElementById("summeiofundo");

sumariomeiofundo.addEventListener("click", function() {
    if (sumariomeiofundo.style.color == "yellow") {
        sumariomeiofundo.style.color = "black";
    }
    else {
        sumariomeiofundo.style.color = "yellow";
    }
})

var sumariofundo = document.getElementById("sumfundo");

sumariofundo.addEventListener("click", function() {
    if (sumariofundo.style.color == "green") {
        sumariofundo.style.color = "black";
    }
    else {
        sumariofundo.style.color = "green";
    }
})

var sumarioobstaculos = document.getElementById("sumobstaculos");

sumarioobstaculos.addEventListener("click", function() {
    if (sumarioobstaculos.style.color == "blue") {
        sumarioobstaculos.style.color = "black";
    }
    else {
        sumarioobstaculos.style.color = "blue";
    }
})




