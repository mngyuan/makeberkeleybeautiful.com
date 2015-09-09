$(document).ready(() => {
  $('#mbb-picker-club').click((e) => {
    $('#mbb-decal').fadeOut(300);
    $('#mbb-club').delay(300).fadeIn(300);

    $('#mbb-picker-club').addClass('active');
    $('#mbb-picker-decal').removeClass('active');
  });
  $('#mbb-picker-decal').click((e) => {
    $('#mbb-club').fadeOut(300);
    $('#mbb-decal').delay(300).fadeIn(300);

    $('#mbb-picker-decal').addClass('active');
    $('#mbb-picker-club').removeClass('active');
  });

  $('#mbb-logo').addClass('loaded');

  setInterval(_ => {
    console.log($('body').attr('class'));
    switch ($('body').attr('class')) {
      case 'mbb-cyan':
        $('body').attr('class', 'mbb-yellow');
        break;
      case 'mbb-yellow':
        $('body').attr('class', 'mbb-magenta');
        break;
      case 'mbb-magenta':
        $('body').attr('class', 'mbb-black');
        break;
      case 'mbb-black':
        $('body').attr('class', 'mbb-cyan');
        break;
      default:
        $('body').attr('class', 'mbb-cyan');
        break;
    }
  }, 5000);
});
