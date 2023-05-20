var ResetPasswrodAlertBox = document.querySelector(".ResetPasswrodAlertBox");
var btnResetPasswordForgot = document
  .querySelector(".btn-ResetPasswordForgot")
  .addEventListener("click", function () {
    ResetPasswrodAlertBox.classList.add("visibleForRestBtnClick");
  });

// ........ owl carousel start ........
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
// .........owl carousel end  .........
