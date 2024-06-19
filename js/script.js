
var dificuldade = localStorage.getItem("dificuldade");
var num = Math.round(Math.random()*dificuldade);
var qntCaracteres = 1;
var numChances = 5;
var numMostrar;

if(num >= 1000){
    qntCaracteres = 4;
    var milesimo = Math.trunc(num / 1000);
    var centena = Math.trunc((num - (milesimo * 1000))/100);
    var dezena = Math.trunc((num - ((milesimo * 1000) + (centena * 100)))/10);
    var unidade = num - ((milesimo * 1000) + (centena * 100) + (dezena * 10));
    var restoDoMil = num % 1000;
    var isMil = false;
    if(restoDoMil == 0){
        isMil = true;
        qntCaracteres = 2;
    }
}else if(num >= 100){
    qntCaracteres = 3;
    var centena = Math.trunc(num / 100);
    var dezena = Math.trunc((num - (centena * 100))/10);
    var unidade = num - ((centena * 100) + (dezena * 10));
}else if(num >= 10){
    qntCaracteres = 2;
    var dezena = Math.trunc(num / 10);
    var unidade = num - (dezena * 10);
}

for (let index = 0; index < qntCaracteres; index++) {
    if(qntCaracteres == 1){
        numMostrar = num;
    }else if(qntCaracteres == 2) {
        if(isMil){
            if(index == 0){
                numMostrar = milesimo;
            }else{
                numMostrar = 1000;
            }
        }else{
            if(index == 0){
                numMostrar = dezena;
            }else{
                numMostrar = unidade;
            }
        }
    }else if(qntCaracteres == 3){
        if(index == 0){
            numMostrar = centena;
        }else if(index == 1){
            numMostrar = dezena;
        }else{
            numMostrar = unidade;
        }
    }else if(qntCaracteres == 4){
        if(index == 0){
            numMostrar = milesimo;
        }else if(index == 1){
            numMostrar = centena;
        }else if(index == 2){
            numMostrar = dezena;
        }else{
            numMostrar = unidade;
        }
    }
    switch (numMostrar) {
        case 0:
            var divNum = document.createElement("div");
            divNum.innerHTML = "<img id='imgNum' src='../images/NumeroZero.jpg'>";
            document.getElementById("divNumero").appendChild(divNum);
            break;
        case 1:
            var divNum = document.createElement("div");
            divNum.innerHTML = "<img id='imgNum' src='../images/NumeroUm.jpg'>";
            document.getElementById("divNumero").appendChild(divNum);
            break;
        case 2:
            var divNum = document.createElement("div");
            divNum.innerHTML = "<img id='imgNum' src='../images/NumeroDois.jpg'>";
            document.getElementById("divNumero").appendChild(divNum);
            break;
        case 3:
            var divNum = document.createElement("div");
            divNum.innerHTML = "<img id='imgNum' src='../images/NumeroTres.jpg'>";
            document.getElementById("divNumero").appendChild(divNum);
            break;
        case 4:
            var divNum = document.createElement("div");
            divNum.innerHTML = "<img id='imgNum' src='../images/NumeroQuatro.jpg'>";
            document.getElementById("divNumero").appendChild(divNum);
            break;
        case 5:
            var divNum = document.createElement("div");
            divNum.innerHTML = "<img id='imgNum' src='../images/NumeroCinco.jpg'>";
            document.getElementById("divNumero").appendChild(divNum);
            break;
        case 6:
            var divNum = document.createElement("div");
            divNum.innerHTML = "<img id='imgNum' src='../images/NumeroSeis.jpg'>";
            document.getElementById("divNumero").appendChild(divNum);
            break;
        case 7:
            var divNum = document.createElement("div");
            divNum.innerHTML = "<img id='imgNum' src='../images/NumeroSete.jpg'>";
            document.getElementById("divNumero").appendChild(divNum);
            break;
        case 8:
            var divNum = document.createElement("div");
            divNum.innerHTML = "<img id='imgNum' src='../images/NumeroOito.jpg'>";
            document.getElementById("divNumero").appendChild(divNum);
            break;
        case 9:
            var divNum = document.createElement("div");
            divNum.innerHTML = "<img id='imgNum' src='../images/NumeroNove.jpg'>";
            document.getElementById("divNumero").appendChild(divNum);
            break;
        case 1000:
            var divNum = document.createElement("div");
            divNum.innerHTML = "<img id='imgNum' src='../images/NumeroMil.png'>";
            document.getElementById("divNumero").appendChild(divNum);
            break;
        default:
            break;
    }
}

