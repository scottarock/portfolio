$(document).ready(function() {

  // initialize Materialize objects
  $('.sidenav').sidenav();
  $('#nextfit').modal({
    startingTop: '4%',
    endingTop: '4%',
    onOpenEnd: function() {

      // initialize the carousel inside the modal
      $('.carousel').carousel({
        fullWidth: true,
        indicators: false,
        noWrap: true,
        onCycleTo: function(data) {

          var image = data.getElementsByTagName('img')[0];
          var title = image.attributes.getNamedItem('data-title');
          var caption = image.attributes.getNamedItem('data-caption');

          $('#title').html(title ? title.value : '&nbsp;');
          $('#caption').html(caption ? caption.value : '');
        }
      });

      // handle previous and next arrow clicks of carousel
      $('#previous').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        M.Carousel.getInstance($('#nextfit-screens')).prev();
      });

      $('#next').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        M.Carousel.getInstance($('#nextfit-screens')).next();
      });

      M.Carousel.getInstance($('#nextfit-screens')).set(0);

    }
  });

  // set the active link in the navbar
  $('.nav-wrapper ul li').on('click', function(event) {
    $('.nav-wrapper ul li').siblings().removeClass('active');
    event.currentTarget.classList.add('active');
  });

  // clear active links when logo clicked
  $('.brand-logo').on('click', function(event) {
    $('.nav-wrapper ul li').siblings().removeClass('active');
  });

  // hide sidenav bar when link clicked
  $('.sidenav li').on('click', function(event) {
    M.Sidenav.getInstance($('.sidenav')).close();
  });

});
