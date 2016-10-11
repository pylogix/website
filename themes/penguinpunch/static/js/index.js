function alignSocial() {
  w = $(window).width();
  console.log(w)

  if(w <= 1081) {
    $(".big-text").hide();
    $(".small-text").show();
    $(".social-buttons")
      .css({ "marginLeft": $(window).width() - $(".small-text").width() - 190 });
  } else if (w > 1080) {
    $(".small-text").hide();
    $(".big-text").show();
    $(".social-buttons")
      .css({ "marginLeft": $(window).width() - $(".big-text").width() - 190 });
  }
}

alignSocial();
$(window).resize(alignSocial);
