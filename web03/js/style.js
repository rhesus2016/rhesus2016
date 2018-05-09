$(document).ready(function(){
    var sec01=$('#sec01')
    var sec02=$('#sec02')
    var sec03=$('#sec03')
    var sec04=$('#sec04')
    sec01.find('.btn1').click(function(){
        $(this).siblings('.div1').css('font-size','1.5em');
    });
    sec01.find('.btn2').click(function(){
        $(this).siblings('.div2').css('border-radius','20px');
    });
    sec01.find('.btn3').click(function(){
        $(this).siblings('.div3').css('opacity',' 0.5');
    });
    sec02.find('.btn1').click(function(){
        $(this).siblings('.div1').show(400);
    });
    sec02.find('.btn2').click(function(){
        $(this).siblings('.div2').hide(400);
    });
    sec02.find('.btn3').click(function(){
        $(this).siblings('.div3').stop().toggle(400);
    });
    sec03.find('.btn1').click(function(){
        $(this).siblings('.div1').width(200);
    });
    sec03.find('.btn2').click(function(){
        $(this).siblings('.div2').height(200);
    });
    sec03.find('.btn3').click(function(){
        alert($(this).siblings('.div3').height());
    });
    sec04.find('.btn1').click(function(){
        $(this).siblings('.div1').scrollTop(0);
    });
    sec04.find('.btn2').click(function(){
        $(this).siblings('.div1').scrollTop(100);
    });
    sec04.find('.btn3').click(function(){
        alert($(this).siblings('.div1').scrollTop());
    });
});