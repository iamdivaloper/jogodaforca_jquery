// var btnCadastrar = document.getElementById("btnCadastrar");
// btnCadastrar.onclick = function(event) {
//     event.preventDefault();
//     alert("Messagem marota")
// };

var comecou = false;
var letrasChutadas = [];
var palavra = "";
var erro = 0;

//$("seletor html")
$("#btnCadastrar").click(function (event) {
    event.preventDefault();
    //Declarar variavel palavra com o valor do input
    palavra = $("#palavra").val();
    // Verificar se o campo esta vazio
    if (palavra == "") {
        // Se estiver vazio mostrar uma msg de erro 
        alert("Por favor preencha o campo!");
    } else {

        // Se não estiver vazio montar os underlines
        for (var i = 0; i < palavra.length; i++) {
            var span = $("<span>" + palavra[i] + "</span>");
            span.appendTo(".letras");
        }
        // Se não estiver vazio mostrar a tela forca
        //Adicionar classe "visivel" na tela da forca
        $("#forca").addClass("visivel");
        //Remover a classe na tela do cadastro
        $("#cadastro").removeClass("visivel");
        comecou = true;
    }

});

$(document).keydown(function (event) {
    if (comecou) {
        //Validando se é apenas uma letra
        var letra = event.key;
        if (letra.length > 1) {
            return;
        }
        //Vai Verificar se a letra ja foi utilizada
        if (letrasChutadas.indexOf(letra) != -1) {
            return;
        }

        //Registrar a letra utilizada
        letrasChutadas.push(letra);
        var span = $("<span>" + letra + "</span>");//criando elemento no $
        span.appendTo(".letras-usadas");
        //Letra existe na palavra cadastrada?
        if (palavra.indexOf(letra) != -1) {
            //Se sim
            //mostra no campo a letra correspondente
            for (var i = 0; i < palavra.length; i++) {
                var letra2 = palavra[i];
                //Se a letra que pressionei for igual a letra que estou iterando
                if (letra == letra2) {
                    //i é o indice que temos que mostrar na tela
                    $(".letras span").eq(i).addClass("visivel");
                }
            }
            //Se a palavra estiver completa
            if ($(".letras span:not(.visivel").length == 0) {
                //Mostra o final correto
                $("#ganhou").addClass("visivel");
                $("#forca").removeClass("visivel");
            }

        } else {
            //Se não  
            //mostra o membro do boneco
            $(".corpo *").eq(erro).attr("class", "st0 visivel");
            erro++;
            //se excedeu as tentativas
            //Mostra a familia triste 
            if (erro == 6) {
                $("#perdeu").addClass("visivel");
                $("#forca").removeClass("visivel");
            }
        }
    }
});

$(".btn-recomecar").click(function (event) {
    $(".corpo *").attr("class, st0");

    comecou = false;
    palavra = "";
    $("#palavra").val("");
    acerto = 0;
    erro = 0;
    letrasChutadas = [];

    $("#forca .letras").html("");
    $("#forca .letras-usadas").html("");

    $("#cadastro").addClass("visivel");
    $("#perdeu").removeClass("visivel");
    $("#ganhou").removeClass("visivel");
});




