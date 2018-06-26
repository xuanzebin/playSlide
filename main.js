var allButtons=$('#buttons>span')
var num=0
let size=allButtons.length
let timeSlide=setClock()



for(let i=0;i<allButtons.length;i++) {
    $(allButtons[i]).on('click',function(clickSlide) {
        let index=$(clickSlide.currentTarget).index()
        let n=index*-600
        $(images).css({
            transform:'translateX('+n+'px)'
        })
        $(allButtons[i]).addClass('red')
        .siblings('.red').removeClass('red')
        num=index
    })
}




$('.pictureWindows').on('mouseenter',function(){
    window.clearInterval(timeSlide)
})
$('.pictureWindows').on('mouseleave',function(){
    timeSlide=setClock()
})
function setClock() {
    return setInterval(()=>{
        num++
        allButtons.eq(num%size).trigger('click')
    },2000)
}