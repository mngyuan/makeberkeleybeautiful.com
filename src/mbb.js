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
});
