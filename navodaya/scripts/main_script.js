AOS.init();

$(window).on('load', function(){
    window.setTimeout(function(){
        
        $('#screen-loader').fadeOut('slow');
        
        // window.setTimeout(function(){
        //     $('#hello').fadeIn('slow');
        //     $('#under-construction').fadeIn('slow');
        // }, 500);
        
        $('html, body').animate({
            'scrollTop' : $("#contents").position().top
        });

        $('#hello').removeAttr('data-aos');
        $('#under-construction').removeAttr('data-aos');

        // window.setTimeout(function(){
            
        
        //     $('#hello').removeAttr('data-aos');
        //     $('#under-construction').removeAttr('data-aos');
        // }, 000);
        
    }, 500);
    // document.body.style.overflowY = 'scroll';
});