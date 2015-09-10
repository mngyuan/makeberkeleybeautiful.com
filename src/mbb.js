$(document).ready(() => {
  $('#mbb-picker-club').click((e) => {
    $('#mbb-decal').fadeOut(300);
    $('#mbb-pr').delay(300).fadeIn(300);

    $('#mbb-picker-club').addClass('active');
    $('#mbb-picker-decal').removeClass('active');
  });
  $('#mbb-picker-decal').click((e) => {
    $('#mbb-pr').fadeOut(300);
    $('#mbb-decal').delay(300).fadeIn(300);

    $('#mbb-picker-decal').addClass('active');
    $('#mbb-picker-pr').removeClass('active');
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

  $('#mbb-decal').submit(_ => {
    $.post(
      url,
      {
        code: $('#decal-code').val(),
        firstName: $('#decal-first_name').val(),
        lastName: $('#decal-last_name').val(),
        email: $('#decal-email').val(),
        major: $('#decal-major').val(),
        studentID: $('#decal-id').val(),
        year: $('#decal-year').val(), // fixme
        appliedBefore: $('#decal-before').val(),
        appliedTimes: $('#decal-applied').val(),
        units: $('#decal-units').val(),
        usedIllustrator: $('#decal-illustrator').is(':checked'),
        usedPhotoshop: $('#decal-photoshop').is(':checked'),
        usedInDesign: $('#decal-indesign').is(':checked'),
        usedGimp: $('#decal-gimp').is(':checked'),
        usedInkscape: $('#decal-inkscape').is(':checked'),
        usedOther: $('#decal-other').is(':checked'),
        usedOtherText: $('#decal-other-text').val(),
        experienceLevel: $('#decal-exp').val(), // fixme
        why: $('#decal-why').val(),
        real: $('#decal-real').val(),
        link: $('#decal-link').val(),
        mean: $('#decal-mean').val(),
        sudden: $('#decal-sudden').val(),
      }
    );
  });
});
