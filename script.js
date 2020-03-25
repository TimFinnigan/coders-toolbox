$(document).ready(function() {
  let data = {
    icon: "fa fa-github",
    title: "GitHub",
    url: "https://www.github.com"
  };
  $("#settings-icon").click(function() {
    console.log(data);
    $("#form-container").show();
  });
  $("form").submit(function() {
    alert("Submitted");
  });
});
