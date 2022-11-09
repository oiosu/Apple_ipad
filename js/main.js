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


// 검색!!!
const headerEl = document.querySelector('header')
// ... : 전개 연산자 spread operator
// 전개 연산자를 이용한 얕은 복사 shallow copy
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')]
const searchWrapEl = headerEl.querySelector('.search-wrap')
const searchStarterEl = headerEl.querySelector('.search-starter')
const searchCloserEl = searchWrapEl.querySelector('.search-closer')
const searchShadowEl = searchWrapEl.querySelector('.shadow')

// searchStarterEl.addEventListener('click', function () {
//     showSearch()
// })

//  더 깔금하게 코드 작성하기 
// 자바스크립트 part 에서 더 자세하게 공부필요!
searchStarterEl.addEventListener('click', showSearch)
searchCloserEl.addEventListener('click', hideSearch)
searchShadowEl.addEventListener('click', hideSearch)

function showSearch() {
    headerEl.classList.add('searching')
    document.documentElement.classList.add('fixed')
    // 순차적으로 사라지도록 만들었다. 
    headerMenuEls.reverse().forEach(function (el, index) {
        //  index 숫자는 0 부터 시작한다. 
        el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
    })
}
function hideSearch() {
    headerEl.classList.remove('searching')
    // 검색바가 나타나면 화면이 고정되도록 만들었다.
    document.documentElement.classList.remove('fixed')
}


