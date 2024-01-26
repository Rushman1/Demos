(function (baseCode) {
  baseCode(window.jQuery, window, document);
})(function ($, window, document) {
  $(function () {
    // Button Clicks
    $(".btn").click((e) => {
      var b = $(e.currentTarget);
      //   <ion-icon name="flower-outline"></ion-icon>;
      setWaitSymbol(b);
      window.setTimeout(setFinished, 5000);
    });
  });
  // Wrappers

  // AJAX Functions

  // Functions
  function setWaitSymbol(btn) {
    $(btn).empty().append(showWaitSymbol().fadeIn(250));
  }
  function showWaitSymbol() {
    var b = '<ion-icon name="flower-outline" class="spin"></ion-icon>';
    return $(b).hide();
  }
  function setFinished() {
    $(".btn").fadeOut(750, "linear", showCheckBox);
  }
  function showCheckBox() {
    $("#button-section").append(buildCheckBoxSpan()).hide().fadeIn(250);
  }
  function buildCheckBoxSpan() {
    var b =
      '<span class="checkbox-span"><ion-icon name="checkbox"></ion-icon>&nbsp;Completed!</span>';
    return b;
  }
  // Dynamic Buttons
});

{
  /* <i class="fad fa-spinner-third fa-spin"></i>; */
}
