const currency = document.querySelectorAll('.currency')

currency.forEach(el => el.addEventListener('click',function(){
    currency.forEach(el => el.classList.remove('active'))
    this.classList.add('active')
}))