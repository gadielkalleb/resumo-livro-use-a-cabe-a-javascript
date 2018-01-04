
//AQUI TEMOS UMA FUNCAO BAKE QUE RECEBE A TEMPERATURA EM GRAUS PARA O FORNO
function bake(degrees){
    var message;
    if (degrees > 500) {
        message = "I'm not a nuclear reactor";                      //ELA ENTAO DEFINE UMA
    }else if(degrees < 100){                                        //VARIAVEL PARA CADA UMA 
        message = "I'm not refrigerator!";                          //STRING QUE DEPENDE DA
    }else{                                                          //TEMPERATURA REUISITADA
        message = "That's a very confortable temperature for me.";  //NO PARAMETRO DEGRESS
        
        // setMode("bake");     //E PRESUMIDAMENTE ALGUM TRABALHO ESTA SENDO FEITO AQUI 
        // setTemp(degrees);    //PRECISO VER OQUE NÃO ESTA CERTO AQUI POI NÃO FUNCIONA COM ELES DESCOMENTADOS
    }
    return message; // AQUI RETORNA A MESSAGE COM O VALOR DA FUNCAO
}

//AGORA QUANDO A FUNCAO É CHAMADA E RETORNA, A STRING QUE É RETORNADA COMO RESULTADO SERA ATRIBUIDA Á VARIALVEL STATUS 
var status = bake(350);