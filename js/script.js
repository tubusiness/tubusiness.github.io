// Ẩn thông tin cá nhân
function handleSubmit() {
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  const checkMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const check = emailValue.match(checkMail);

  const personal = document.querySelector("#personal-info .section-content");
  const submitControl = document.querySelector(".submit-email");
  const errormail = document.getElementById("error-email");

  if (check) {
    personal.style.display = "block";
    submitControl.style.display = "none";
    errormail.getElementById("erro-email").innerHTML = "";
  } else {
    errormail.innerHTML = "Vui lòng nhập lại email!";
  }
}
// Ẩn thông tin nghề nghiệp
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.classList.remove("hidden");
}
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.classList.add("hidden");
}

function handleViewMore(element) {
  const mainInfoEl = element.closest(".main-info");
  const hiddenEl = mainInfoEl.querySelector(".main-content");
  hiddenEl.classList.toggle("hidden");
  let btnInner = element.innerHTML;
  if (btnInner.includes("View more")) {
    element.innerHTML = "View less";
  } else {
    element.innerHTML = "View more";
  }
}
