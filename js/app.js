let headerMenu = document.querySelector('.header__menu')
let headerClose = document.querySelector('.header__close')
let headerList = document.querySelector('.header__list')

headerMenu.addEventListener('click' , function(){
    headerClose.style.display = 'block'
    headerMenu.style.display = 'none'
    headerList.style.display = 'block'
})

headerClose.addEventListener('click' ,  function(){
    headerClose.style.display = 'none'
    headerMenu.style.display = 'block'
    headerList.style.display = 'none'
})
