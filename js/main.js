$(document).ready(function() {

  // initialize Materialize objects
  $('.sidenav').sidenav();
  $('#nextfit').modal({
    startingTop: '4%',
    endingTop: '4%',
    onOpenEnd: function() {

      // initialize the carousel inside the modal
      $('#nextfit-screens').carousel({
        fullWidth: true,
        indicators: false,
        noWrap: true,
        onCycleTo: function(data) {

          var image = data.getElementsByTagName('img')[0];
          var title = image.attributes.getNamedItem('data-title');
          var caption = image.attributes.getNamedItem('data-caption');

          var slides = data.parentElement.querySelectorAll('.carousel-item');

          $('#nextfit-title').html(title ? title.value : '&nbsp;');
          $('#nextfit-caption').html(caption ? caption.value : '');

          if ( data === slides[0] ) {
            $('#nextfit-next').show();
            $('#nextfit-previous').hide();
          } else if ( data === slides[slides.length -1] ) {
            $('#nextfit-previous').show();
            $('#nextfit-next').hide();
          } else {
            $('#nextfit-previous').show();
            $('#nextfit-next').show();
          }
        }
      });

      // handle previous, next and close clicks of carousel
      $('#nextfit-close').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        M.Modal.getInstance($('#nextfit')).close();
      });

      $('#nextfit-previous').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        M.Carousel.getInstance($('#nextfit-screens')).prev();
      });

      $('#nextfit-next').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        M.Carousel.getInstance($('#nextfit-screens')).next();
      });

      M.Carousel.getInstance($('#nextfit-screens')).set(0);

    }
  });
  $('#dropout').modal({
    startingTop: '4%',
    endingTop: '4%',
    onOpenEnd: function() {

      // initialize the carousel inside the modal
      $('#dropout-images').carousel({
        fullWidth: true,
        indicators: false,
        noWrap: true,
        onCycleTo: function(data) {

          var image = data.getElementsByTagName('img')[0];
          var title = image.attributes.getNamedItem('data-title');
          // var caption = image.attributes.getNamedItem('data-caption');

          var slides = data.parentElement.querySelectorAll('.carousel-item');

          $('#dropout-title').html(title ? title.value : '&nbsp;');
          // $('#caption').html(caption ? caption.value : '');

          if ( data === slides[0] ) {
            $('#dropout-previous').hide();
            $('#dropout-next').show();
          } else if ( data === slides[slides.length -1] ) {
            $('#dropout-previous').show();
            $('#dropout-next').hide();
          } else {
            $('#dropout-previous').show();
            $('#dropout-next').show();
          }

        }
      });

      // handle previous, next and close clicks of carousel
      $('#dropout-close').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        M.Modal.getInstance($('#dropout')).close();
      });

      $('#dropout-previous').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        M.Carousel.getInstance($('#dropout-images')).prev();
      });

      $('#dropout-next').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        M.Carousel.getInstance($('#dropout-images')).next();
      });

      M.Carousel.getInstance($('#dropout-images')).set(0);

    }
  });
  $('#brakes').modal({
    startingTop: '4%',
    endingTop: '4%',
    onOpenEnd: function() {

      // initialize the carousel inside the modal
      $('#brake-images').carousel({
        fullWidth: true,
        indicators: false,
        noWrap: true,
        onCycleTo: function(data) {

          var image = data.getElementsByTagName('img')[0];
          var title = image.attributes.getNamedItem('data-title');
          // var caption = image.attributes.getNamedItem('data-caption');

          var slides = data.parentElement.querySelectorAll('.carousel-item');

          $('#brakes-title').html(title ? title.value : '&nbsp;');
          // $('#caption').html(caption ? caption.value : '');

          if ( data === slides[0] ) {
            $('#brakes-previous').hide();
            $('#brakes-next').show();
          } else if ( data === slides[slides.length -1] ) {
            $('#brakes-previous').show();
            $('#brakes-next').hide();
          } else {
            $('#brakes-previous').show();
            $('#brakes-next').show();
          }
        }
      });

      // handle previous, next and close clicks of carousel
      $('#brakes-close').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        M.Modal.getInstance($('#brakes')).close();
      });

      $('#brakes-previous').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        M.Carousel.getInstance($('#brake-images')).prev();
      });

      $('#brakes-next').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        M.Carousel.getInstance($('#brake-images')).next();
      });

      M.Carousel.getInstance($('#brake-images')).set(0);

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
