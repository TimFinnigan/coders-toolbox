$(document).ready(function() {
  let data = {
    icon: "fa fa-github",
    title: "GitHub",
    url: "https://www.github.com"
  };

  $("textarea").html(JSON.stringify(data, null, 2));

  $("#settings-icon").click(function() {
    console.log(data);
    $("#form-container").show();
  });
  $("form").submit(function() {
    alert("Submitted");
  });
});
