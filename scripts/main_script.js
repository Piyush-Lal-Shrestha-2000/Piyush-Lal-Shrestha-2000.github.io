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

}

function getIDFromHref(href){
    return href.split('#')[1];
}

function getReverse(string){
    return string.split('').reverse().join('');
}