// khai báo biến cho tiêu đề charter
let title = document.querySelector("h1");
// triển khai đối chiếu url đầu vào để lựa chọn những phần thông tin được hiển thị
// trường hợp url đầu vào có chứa project-1
if (document.location.href.includes("project-1")) {
  let all = document.querySelectorAll(".cv");
  title.innerHTML = "Project Charter - CV Web";
  all.forEach((item) => {
    item.style.display = "block";
  });
}
// trường hợp url đầu vào có chứa project-2
else if (document.location.href.includes("project-2")) {
  let all = document.querySelectorAll(".pet");
  title.innerHTML = "Project Charter - Pet Web";
  all.forEach((item) => {
    item.style.display = "block";
  });
}
// trường hợp url đầu vào có chứa project-3
else if (document.location.href.includes("project-3")) {
  let all = document.querySelectorAll(".news");
  title.innerHTML = "Project Charter - News Web";
  all.forEach((item) => {
    item.style.display = "block";
  });
}
