$(document).ready(function(){
    var sec01=$('#sec01');
    var sec02=$('#sec02');
    var sec03=$('#sec03');
    sec01.find('.btn1').click(function(){
        $(this).siblings('.div1').find('p').fadeIn(500,function(){
            alert('페이드인 완료');
        });
    });
    sec01.find('.btn2').click(function(){
        $(this).siblings('.div2').find('p').fadeOut(500);
    });
    sec01.find('.btn3').click(function(){
        $(this).siblings('.div3').find('p').stop().fadeToggle(500);
    });
    sec02.find('.btn1').click(function(){
        $(this).siblings('.div1').find('p').slideDown(500,function(){
            alert('페이드인 완료');
        });
    });
    sec02.find('.btn2').click(function(){
        $(this).siblings('.div2').find('p').slideUp(500);
    });
    sec02.find('.btn3').click(function(){
        $(this).siblings('.div3').find('p').stop().slideToggle(500);
    });
    sec03.find('div').animate({
        top: 600,
        left: 800,
        opacity: 0.6,
        paddingRight: 50,
        borderRadius: 30
    },8000,function(){
        alert('애니메이션 완료')    
    });
});