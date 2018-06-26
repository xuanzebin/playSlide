var allButtons=$('#buttons>span')
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
var num=0
let size=allButtons.length
let timeSlide=setInterval(()=>{
    num++
    allButtons.eq(num%size).trigger('click')
},1000)
$('.pictureWindows').on('mouseenter',function(){
    clearInterval(timeSlide)
})
$('.pictureWindows').on('mouseleave',function(){
    timeSlide=setInterval(()=>{
        num++
        allButtons.eq(num%size).trigger('click')
    },1000)
})