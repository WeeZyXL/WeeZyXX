function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 
msg.innerHTML = `Agora são ${hora} horas.`
if ( hora >=5 && hora < 12) {
    //Bom dia!
    img.src = 'Foto-manha.png'
    document.body.style.background = '#87CEEB'

} else if ( hora >= 12 && hora <18) {
    //Boa tarde!
    img.src = 'Foto-Tarde.png'
    document.body.style.background = "#FFA07A"
}
else { (hora >=18 && hora <5) 
    // Boa noite!
    img.src = 'Foto-noite.png'
    document.body.style.background = "#2C3E50"
}
}