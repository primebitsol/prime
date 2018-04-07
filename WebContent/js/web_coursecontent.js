/*Web course content scripting */

//script for list view and grid view
    $(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');
    $('#products .item').addClass('grid-group-item');});
});

//script for filtering the course
    
 var $mediaElements = $('.course');
$('.filter_link').click(function(e){
    e.preventDefault();
    // get the category from the attribute
    var filterVal = $(this).data('filter');

    if(filterVal === 'all'){
      $mediaElements.show();
    }else{
       // hide all then filter the ones to show
       $mediaElements.hide().filter('.' + filterVal).show();
    }
});
//script for search bar
    //$('.course').hide();
    $('#search').click(function(){
        $('.course').hide();
        var txt = $('#search-criteria').val();
        $('.course').each(function(){
           if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
               $(this).show();
           }
        });
    });