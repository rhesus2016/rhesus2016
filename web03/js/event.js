$(document).ready(function(){
    var sec02=$('#sec02').find('div');
    var sec03=$('#sec03').find('a');
    var sec05=$('#sec05').find('div');
    var sec06=$('#sec06').find('div');
    $('#sec01').find('div').click(function(){
        $(this).text('클릭되었습니다.').css('cursor','default');
    });
    sec02.eq(0).on({
       'mouseenter':function(){$(this).text('마우스 커서가 위에 있습니다.')}, 
       'mouseleave':function(){$(this).text('마우스 커서가 벗어났습니다.')}, 
    });
    sec02.eq(1).hover(function(){
        $(this).text('마우스 커서가 hover로 위에 있습니다.');
    },function(){
        $(this).text('마우스 커서가 hover로 벗어났습니다.');   
    });
    sec03.on({
        'mouseenter focus':function(){$(this).text('focus').css({'border-color':'red', 'color':'red'});},
        'mouseleave blur':function(){$(this).text('blur').css({'border-color':'silver', 'color':'dimgray'});}
    });
    $('#sec04').find('div').scroll(function(){
        $(this).css('background','gold');
    });
    sec05.click(function(){
        $(this).text('클릭되었습니다.').css('cursor','default');
    });
    sec06.each(function(){
        var ani=$(this).text();
        alert(ani);
    });
});