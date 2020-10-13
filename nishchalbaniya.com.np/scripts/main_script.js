function switch_tabs(element_reference, class_name){
    const page_y_pos_initial = window.pageYOffset;


    const active_elements = $('.tab-open.'+class_name);
    

    // ADDING THE ACTIVE STATUS TO THE CLICKED ELEMENTS.

    $(element_reference).removeClass('tab-close');
    $(element_reference).addClass('tab-open');

    const ID = getIDFromHref(element_reference.href);

    $('#'+ID).removeClass('tab-close');
    $('#'+ID).addClass('tab-open');


    // REMOVING THE ACTIVE STATUS FROM THE PREVIOUSLY ACTIVE ELEMENTS.
    active_elements[0].classList.remove('tab-open');
    active_elements[0].classList.add('tab-close');
    active_elements[1].classList.remove('tab-open');
    active_elements[1].classList.add('tab-close');
    const page_y_pos_final = window.pageYOffset;

    // alert("Initial: "+page_y_pos_initial+", Final: "+page_y_pos_final);

    const page_y_pos = page_y_pos_initial > page_y_pos_final ? page_y_pos_initial : page_y_pos_final;

    // document.body.scrollTop = 0;
    window.scrollTo(0, page_y_pos);

    // setTimeout(function (){
        
    //     // REMOVING THE ACTIVE STATUS FROM THE PREVIOUSLY ACTIVE ELEMENTS.
    //     active_elements[0].classList.remove('tab-open');
    //     active_elements[0].classList.add('tab-close');
    //     active_elements[1].classList.remove('tab-open');
    //     active_elements[1].classList.add('tab-close');
    //     // document.body.scrollTop = 0;
    //     window.scrollTo(0, page_y_pos);
    // }, 200);

    
    
    

}

function switch_tabs_old(element_reference, class_name){
    
    // const active_element = $('.tab-open');
    // const active_element_id = getIDFromHref(active_element[0].href);

    // // OPENING THE CLICKED TAB.
    // element_reference.classList.remove('tab-close');
    // element_reference.classList.add('tab-open');

    // var ID = getIDFromHref(element_reference.href);
    // $('#'+ID).removeClass('tab-close');
    // $('#'+ID).addClass('tab-open');

    // // CLOSING THE PREVIOUSLY OPENED TAB.
    // active_element[0].classList.remove('tab-open');
    // active_element[0].classList.add('tab-close');

    // $('#'+active_element_id).removeClass('tab-open');
    // $('#'+active_element_id).addClass('tab-close');

    // setTimeout(function(){
    //     // CLOSING THE PREVIOUSLY OPENED TAB.
    //     active_element[0].classList.remove('tab-open');
    //     active_element[0].classList.add('tab-close');

    //     $('#'+active_element_id).removeClass('tab-open');
    //     $('#'+active_element_id).addClass('tab-close');
    // }, 1000);

    
    

    // alert(getIDFromHref(active_element[0].href))

    // active_element.classList.remove('tab-open');

    // Firstly removing tab-open class from all the elements of the related group(specified by the other group class name), and adding tab-close class in them. 
    $('.'+class_name).removeClass('tab-open');
    $('.'+class_name).addClass('tab-close');
    
    // Removing tab-close class from the clicked element(TAB HEADING), and adding tab-open class in it.
    $(element_reference).removeClass('tab-close');
    $(element_reference).addClass('tab-open');

    
    // Getting the ID of the TAB CONTENT, and removing tab-close class from the TAB CONTENT, and adding tab-open class in it.
    var ID = getIDFromHref(element_reference.href);
    $('#'+ID).removeClass('tab-close');
    $('#'+ID).addClass('tab-open');
    // document.getElementById(ID).style.transition = 'all 2s';

}

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  }
  
  // call this to Enable
  function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
  }

function show_tabs(element_reference, class_name){
    // Getting the ID of the TAB CONTENT, and removing tab-close class from the TAB CONTENT, and adding tab-open class in it.
    var ID = getIDFromHref(element_reference.href);
    $('#'+ID).removeClass('tab-open');
    $('#'+ID).addClass('tab-close');
    
    // $('#'+ID).removeClass('tab-close');
    // $('#'+ID).addClass('tab-open');
}

function hide_tabs(element_reference, class_name){
    // Getting the ID of the TAB CONTENT, and removing tab-close class from the TAB CONTENT, and adding tab-open class in it.
    var ID = getIDFromHref(element_reference.href);
    $('#'+ID).removeClass('tab-open');
    $('#'+ID).addClass('tab-close');
}

function getIDFromHref(href){
    return href.split('#')[1];
}

function getReverse(string){
    return string.split('').reverse().join('');
}

// $(document).ready(function(){
//     // $('#honors_and_awards_section ul li a').onclick(
//     //     function(){
//     //         alert("GERE");
//     //     }
//     // );

//     $('#whatever').on('click', function() {
//         /* your code here */
//    });

// }

$(document).ready(function(){

    // $('#experience_section ul li a').on('mouseover', function() {
    //     switch_tabs(this, 'experience_section_group')
    // });
    
    // $('#honors_and_awards_section ul li a').on('mouseover', function() {
    //     switch_tabs(this, 'honors_and_awards_section_group')
    // });

    // $('#honors_and_awards_section ul li a').on('mouseover', function() {
    //     show_tabs(this, 'honors_and_awards_section_group')
    // });

    // $('#honors_and_awards_section ul li a').on('mouseout', function() {
    //     hide_tabs(this, 'honors_and_awards_section_group')
    // });

});

$(window).on('load', function(){
    // $('#screen-loader').fadeOut('slow');
    window.setTimeout(function(){
        $('#screen-loader').fadeOut('slow');
    }, 500);
    document.body.style.overflowY = 'scroll';
});