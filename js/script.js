var open = document.querySelector(".open-popup");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".close");
var storage = "";
var isStorageSupport = true;
var login  = popup.querySelector("[name=user-name]");
var mail  = popup.querySelector("[name=user-mail]");
var text = popup.querySelector("textarea");

try {
  storage = localStorage.getItem();
}
catch (err) {
  isStorageSupport = false;
}

open.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("modal-open");
  if(storage){
    localStorage.getItem("login");
    mail.focus();
  }
  else {
    login.focus();
  }
});

close.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-open");
  popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt){
  if(evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-open")) {
      popup.classList.remove("modal-open");
      popup.classList.remove("modal-error");
    }
    else {
      if (map.classList.contains("modal-open")) {
        map.classList.remove("modal-open");
    }
  }
}
});

popup.addEventListener("submit", function(evt) {
  if (!login.value || !mail.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if(isStorageSupport){
      localStorage.setItem("login", login.value);
      localStorage.setItem("mail", mail.value);
      localStorage.setItem("text", text.value);
    }
  }
});
