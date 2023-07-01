$(document).ready(function() {

    // Rolagem suave
    $('.menu ul li a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
                targetOffset = $(id).offset().top;
                
        $('html, body').animate({ 
            scrollTop: targetOffset - 0
        }, 500);
    });

    // Acende apaga lâmpada 
    $("#contato .box-info .lampada img").on('click', function(){
        let acende  = 'image/acessa.png';
        let apagada = 'image/apagada.png';
        let estado = $(this).attr("src")
        
        if(estado == acende){
            $(this).attr("src", apagada );
        }else{
            $(this).attr("src", acende );
        }
    })

    // Mostra contato 
    $('#contato .box-info .descricao .contado').hide();
    $('.btn').on('click', function(e){
        e.preventDefault();
        $('#contato .box-info .descricao .contado').toggle()
    });


    // Volta ao topo  
    $(window).scroll(function(){
        if ($(this).scrollTop() > 350) {
            $('.volta-ao-top').fadeIn();
        } else {
            $('.volta-ao-top').fadeOut();
        }
    });

    $('.volta-ao-top').click(function(e){
        e.preventDefault()
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});