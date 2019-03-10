$(document).ready(function() {

  $('#toggleIcons').on('click', function() {

      $('#secondRowOfIcons').slideToggle(500, function() {
        $('#toggleIcons').text() == 'See More' ? $('#toggleIcons').text('See Less') : $('#toggleIcons').text('See More')
      });
  });
});
