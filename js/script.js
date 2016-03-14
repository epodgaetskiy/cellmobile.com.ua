var link = document.querySelectorAll(".btn-free");
var link2 = document.querySelectorAll(".btn-order");
var link3 = document.querySelectorAll(".call-me");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".write-us-close");
var form = popup.querySelector("form");
var my_name = popup.querySelector("[name=my-name]");
var mobile = popup.querySelector("[name=mobile]");
var storage = localStorage.getItem("my_name");

$('.btn-free').on("click", function(event) {
    event.preventDefault();
    popup.classList.add("write-us-show");   
    if (storage) {
      my_name.value = storage;
      mobile.focus();
      } else {
          my_name.focus(); 
        }
    });

$('.btn-order').on("click", function(event) {
    event.preventDefault();
    event.preventDefault();
    popup.classList.add("write-us-show");   
    if (storage) {
      my_name.value = storage;
      mobile.focus();
      } else {
          my_name.focus(); 
        }
    });

$('.call-me').on("click", function(event) {
    event.preventDefault();
    event.preventDefault();
    popup.classList.add("write-us-show");   
    if (storage) {
      my_name.value = storage;
      mobile.focus();
      } else {
          my_name.focus(); 
        }
    });

close.addEventListener("click", function(event) {
  event.preventDefault();
    popup.classList.remove("write-us-show");
    popup.classList.remove("write-us-error");
  });

form.addEventListener("submit", function(event) {
  if (!(my_name.value && mobile.value)) {
    event.preventDefault();
    popup.classList.remove("write-us-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("write-us-error");
    } else {
        localStorage.setItem("my_name", my_name.value);
      }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (popup.classList.contains("write-us-show")) {
      popup.classList.remove("write-us-show");
      popup.classList.remove("write-us-error");
    }
  }
});

$(document).ready(function() {

  $("#form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
      $("#form").trigger("reset");
    });
    return false;
  });
  
});
