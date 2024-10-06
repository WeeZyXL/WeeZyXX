function verificar() { 
    var data = new Date(); 
    var ano = data.getFullYear(); 
    var fano = document.getElementById("txtano"); 
    var res = document.getElementById("res"); 

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique seus dados e tente novamente.");
    } else {
        var fsex = document.getElementsByName("radsex"); 
        var idade = ano - Number(fano.value); 
        var genero = ""; 
        var img = document.createElement('img'); 
        img.setAttribute("id", "foto"); 

        if (fsex[0].checked) {
            genero = "Homem";
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "foto-menino.png");
            } else if (idade < 21) {
                img.setAttribute("src", "foto-adolescente-m.png");
            } else if (idade < 51) {
                img.setAttribute("src", "foto-homem.png");
            } else {
                img.setAttribute("src", "foto-velho.png");
            }
        } else if (fsex[1].checked) {
            genero = "Mulher";
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "foto-menina.png");
            } else if (idade < 21) {
                img.setAttribute("src", "foto-adolescente-f.png");
            } else if (idade < 51) {
                img.setAttribute("src", "foto-mulher.png");
            } else {
                img.setAttribute("src", "foto-velha.png");
            }
        }
        
        res.innerHTML = `Verificado ${genero} com ${idade} anos.`; 
        res.appendChild(img); 
    }
}