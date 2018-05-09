$(document).ready(function(){
    var woman=$('#sec02').find('.woman');
    var man=$('#sec02').find('.man');
    var sec04=$('#sec04');
    $('#sec01').find('div').css({'background':'bisque', 'border-style':'dashed', 'color':'red'});
    woman.css('background','mistyrose');
    man.css({'background':'powderblue', 'color':'white'});
    $('#sec03').find('.span01').css('background','yellow');
    $('#sec03').find('.span02').css('background','gold');
    sec04.find('.wrap').css('border-color','purple');
    sec04.find('.div1').css('border-color','yellow');
    sec04.find('p').eq(0).css('border-color','green');
    sec04.find('p').eq(1).css('border-color','red');
    sec04.find('a').eq(1).css('border-color','pink');
});