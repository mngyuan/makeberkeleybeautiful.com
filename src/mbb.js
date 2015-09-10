$(document).ready(() => {
  $('#mbb-logo').addClass('loaded');

  setInterval(_ => {
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
