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

  $('#mbb-pr').submit(_ => {
    $.post(
      'https://script.google.com/macros/s/AKfycbw_ZcSMukm4aNV0LXjjoWVLULn-EGW3wKhqYLdXMNmdcND6mJU/exec',
      {
        code: $('#pr-decal-code').val(),
        firstName: $('#pr-first_name').val(),
        lastName: $('#pr-last_name').val(),
        email: $('#pr-email').val(),
        major: $('#pr-decal-major').val(),
        year: $("input[type='radio'][name='pr-decal-year']:checked").val(),
        unitType: $("input[type='radio'][name='pr-unit-type']:checked").val(),
        appliedBothDecal: $("input[type='radio'][name='pr-decal-before']:checked").val(),
        experience: $('#pr-experience').val(),
        workSent: $('#pr-work-sent').is(':checked'),
        aesthetic: $('#pr-aesthetic').val(),
        inspiration: $('#pr-inspiration').val(),
        superhero: $('#pr-superhero').val(),
        questions: $('#pr-questions').val(),
      },
      res => {
        $("#mbb-pr").append('Thanks for applying!');
        window.location.replace('/submitted.html');
      }
    );
  });

  $('#mbb-decal').submit(_ => {
    $.post(
      'https://script.google.com/macros/s/AKfycbxoE_55b6K0AwFtTaMA-ix7COfp3-9P0ZTdzRrs2JvKQwxL05M/exec',
      {
        code: $('#decal-code').val(),
        firstName: $('#decal-first_name').val(),
        lastName: $('#decal-last_name').val(),
        email: $('#decal-email').val(),
        major: $('#decal-major').val(),
        studentID: $('#decal-id').val(),
        year: $("input[type='radio'][name='decal-year']:checked").val(),
        appliedBefore: $("input[type='radio'][name='decal-before']:checked").val(),
        appliedTimes: $('#decal-applied').val(),
        units: $('#decal-units').val(),
        usedIllustrator: $('#decal-illustrator').is(':checked'),
        usedPhotoshop: $('#decal-photoshop').is(':checked'),
        usedInDesign: $('#decal-indesign').is(':checked'),
        usedGimp: $('#decal-gimp').is(':checked'),
        usedInkscape: $('#decal-inkscape').is(':checked'),
        usedOther: $('#decal-other').is(':checked'),
        usedOtherText: $('#decal-other-text').val(),
        experienceLevel: $("input[type='radio'][name='decal-exp']:checked").val(),
        why: $('#decal-why').val(),
        real: $('#decal-real').val(),
        link: $('#decal-link').val(),
        mean: $('#decal-mean').val(),
        sudden: $('#decal-sudden').val(),
      },
      res => {
        $("#mbb-decal").append('Thanks for applying!');
        window.location.replace('/submitted.html');
      }
    );
  });
});
