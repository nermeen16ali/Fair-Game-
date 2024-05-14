$(document).ready(function () {
    $(".navbar-btn").click(function () {
        $(".navbar-menu").css("display", "block");
        $(".navbar-menu").css("right", "0");
        $("body").css("overflow-y", "hidden");
    })
    $(".navbar-close").click(function () {
        $(".navbar-menu").css("display", "none");
        $(".navbar-menu").css("right", "-297px");
        $("body").css("overflow-y", "auto");

    })
    $(".card-btn").click(function () {
        $(".card-btn").not($(this)).removeClass('active');
        $(this).toggleClass('active');
        const value = $(this).attr('data-filter');
        $(".card-box").not('.' + value).hide();
        $(".card-box").filter('.' + value).toggle();
          // Scroll to the top of the button when clicking on a card button
        $(this).get(0).scrollIntoView();
        /* Chane the title */
        const originalTitle = "Pick a card to view more";
        const changedTitle = "Pick a card";
      
        // Check if the text box below is visible
        if ($(".card-box").is(":visible")) {
          $(".chaged-title").text(changedTitle);
        } else {
          $(".chaged-title").text(originalTitle);
        }
    })
})
