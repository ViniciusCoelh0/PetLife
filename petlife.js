let elementduvida = document.querySelectorAll('.duvida')

elementduvida.forEach(function (duvida){
    duvida.addEventListener('click', function (){
        duvida.classList.toggle('ativa')
    })
})