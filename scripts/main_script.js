function switch_tabs(element_reference, class_name){
    
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
    $('#screen-loader').fadeOut('slow');
    // window.setTimeout(function(){
    //     $('#screen-loader').fadeOut('slow');
    // }, 500);
    document.body.style.overflowY = 'scroll';
});