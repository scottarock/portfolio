$(document).ready(function() {

  // initialize Materialize objects
  $('.sidenav').sidenav();

  // get instances of Materialize objects
  var mobileNav = M.Sidenav.getInstance($('.sidenav'));

  // set the active link in the navbar
  $('.nav-wrapper ul li').on('click', function(event) {
    $('.nav-wrapper ul li').siblings().removeClass('active');
    event.currentTarget.classList.add('active');
  });

  // clear active links when logo logo clicked
  $('.brand-logo').on('click', function(event) {
    $('.nav-wrapper ul li').siblings().removeClass('active');
  });

  // hide sidenav bar when link clicked
  $('.sidenav li').on('click', function(event) {
    mobileNav.close();
  });

});