var divTentativas = document.getElementById("divTentativas");
var textResult = document.getElementById("result");
var textChances = document.getElementById("chancesRestantes");
textChances.innerText = "Chances Restantes: " + numChances;
var inputNum = document.getElementById('inputNum');
var desistiu = false;

var form = document.getElementById('formChute');
form.addEventListener('submit', function(e) {
    verificaNum(inputNum.value);
    e.preventDefault();
});

function verificaNum(numero){
    var numMaior;
    if(num > numero){
        numMaior = true;
    }else{
        numMenor = false;
    }

    if(desistiu){
        textResult.innerText = "Desistiu!";
        textChances.parentElement.removeChild(textChances);
        form.parentElement.removeChild(form);
        textResult.innerText = "Você desistiu, número certo é: " + num;
        document.getElementById("btnRestart").innerHTML = "<a href='jogo.html'><button>Tentar Novamente</button></a><a href='../index.html'><button id='btnVoltar'>Trocar Dificuldade</button></a>";
    }else if(num == numero){
        var novaDiv = document.createElement("div");
        novaDiv.innerHTML = "<div id='tentativa' style='padding-right: 10px;'><img src='../images/CertoIcone.png' id='iconeTentativa'><div id='numTentativa'><p>" + numero + "</p></div><img src='../images/CertoIcone.png' id='iconeTentativaCerto'></div>";
        document.getElementById("divTentativas").appendChild(novaDiv);
        textChances.parentElement.removeChild(textChances);
        form.parentElement.removeChild(form);
        textResult.innerText = "Acertou! O Número realmente é o " + num + "!!!";
        document.getElementById("btnRestart").innerHTML = "<a href='jogo.html'><button>Jogar Novamente</button></a><a href='../index.html'><button id='btnVoltar'>Trocar Dificuldade</button></a>";
    }else{
        var novaDiv = document.createElement("div");
        if(numMaior){
            novaDiv.innerHTML = "<div id='tentativa'><img src='../images/ErradoIcone.png' id='iconeTentativa'><div id='numTentativa'><p>" + numero + "</p></div><img src='../images/Maior.png' id='iconeTentativa'></div>";
        }else{
            novaDiv.innerHTML = "<div id='tentativa'><img src='../images/ErradoIcone.png' id='iconeTentativa'><div id='numTentativa'><p>" + numero + "</p></div><img src='../images/Menor.png' id='iconeTentativa'></div>";
        }
        document.getElementById("divTentativas").appendChild(novaDiv);
        textResult.innerText = "Errou!";
        if(numChances <= 1){
            textChances.parentElement.removeChild(textChances);
            form.parentElement.removeChild(form);
            textResult.innerText = "Acabaram as chances, você perdeu, número certo é: " + num;
            document.getElementById("btnRestart").innerHTML = "<a href='jogo.html'><button>Tentar Novamente</button></a><a href='../index.html'><button id='btnVoltar'>Trocar Dificuldade</button></a>";
        }
        numChances = numChances - 1;
        textChances.innerText = "Chances Restantes: " + numChances;
    }
}

function salvarFacil(){
    localStorage.setItem("dificuldade", "9");
}

function salvarMedio(){
    localStorage.setItem("dificuldade", "99");
}

function salvarDificil(){
    localStorage.setItem("dificuldade", "999");
}

function salvarImpossivel(){
    localStorage.setItem("dificuldade", "9999");
}

function desistir(){
    desistiu = true;
    verificaNum(0);
}
