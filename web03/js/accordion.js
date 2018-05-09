$(document).ready(function(){
    function allClose(){
        $('dt').addClass('close');
        $('dd').addClass('close');
    }
    function open(a,b){
        a.removeClass('close');
        b.removeClass('close');
    }
    allClose();
    $('dt').click(function(){
        var dt=$(this);
        var dd=dt.next('dd');
        allClose();
        open(dt,dd);
    });
});