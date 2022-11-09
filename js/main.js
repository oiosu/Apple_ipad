const basketStarterEL = document.querySelector('header .basket-starter')
const basketEL = basketStarterEL.querySelector('.basket')

basketStarterEL.addEventListener('click', function(event){
    event.stopPropagation()
    if (basketEL.classList.contains('show')) {
        //hide
        // basketEL.classList.remove('show')
        hideBasket()
    }else{
        // basketEL.classList.add('show')
        showBasket()
    }
})
// 이벤트 전파가 되지않도록 만들기
basketEL.addEventListener('click', function (event) {
    event.stopPropagation()
})


window.addEventListener('click', function() {
    // basketEL.classList.remove('show')
    hideBasket()
})

// 복잡한 로직을 간단하게 함수로 "추상화" 했다
// 장바구니 보여주기 
function showBasket(){
    basketEL.classList.add('show')
}
// 장바구니 사라지게 하기 
function hideBasket(){
    basketEL.classList.remove('show')
}
