var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  navMain.classList.toggle("main-nav--hide");
});

var popupError = document.querySelector(".modal__error");
var popupSuccess = document.querySelector(".modal__success");
var form = document.querySelector(".form-review");
var username = document.querySelector("[name=username]");
var surname = document.querySelector("[name=user-surname]");
var email = document.querySelector("[name=email]");
var tel = document.querySelector("[name=tel]");
var closeError = popupError.querySelector(".modal__button--error");
var closeSuccess = popupSuccess.querySelector(".modal__button--success");

  form.onsubmit = function(evt) {
    if (!username.value || !surname.value || !email.value || !tel.value)  {
      evt.preventDefault();
      popupError.classList.add("modal__error--show");
      closeError.focus();
    } else {
      popupSuccess.classList.add("modal__success--show");
      closeSuccess.focus();
    }
  };

  closeError.addEventListener("click", function () {
    popupError.classList.remove("modal__error--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 13) {
      if (popupError.classList.contains("modal__error--show")) {
        popupError.classList.remove("modal__error--show");
      }
    }
  });

  closeSuccess.addEventListener("click", function () {
    popupSuccess.classList.remove("modal__success--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 13) {
      if (popupSuccess.classList.contains("modal__success--show")) {
        popupSuccess.classList.remove("modal__success--show");
      }
    }
  });
