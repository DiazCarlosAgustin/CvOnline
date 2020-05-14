var menu = document.getElementsByClassName('btn-menu')
var conteinerNav = document.getElementById('container-nav')

function clickMenu(){
    document.getElementById('container-nav').classList.toggle("d-none")
    document.getElementById('main').classList.toggle("d-none")
}