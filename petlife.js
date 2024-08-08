let elementduvida = document.querySelectorAll('.duvida')

alert("Este site foi feito para fins acadêmicos, nada nele é real. |  This site was made for academic purposes, nothing on it is real.")


elementduvida.forEach(function (duvida){
    duvida.addEventListener('click', function (){
        duvida.classList.toggle('ativa')
    })
})
