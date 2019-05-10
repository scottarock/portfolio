$(document).ready(function() {
  console.log('jquery running');
  $('.nav-wrapper ul li').on('click', function(eventObject) {
    console.log('nav clicked', eventObject);
  })
});
